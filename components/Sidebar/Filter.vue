<template>
  <div>
    <!-- Toggle Button (Outside TransitionRoot) -->
    <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-40">
      <button @click="openFilter()"
        class="flex items-center rounded-l-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16"></path>
          <path d="M4 10h16"></path>
          <path d="M10 16h4"></path>
        </svg>
      </button>
    </div>
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

                      <!-- Disclosure Content  -->
                      <div class="space-y-6">
                       <!-- Static Disclosure Example -->
                  
                        <Disclosure as="div" v-for="section in filters" :key="section.id"
                          class="border-b border-gray-200 py-6">
                          <template #default="{ open }">
                            <h3 class="-my-3 flow-root">
                              <DisclosureButton
                                class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span class="font-medium text-gray-900">{{ section.name }}</span>
                                <span class="ml-6 flex items-center">
                                  <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                                  <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                                </span>
                              </DisclosureButton>
                            </h3>
                            <DisclosurePanel class="pt-6">
                              <div class="space-y-1">
                                <label v-for="(option, optionIdx) in section.options" :key="option.value"
                                  class="p-2 group w-full inline-flex items-center cursor-pointer text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                                    <!-- 
                                    <div class="flex h-5 shrink-0 items-center">
                                      <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                                        :value="option.value" type="checkbox" :checked="option.checked"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                    </div>
                                    <label :for="`filter-${section.id}-${optionIdx}`" class="text-sm text-gray-600">{{
                                      option.label }}</label> 
                                    -->
                                    <input
                                      type="checkbox"
                                      :class="`shrink-0 size-[18px] ${option.colorClass} ${option.borderClass} rounded focus:ring-0 focus:ring-offset-0`"
                                      :value="option.value" 
                                      :checked="option.checked"
                                      class="text-indigo-600 focus:ring-indigo-500"
                                      :id="`filter-${section.id}-${optionIdx}`" />

                                      <!-- <label :for="`filter-${section.id}-${optionIdx}`" class="text-sm text-gray-600">{{
                                      option.label }}</label>  -->
                                      <span class="ms-2 text-gray-800 dark:text-neutral-400">{{ option.label }}</span>
                                      <span class="ms-auto text-xs text-gray-500 dark:text-neutral-500">({{ option.count }})</span>
                                    </label>
                              </div>

                            </DisclosurePanel>

                          </template>
                        </Disclosure>
                      </div>


                        <!-- Footer -->
                      <div
                        class="py-4 px-5 lg:py-6 lg:ps-0 flex items-center gap-x-2  border-gray-200 dark:border-neutral-700">
                        <button type="button"
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

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot, Disclosure, DisclosureButton, DisclosurePanel, DialogTitle } from '@headlessui/vue'
import { HeartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { PencilIcon, PlusIcon, MinusIcon ,EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { useNavStore } from '~/stores/nav'
const navStore = useNavStore()

// console.log("navStore.SidebarFilter", navStore.sidebarFilterParam);
// navStore.sidebarFilterParam = true;
// console.log("navStore.SidebarFilter", navStore.sidebarFilterParam);

const openFilter = () => {
  navStore.sidebarFilterParam = true;
};
const closeFilter = () => {
  navStore.sidebarFilterParam = false;
};


const subCategories = ref([
  { name: "Category 1", href: "/category-1" },
  { name: "Category 2", href: "/category-2" },
]);
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      
      { name: "Black", label: "Black", colorClass: "bg-black", borderClass: "border-black", count: 70 },
      { name: "White", label: "White", colorClass: "bg-white", borderClass: "border-gray-300", count: 127 },
      { name: "Gray", label: "Gray", colorClass: "bg-gray-300", borderClass: "border-gray-300", count: 63 },
      { name: "Red", label: "Red", colorClass: "bg-red-500", borderClass: "border-red-500", count: 32 },
      { name: "Orange", label: "Orange", colorClass: "bg-orange-500", borderClass: "border-orange-500", count: 25 },
      { name: "Yellow", label: "Yellow", colorClass: "bg-yellow-500", borderClass: "border-yellow-500", count: 15 },
      { name: "Green", label: "Green", colorClass: "bg-green-500", borderClass: "border-green-500", count: 12 },
      { name: "Blue", label: "Blue", colorClass: "bg-blue-500", borderClass: "border-blue-500", count: 86 },


    ]
  },
  
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: true,  count: 5 },
      { value: '6l', label: '6L', checked: true,  count: 15  },
      { value: '12l', label: '12L', checked: false,  count: 23 },
      { value: '18l', label: '18L', checked: false,  count: 19 },
      { value: '20l', label: '20L', checked: false,  count: 15 },
      { value: '40l', label: '40L', checked: true,  count: 15 },
    ],
  },
]

const mobileFiltersOpen = ref(false)


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

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
  /* สีเมื่อ hover */
}
</style>