// composables/useTransform.ts


interface TableStructure {
  datatype: string
  field?: string
  mapping?: string
  defaultValue?: any

  // composite
  imageField?: string
  imageMapping?: string
  imageDefaultValue?: string

  textField?: string
  textMapping?: string
  textDefaultValue?: string

  subtextField?: string
  subtextMapping?: string
  subtextDefaultValue?: string
}

interface RecordItem {
  [key: string]: any
}

// [0.1] สร้างฟังก์ชัน `getNestedValue` สำหรับดึงค่าจาก Object แบบซ้อน 
// เช่น getNestedValue({ a: { b: { c: 1 } } }, 'a.b.c') => 1

const getNestedValue = (obj: any, path: string, defaultValue: any = ''): any => {
  return path?.split('.').reduce((o, key) => (o && o[key] !== undefined ? o[key] : undefined), obj) ?? defaultValue
}

export const useTransform = () => {
 
    // [1] แปลงข้อมูลจาก API ให้เป็นรูปแบบที่ต้องการ
    const transformRecords = (apiRecords: any[], objectStructure: TableStructure[]) => {
      return apiRecords.map(apiRecord => {

        // const transformedRecord: Record<any, any> = {};
        const transformedRecord: RecordItem = {}

          objectStructure.forEach(obj => {
            const { datatype } = obj

            // if complex case
            if (['image_text_1', 'text_subtext_1'].includes(datatype)) {
              if (obj.imageField) {
                transformedRecord[obj.imageField] = getNestedValue(apiRecord, obj.imageMapping!, obj.imageDefaultValue)
              }

              if (obj.textField) {
                transformedRecord[obj.textField] = getNestedValue(apiRecord, obj.textMapping!, obj.textDefaultValue)
              }

              if (obj.subtextField) {
                transformedRecord[obj.subtextField] = getNestedValue(apiRecord, obj.subtextMapping!, obj.subtextDefaultValue)
              }
            } else {

              // if basic case
              const { field, mapping, defaultValue } = obj
              if (field && mapping) {
                transformedRecord[field] = getNestedValue(apiRecord, mapping, defaultValue)
              }
            }
          })

          // console.log('USE  ::::: transformedRecord >>> ',transformedRecord)

          return transformedRecord
        })
    };

    // [2] แยก `optionalAttr` เป็น Array
    const generateFilterParams = (filters: any[]) => {
      const params = filters
        .map(filter => {
          const selectedOptions = filter.options
            .filter(option => option.checked)
            .map(option => option.value);
    
            return selectedOptions.length > 0 ? `${filter.id}/${selectedOptions.join(',')}` : null; // ✅ ไม่เพิ่ม optionalAttr ที่นี่
        })
        .filter(param => param !== null); // ✅ ลบค่าที่เป็น null ออก
    
      return params.length > 0 ? params : []; // ถ้าไม่มีค่าเลย ให้คืนค่า `null`
    };

    // [3] แยก `Main Attr`
    const generateUrl_MainParams = (filters: any) => {
      const queryObject: any = {};

      Object.entries(filters).forEach(([key, value]) => {
        if (value !== '' && value !== null && value !== undefined) {
              queryObject[key] = value;
            }
          });

        // console.log("USE  ::::: queryObject >>> ",queryObject)

          return queryObject;
    };


    // [4] เปลี่ยน Optional Criteria เป็น JSON เป็น URL
    // 
    // const criteria = {
    //   color: ['black'],
    //   size: ['2l']
    // }
    // >>> 
    // optionalAttr=color/black&optionalAttr=size/2l
    const buildOptionalAttrQuery = (criteriaObj: any) => {
      const params = new URLSearchParams()
    
      for (const [key, values] of Object.entries(criteriaObj)) {
        if (Array.isArray(values) && values.length > 0) {
          const valueStr = values.join(',')
          params.append('optionalAttr', `${key}/${valueStr}`)
        }
      }
    
      return params.toString()
    }



    // [5] Mapping Quick Filter to Main Criteria   
    // mainCriteria.value = { q: 'google', cateId: 'aaa' }
    // quickFilter.value = { q: 'hello', itemStatus: '', startDate: null, endDate: undefined }
   
    // *** ผลลัพธ์: { q: 'hello', cateId: 'aaa' } ***

    const mappingQuickFilterToMainCriteria = (mainCriteria: any, quickFilter: any) => {
      const result = { ...mainCriteria } // clone เพื่อไม่เปลี่ยนต้นฉบับ
    
      // รวม key จากทั้ง mainCriteria และ quickFilter
      const allKeys = new Set([...Object.keys(mainCriteria), ...Object.keys(quickFilter)])
    
      for (const key of allKeys) {
        const value = quickFilter[key]
        const isValid = value !== '' && value !== null && value !== undefined
    
        if (isValid) {
          result[key] = value
        } else {
          result[key] = ''
        }
      }
    
      console.log('%%%%% useTransform.ts :::: FINAL  result >>> ', result)
      return result
    }

    
  

    
    return {
      transformRecords, generateFilterParams, generateUrl_MainParams,
      buildOptionalAttrQuery, mappingQuickFilterToMainCriteria
    };
  };