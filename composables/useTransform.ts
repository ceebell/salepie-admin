// composables/useTransform.ts
export const useTransform = () => {
    const transformRecords = (apiRecords: any[], objectStructure: any[]) => {
      return apiRecords.map(apiRecord => {
        const transformedRecord: Record<any, any> = {};
        objectStructure.forEach(({ field, mapping, defaultValue }) => {
          transformedRecord[field] = apiRecord[mapping] !== undefined ? apiRecord[mapping] : defaultValue;
        });
        return transformedRecord;
      });
    };
  
    return {
      transformRecords,
    };
  };