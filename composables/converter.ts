import { ref } from 'vue';

export function useConvertToMoney() {
  const convertToMoney = (number: number) => {
    if (typeof number !== 'number') {
      throw new Error('Input must be a number');
    }
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  return {
    convertToMoney,
  };
}
