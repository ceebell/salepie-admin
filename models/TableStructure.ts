
export interface TableStructure {
  datatype:  'text' | 'image' | 'number' | 'money' | 'website' | 'date' | 'datetime'| 'switch' | 'text_list' | 'action_button' | 'progress';
  field: string;
  mapping?: string;
  label?: string;
  defaultValue?: any;
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
