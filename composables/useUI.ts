export const useUI = () => {



    const getColumnClass = (width?: string) => {
        const map = {
        'full': 'w-full',
        '1': 'w-full',
        '1/1': 'w-full',
        '1/2': 'sm:w-1/2',
        '2/2': 'sm:w-full',
        '1/3': 'sm:w-1/3',
        '2/3': 'sm:w-2/3',
        '1/4': 'sm:w-1/4',
        '3/4': 'sm:w-3/4',
        '1/5': 'sm:w-1/5',
        '2/5': 'sm:w-2/5',
        '3/5': 'sm:w-3/5',
        '4/5': 'sm:w-4/5',
        '1/6': 'sm:w-1/6',
        '5/6': 'sm:w-5/6',
        '4/6': 'sm:w-4/6',
        };
        return map[width] || 'sm:w-full'
      };

      const getInputComponent = (field) => {
        switch (field.type) {
          case 'text': return 'FormFieldsTextInputField';
          case 'textarea': return 'FormFieldsTextareaField';
          case 'review2': return 'FormFieldsNumberField';
          case 'tag': return 'FormFieldsTagField';
          default: return 'FormFieldsTextInputField';
        };
    };

    const groupFormFieldsIntoRows = (fields) => {
      if (!Array.isArray(fields)) {
        console.warn('❌ Expected an array for form fields, but got:', fields)
        return []
      }
    
      const rows = []
      let currentRow = []
      let currentWidth = 0
    
      for (const field of fields) {
        const width = field.width || '1/1'
        const [num, denom] = width.split('/').map(Number)
        const fieldWidth = num / denom
    
        const shouldBreak = field.newLine || (currentWidth + fieldWidth > 1)
    
        if (shouldBreak) {
          if (currentRow.length > 0) rows.push(currentRow)
          currentRow = [field]
          currentWidth = fieldWidth
        } else {
          currentRow.push(field)
          currentWidth += fieldWidth
        }
      }
    
      if (currentRow.length > 0) rows.push(currentRow)
      return rows
    };

    

    return {
        getColumnClass,getInputComponent, groupFormFieldsIntoRows
      };
};