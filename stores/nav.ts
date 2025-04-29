import { defineStore } from 'pinia'
// import { ref, onMounted, watch } from 'vue'
import { ref } from 'vue'


export const useNavStore = defineStore('nav', () => {
    const homeNav = ref(false)
    const topNavOpen = ref(true)

    const sidebarFilterParam = ref(false)

    const page_size = ref(10)

    const page_size_options = ref([ 10, 20, 30, 40, 50, 100 ])


    const mainParam = ref([]);
    const serarchText = ref('');
    const sortingParam = ref([]);
    const optionalParam = ref([]);

    const nowLoading = ref(false);

// ✅ ฟังก์ชันแยก `mainParam` และ `optionalParam` และอัปเดต `filters`
const loadFiltersFromURL = (filters, route) => {
  const queryFilters = route.query.optionalAttr;



  // ✅ [2] แยก `optionalAttr` เป็น Array
  const optionalFilters = queryFilters
    ? (Array.isArray(queryFilters) ? queryFilters : [queryFilters])
    : [];

  // ✅ รีเซ็ตค่าทั้งหมดก่อนอัปเดตจาก URL
  filters.forEach(filter => {
    filter.options.forEach(option => {
      option.checked = false; // ✅ ตั้งค่า default ให้เป็น false ก่อน
    });
  });

  if (queryFilters) {
    // ✅ ตรวจสอบว่ามี filter อยู่ใน URL หรือไม่
    const filterArray = Array.isArray(queryFilters) ? queryFilters : [queryFilters];

    filterArray.forEach(param => {
      const [filterId, values] = param.split('/'); // แยก `color/green`
      const selectedValues = values.split(','); // กรณีมีหลายค่า `color/green,blue`

      // ✅ อัปเดตค่า `checked: true` ใน filters
      const filter = filters.find(f => f.id === filterId);
      if (filter) {
        filter.options.forEach(option => {
          option.checked = selectedValues.includes(option.value);
        });
      }
    });
  }


  // mainParam.value = mainFilter;
  optionalParam.value = filters
  // serarchText.value = optionalParam.q

  // console.log("nav.store :::::::::: optionalParam.value: ", optionalParam.value)
  
  return {
    // mainParam: mainFilter,
    optionalParam: filters
    // serarchText: optionalParam.q
  }
  
  ;
};

  // http://127.0.0.1:3500/common-table?q=google&categoryId=xxx&optionalAttr=category/new-arrivals&optionalAttr=color/black,red&optionalAttr=size/2l,6l

const loadMainParameters = (route) => {

    // console.log("nav.store :::::::::: route.query: ", route.query)

    const mainFilter = Object.fromEntries(
      Object.entries(route.query)
        .filter(([key, value]) => key !== "optionalAttr" && key !== "sortBy" && value !== '' ) // ✅ กรองค่าที่ไม่ใช่ optionalAttr
        .map(([key, value]) => [key, Array.isArray(value) ? value[0] : value]) // ✅ แปลงเป็น Key-Value Pair
    );

    // console.log("nav.store :::::::::: mainFilter: ", mainFilter)
  
    mainParam.value = mainFilter; // ✅ อัปเดตค่า mainParam (ถ้าใช้ ref)
    
    return mainFilter;
  };

const loadSorting = (route) => {

  // console.log("nav.store :::::::::: route.query: ", route.query)

  const sortingBy = Object.fromEntries(
    Object.entries(route.query)
      .filter(([key, value]) => key === "sortBy"   ) // ✅ กรองค่าที่ไม่ใช่ optionalAttr
      .map(([key, value]) => [key, Array.isArray(value) ? value[0] : value]) // ✅ แปลงเป็น Key-Value Pair
  );

  // console.log("nav.store :::::::::: sortingBy: ", sortingBy)

  sortingParam.value = sortingBy; // ✅ อัปเดตค่า mainParam (ถ้าใช้ ref)
  
  return sortingBy;
};

const setPageSize = (value) => {
  page_size.value = value 
}

const setNowLoading = (value) => {
  nowLoading.value = value 
}


    return { homeNav, topNavOpen, sidebarFilterParam,page_size, page_size_options, 
            mainParam, optionalParam, serarchText,sortingParam,nowLoading,
            loadFiltersFromURL,loadMainParameters,loadSorting,
            setPageSize,setNowLoading }
})
