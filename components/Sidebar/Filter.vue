<template>
  <div>
    <!-- Toggle Button (Outside TransitionRoot) -->
    <!-- <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-40">
      <button @click="openFilter()"
        class="flex items-center rounded-l-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16"></path>
          <path d="M4 10h16"></path>
          <path d="M10 16h4"></path>
        </svg>
      </button>
    </div> -->
    <TransitionRoot as="template" :show="navStore.sidebarFilterParam">
      <Dialog class="relative z-50" @close="closeFilter" ref="dialog">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden custom-scrollbar">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full" enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto relative w-96">

                  <div class="h-full overflow-y-auto bg-white p-8 custom-scrollbar">
                    <div class="pb-4">
                      <!-- HEADER and X mark to CLOSE -->
                      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="flex items-start justify-between">
                          <DialogTitle class="text-base font-semibold text-gray-900">Product Items</DialogTitle>
                          <div class="ml-3 flex h-7 items-center">
                            <button type="button"
                              class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                              @click="closeFilter()">
                              <span class="absolute -inset-2.5" />
                              <span class="sr-only">Close panel</span>
                              <XMarkIcon class="size-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </TransitionChild>
                    </div>
                    <div class="space-y-6 pb-16">
                      <!-- Footer -->
                      <div
                        class="py-4 px-5 lg:py-6 lg:ps-0 flex items-center gap-x-2 border-t border-gray-200 dark:border-neutral-700">
                        <button type="button"
                           @click="clearFilters()"
                          class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-1.5 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                          data-hs-overlay="#hs-pro-shflo">
                          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          Clear filters
                        </button>

                        <button type="button"
                          class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
                          data-hs-overlay="#hs-pro-shflo">
                          Show items
                        </button>
                      </div>
                      <!-- End Footer -->

                      <!-- COME LATER  มีเวลาค่อยมาดู ตรง TAG ต่อ -->

                      <!-- <div class="flex flex-wrap w-full   overflow-x-auto no-scrollbar">  
                        <el-tag
                          v-for="tag in dynamicTags"
                          :key="tag"
                          closable
                          :disable-transitions="false"
                          class="mx-2 mt-2 "
                          @close="handleCloseTag(tag)"
                        >
                           {{ tag }} 
                        </el-tag>
                      </div> -->
                     
                      <el-input 
                          v-model="searchText" 
                          placeholder="Search Name and Code" 
                          class="w-full  py-2 custom-input" 
                          clearable
                          :prefix-icon="Search"
                      />


                      <!-- Disclosure Content  -->
                      <div class="space-y-6">
                       <!-- Static Disclosure Example -->
                  
                        <div  v-for="(section,secIdx) in filters" :key="secIdx"
                          class="border-b border-gray-200 py-6">
                          <!-- <template #default="{ open }"> -->
                            <h3 class="-my-3 flow-root">
                               <div
                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span class="font-medium text-gray-900">{{ section.name }}</span>
                                <span class="ml-6 flex items-center">
                                  <PlusIcon v-if="open" class="h-5 w-5" aria-hidden="true" />
                                  <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </div> 
                            </h3>
                            <div  class="pt-6">
                              <div class="space-y-1">
                                <label v-for="(option, optionIdx) in section.options" :key="optionIdx"
                                  class="p-2 group w-full inline-flex items-center cursor-pointer text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                                   
                                    <input
                                      @change="testFilterChange(section ,secIdx, optionIdx)"
                                      type="checkbox"
                                      :class="`shrink-0 size-[18px]  ${option.colorClass} ${option.borderClass} checked:${option.colorClass} rounded focus:ring-0 focus:ring-offset-0`"
                                      :value="option.value" 
                                      :checked="option.checked"
                                      :id="`filter-${section.id}-${optionIdx}`" />
                                      <span class="ms-2 text-gray-800 dark:text-neutral-400">{{ option.label }}</span>
                                      <span class="ms-auto text-xs text-gray-500 dark:text-neutral-500">({{ option.count }})</span>
                                    </label>
                              </div>
                            </div>
                          
                          <!-- </template> -->
                        </div>
                      </div>
                        
                      <div
                        class="py-4 px-5 lg:py-6 lg:ps-0 flex items-center gap-x-2  border-gray-200 dark:border-neutral-700">
                        <button type="button"
                          @click="clearFilters()"
                          class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-1.5 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
                          data-hs-overlay="#hs-pro-shflo">
                          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                          Clear filters
                        </button>

                        <button type="button"
                          class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200 dark:focus:bg-neutral-200"
                          data-hs-overlay="#hs-pro-shflo">
                          Show items
                        </button>
                    </div>
                    <!-- End Footer -->

                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch,nextTick, onMounted, watchEffect   } from 'vue'
