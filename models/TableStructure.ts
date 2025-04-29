
export interface TableStructure {
  datatype:  'text' | 'image' | 'number' | 'money' | 'website' | 'date' | 'datetime'| 'switch' 
              | 'text_list' | 'action_button' | 'progress' | 'image_text_1'| "text_subtext_1";
  field?: string;
  mapping?: string;
  label?: string;
  defaultValue?: any;
  imageField?: string;
  imageMapping?: string;
  imageDefaultValue?: string;
  textField?: string;
  textMapping?: string;
  textDefaultValue?: string;
  subtextField?: string;
  subtextMapping?: string;
  subtextDefaultValue?: string;

}

export interface filterStructure {
  q: string;
  itemStatus: string;
  startDate: string;
  endDate: string;
}

// const objectStructure = ref<TableStructure[]>([
//   {
//     datatype: 'text',
//     field: 'id', 
//     mapping: 'prod_id',
//     defaultValue: '',
//   },
//   {
//     datatype: 'image',
//     field: 'image', 
//     label: 'Image',
//     mapping: 'pic_url',
//     defaultValue: '',
//   },
//   { 
//     field: 'name', 
//     datatype: 'text',
//     label: 'Product',
//     mapping: 'title',
//     defaultValue: 'ไม่ระบุ',
//   },
// ]);