import { useRouter, useRoute } from '#app'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot, Disclosure, DisclosureButton, DisclosurePanel, DialogTitle } from '@headlessui/vue'
import { HeartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PencilIcon, PlusIcon, MinusIcon ,EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { useNavStore } from '~/stores/nav'

import { Search } from '@element-plus/icons-vue'

const router = useRouter();
// มีทั้ง 2 แบบ
const route = useRoute();
const navStore = useNavStore()

// useHead({
  
//   script: [
//     { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
//     { src: 'js/layouts/demo1.js', type: 'text/javascript', defer: true },
//   ],
//   link: [
//   {
//     rel: 'stylesheet',
//     href: 'css/prelnmain.min.css', // Point to the file in the 'public' folder
//   },
//   {
//       rel: 'stylesheet',
//       href: 'css/metro-style.css', // Point to the file in the 'public' folder
//     },
//  ],
// });


const dynamicTags = ref([])
const handleCloseTag = (tag: string) => {
  console.log("handleCloseTag::::::::: tag >>> ",tag)
  let splitString = tag.split(": ")
  const filterId = splitString[0]
  const filterValue = splitString[1]
  console.log("handleCloseTag::::::::: filterId >>> ",splitString[0], "filterValue >>> ",splitString[1])


  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}


const openFilter = () => {
  navStore.sidebarFilterParam = true;
};
const closeFilter = () => {
  navStore.sidebarFilterParam = false;
};





const searchText = ref('')
const filters = ref([

  {
    id: 'category',
    name: 'ประเภทสินค้า',
    open: true,
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    open: true,
    options: [
      
      { name: "Black", label: "Black", value: "black", colorClass: "bg-black", borderClass: "border-black", count: 70, checked: true },
      { name: "White", label: "White", value: "white", colorClass: "bg-white", borderClass: "border-gray-300", count: 127, checked: false },
      { name: "Gray", label: "Gray", value: "gray", colorClass: "bg-gray-300", borderClass: "border-gray-300", count: 63, checked: false },
      { name: "Red", label: "Red", value: "red", colorClass: "bg-red-500", borderClass: "border-red-500", count: 32, checked: false },
      { name: "Orange", label: "Orange", value: "orange", colorClass: "bg-orange-500", borderClass: "border-orange-500", count: 25, checked: false },
      { name: "Yellow", label: "Yellow", value: "yellow", colorClass: "bg-yellow-500", borderClass: "border-yellow-500", count: 15, checked: false },
      { name: "Green", label: "Green", value: "green", colorClass: "bg-green-500", borderClass: "border-green-500", count: 12, checked: false },
      { name: "Blue", label: "Blue", value: "blue", colorClass: "bg-blue-500", borderClass: "border-blue-500", count: 86, checked: false },


    ]
  },
  
 
  {
    id: 'size',
    name: 'Size',
    open: true,
    options: [
      { value: '2l', label: '2L', checked: false,  count: 5 },
      { value: '6l', label: '6L', checked: false,  count: 15  },
      { value: '12l', label: '12L', checked: true,  count: 23 },
      { value: '18l', label: '18L', checked: false,  count: 19 },
      { value: '20l', label: '20L', checked: false,  count: 15 },
      { value: '40l', label: '40L', checked: false,  count: 15 },
    ],
  },
])
const mainParams = ref([])

const optionalParam = ref([])
const sortingPar = ref([])
const mobileFiltersOpen = ref(false)

const testFilterChange = (section, secIdx, optionIdx) => {
  // console.log("testFilterChange :::   secIdx  >>> ",secIdx, "optionIdx >>> ",optionIdx)
  // console.log("testFilterChange :::   section.id >>> ", section.id, " value  >>> ",filters.value[secIdx].options[optionIdx].value)
  // console.log("value >>> ",filters.value[secIdx].options[optionIdx].value)
  
  // สร้างการเปลี่ยนแปลงที่ชัดเจน
  filters.value[secIdx].options[optionIdx].checked = !filters.value[secIdx].options[optionIdx].checked
  // console.log(`filters.value[${secIdx}].options[${optionIdx}].checked >>> `,filters.value[secIdx].options[optionIdx].checked)
}


const newFilters = ref()
// http://127.0.0.1:3500/common-table?q=google&optionalAttr=category/sale
// โหลดค่า filter จาก URL เมื่อโหลดหน้า ✅
onMounted(() => {
  const allParams = navStore.loadFiltersFromURL(filters.value, route);
  filters.value = allParams.optionalParam
  mainParams.value = navStore.loadMainParameters(route);
  searchText.value = mainParams.value.q
  sortingPar.value = navStore.loadSorting(route)

  // console.log("Filter.vue ::::: mainParams.value >>> ",mainParams.value)
  // console.log("Filter.vue ::::: filters.value >>> ",filters.value)
  // console.log("Filter.vue ::::: sortingPar.value >>> ",sortingPar.value)


});


const clearFilters = () => {

  searchText.value = ''

  filters.value.forEach((section) => {
    section.options.forEach((option) => {
      option.checked = false;
    });
  });
  filterParamsToUrl();
};

// ฟังก์ชันสร้างโครงสร้าง URL query parameters
const generateFilterParams = () => {

 
  const params = filters.value
    .map(filter => {
      const selectedOptions = filter.options
        .filter(option => option.checked)
        .map(option => option.value);

        return selectedOptions.length > 0 ? `${filter.id}/${selectedOptions.join(',')}` : null; // ✅ ไม่เพิ่ม optionalAttr ที่นี่
    })
    .filter(param => param !== null); // ✅ ลบค่าที่เป็น null ออก

  return params.length > 0 ? params : []; // ถ้าไม่มีค่าเลย ให้คืนค่า `null`
};


const filterParamsToUrl = () => {
  const filterParams = generateFilterParams();
  // console.log("Filter.vue ::::: filterParams >>> ",filterParams)
  // ตรวจสอบว่ามี filter หรือไม่ ถ้าไม่มีให้ลบ optionalAttr ออก
  let queryObject = {  };



  queryObject = { ...mainParams.value }; // ✅ กระจายค่า mainParams.value
  if (filterParams.length > 0) {
    queryObject.optionalAttr = filterParams; // ✅ ใช้ Array ของค่าโดยตรง
  }

  if(sortingPar.value !== null 
          && sortingPar.value.sortBy !== null 
          && sortingPar.value.sortBy !== undefined 
          &&  sortingPar.value.sortBy !== ''
    )
  {
    queryObject.sortBy = sortingPar.value.sortBy;
  }

  // console.log(" WE ARE GOING TO PUSH queryObject >>> ",queryObject)

  router.push({
    path: route.path,
    query: queryObject
  });

};

const refreshFilterTags = () => {
  dynamicTags.value = filters.value.flatMap(filter => 
    filter.options
      .filter(option => option.checked) // ✅ กรองค่าที่มี checked: true
      .map(option => `${filter.id}: ${option.value}`) // ✅ สร้าง key:value เช่น "color:black"
  );
};

// ===================================================================


watch(filters, () => {
  // navStore.setNowLoading(true)
  filterParamsToUrl();
  refreshFilterTags();
}, { deep: true });

watch(mainParams, () => {

  // console.log("mainParams.value >>> ",mainParams.value)
  // navStore.setNowLoading(true)
  filterParamsToUrl();

}, { deep: true });

const submitCountdown = ref(0)

watch(searchText, () => {

  submitCountdown.value = submitCountdown.value + 1
  setTimeout(() => {
    submitCountdown.value = submitCountdown.value - 1
    if (submitCountdown.value ===  0) {
      mainParams.value.q = searchText.value
      // console.log("searchText.value >>> ",searchText.value)
      filterParamsToUrl();

    }
    
  }, 1500);

});

// ✅ **Watch URL query เพื่อโหลดค่าใหม่อัตโนมัติ**
watch(() => route.query, () => {

  console.log("Filter.vue ::::: route.query >>> ",route.query)

  const allParams = navStore.loadFiltersFromURL(filters.value, route);
  filters.value = allParams.optionalParam
  mainParams.value = navStore.loadMainParameters(route);
  searchText.value = mainParams.value.q
  sortingPar.value = navStore.loadSorting(route)

  navStore.setNowLoading(false)

  // console.log("Filter.vue ::::: mainParams.value >>> ",mainParams.value)
  // console.log("Filter.vue ::::: filters.value >>> ",filters.value)
  // console.log("Filter.vue ::::: sortingPar.value >>> ",sortingPar.value)


  
}, { deep: true });




</script>


<style scoped>
/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px !important;
  /* ความกว้างของ scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f0f0f0;
  /* สีพื้นหลังของ track */
  border-radius: 10px;
  /* มุมโค้งมน */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #9ca3af;
  /* สีของ scrollbar */
  border-radius: 10px;
  /* มุมโค้งมน */
}


</style>