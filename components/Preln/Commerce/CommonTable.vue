<template>
  <div>
    <main id="content" class="custom-scrollbar lg:ps-[260px] pt-[59px] pb-[24px] sm:pb-[24px] ">
        <div class="custom-scrollbar max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <!-- Breadcrumb -->
          <ol class="lg:hidden pt-5 flex items-center whitespace-nowrap">
            <li class="flex items-center text-sm text-stone-600 dark:text-neutral-500">
              Products
              <svg class="shrink-0 overflow-visible size-4 ms-1.5 text-stone-400 dark:text-neutral-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
              </svg>
            </li>
            <li class="ps-1.5 flex items-center font-semibold text-stone-800 dark:text-neutral-200 text-sm">
              Overview 
            </li>
          </ol>
          
          <!-- End Breadcrumb -->
    
          <div class="py-2 sm:pb-0 sm:pt-5 space-y-5">
            <!-- Users Table Card -->
            <div class="p-5 space-y-4 flex flex-col bg-white border border-stone-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                    
                    <!-- Header -->
                    <div class="flex flex-wrap justify-between items-center gap-2">
                        <div>
                        
                        <h1 class="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                            Products (72,031)
                        </h1>
                        </div>
                        <div class="flex justify-end items-center gap-x-2">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500" href="../../pro/ecommerce/add-product.html">
                            <svg class="hidden sm:block shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                            </svg>Add product
                        </a>
                        </div>
                    </div>
                    <!-- End Header -->
                     
                     <!-- Filter Group -->
                    <div class="pb-4 grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-5 border-b border-stone-200 dark:border-neutral-700">
                        <div>
                        <!-- Search Input -->
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                            <svg class="shrink-0 size-4 text-stone-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            </div>
                            <input type="text" class="py-[7px] ps-10 pe-8 block w-full bg-stone-100 border-transparent rounded-lg text-sm placeholder:text-stone-500 focus:border-green-500 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600" placeholder="Search products">
                            <div class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
                            <button type="button" class="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close">
                                <span class="sr-only">Close</span>
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        <!-- End Search Input -->
                      </div>
                        <!-- End Col -->
            
                        <div class="flex md:justify-end items-center gap-x-2">
                        <!-- Import Dropdown -->
                        <div class="hs-dropdown [--auto-close:true] relative inline-flex">
                            <!-- Import Button -->
                            <button id="hs-pro-dptied" type="button" class="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <svg class="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m3 16 4 4 4-4" />
                                <path d="M7 20V4" />
                                <path d="m21 8-4-4-4 4" />
                                <path d="M17 4v16" />
                            </svg>
                            Import / Export
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                            </button>
                            <!-- End Import Button -->
            
                            <!-- Dropdown -->
                            <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dptied">
                            <div class="p-1">
                                <button type="button" class="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-eipm">
                                <svg class="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                                Import products
                                </button>
                                <button type="button" class="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-eepm">
                                <svg class="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" x2="12" y1="3" y2="15" />
                                </svg>
                                Export products
                                </button>
                            </div>
                            </div>
                            <!-- End Dropdown -->
                        </div>
                        <!-- End Import Dropdown -->
            
                        <!-- Filter Button -->
                        <button @click="openSidebarFilter()" type="button" class="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-epfo">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="21" x2="14" y1="4" y2="4" />
                            <line x1="10" x2="3" y1="4" y2="4" />
                            <line x1="21" x2="12" y1="12" y2="12" />
                            <line x1="8" x2="3" y1="12" y2="12" />
                            <line x1="21" x2="16" y1="20" y2="20" />
                            <line x1="12" x2="3" y1="20" y2="20" />
                            <line x1="14" x2="14" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="10" y2="14" />
                            <line x1="16" x2="16" y1="18" y2="22" />
                            </svg>
                            <span class="font-mitr">ตัวกรอง</span>
                            <span class="font-medium text-[10px] py-0.5 px-[5px] bg-stone-800 text-white leading-3 rounded-full dark:bg-neutral-500">
                            2
                            </span>
                        </button>
                        <!-- End Filter Button -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Filter Group -->
                
                    <!-- Nav Tab -->
                    <nav class="relative  flex space-x-1 after:absolute after:bottom-0 after:inset-x-0 after:border-b-2 after:border-stone-200 dark:after:border-neutral-700" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button type="button" class="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active " id="hs-pro-tabs-dut-item-all" aria-selected="true" data-hs-tab="#hs-pro-tabs-dut-all" aria-controls="hs-pro-tabs-dut-all" role="tab">
                            All
                        </button>
                        <button type="button" class="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  " id="hs-pro-tabs-dut-item-archived" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-archived" aria-controls="hs-pro-tabs-dut-archived" role="tab">
                            Archived
                        </button>
                        <button type="button" class="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  " id="hs-pro-tabs-dut-item-publish" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-publish" aria-controls="hs-pro-tabs-dut-publish" role="tab">
                            Publish
                        </button>
                        <button type="button" class="hs-tab-active:after:bg-stone-800 hs-tab-active:text-stone-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-stone-100 text-stone-500 hover:text-stone-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  " id="hs-pro-tabs-dut-item-unpublish" aria-selected="false" data-hs-tab="#hs-pro-tabs-dut-unpublish" aria-controls="hs-pro-tabs-dut-unpublish" role="tab">
                            Unpublish
                        </button>
                    </nav>
                    <!-- End Nav Tab -->
              <div>

                <!-- Tab Content -->
                <div id="hs-pro-tabs-dut-all" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-all">
                  <!-- Table Content -->
                  <div class="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                    <div class="min-w-full inline-block align-middle">
                      <!-- Table -->
                      <table class="min-w-full divide-y divide-stone-200 dark:divide-neutral-700">
                        <thead>
                         
                          <tr>
                            <th scope="col" class="ps-3 text-start">
                              <!-- Select All -->
                                  <input class="checkbox checkbox-sm rounded" type="checkbox" :checked="selectAll === 1" :indeterminate="selectAll === 2" @change="toggleSelectAll" >
                            </th>
                            <!-- Generate table headers dynamically based on keys -->
                            <th v-for="(objItem, index) in filteredObjectStructure" :key="index" 
                                  scope="col" class="px-5 py-2 text-start">
                              {{ objItem.label }} <br>
                              {{ objItem.name }}
                            </th>
                          </tr>
                        </thead>
              
                        <tbody class="divide-y divide-stone-200 dark:divide-neutral-700">
                          <!-- Generate table rows dynamically based on records -->
                          <tr v-for="(record, index) in paginatedRecords" :key="record.id">
                            <td class="size-px whitespace-nowrap ps-3 py-4">
                              <!-- Select each -->
                              <input class="checkbox checkbox-sm rounded" type="checkbox" :checked="checkSelection(record.id)" @change="toggleRecordSelection(record)" />
                            </td>
                            <td  v-for="(obj, keyind) in filteredObjectStructure" :key="keyind" 
                                  
                            class="px-5 py-3">
                              
                              <!-- Use dataType to decide how to render the cell -->
                                 <div v-if="obj['datatype'] === 'image' ">
                                <img class="shrink-0 size-12 rounded-md" :src="record[obj['field']]" alt="Product Image">
                              </div>
                              <div v-else-if="obj['datatype'] === 'money'">
                                <span v-if="record[obj['field']] === null || record[obj['field']] === undefined" class="text-green-600 font-semibold">0</span>
                                <span class="text-green-600 font-semibold">{{ record[obj['field']] }}</span>
                              </div>
                              <div v-else-if="obj['datatype'] === 'number'">
                                <span v-if="record[obj['field']] === null || record[obj['field']] === undefined" class="font-semibold">0</span>
                                <span class="font-semibold">{{ record[obj['field']] }}</span>
                              </div>
                              <div v-else-if="obj['datatype'] === 'website'">
                                <a :href="record[obj['field']]" target="_blank" class="text-blue-600 underline">{{ record[obj['field']] }}</a>
                              </div>
                              <div v-else-if="(obj['datatype'] === 'date' || obj['datatype'] === 'datetime')">
                                <span>{{ new Date(record[obj['field']]).toLocaleString() }}</span>
                              </div>
                              <div v-else-if="obj['datatype'] === 'switch'" >
                                <el-switch
                                        v-model="record[obj['field']]"
                                        style="--el-switch-on-color: #13ce66"
                                      />
                              </div>
                              <div v-else-if="obj['datatype'] === 'text_list'" class="flex flex-wrap gap-1" >
                                  <span
                                    v-for="location in record[obj['field']]"
                                    :key="location"
                                    class="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200"
                                  >
                                    {{ location }}
                                  </span>
                              </div>

                              <div v-else-if="obj['datatype'] === 'progress'" class="flex flex-wrap gap-1" >
                                <!-- <div class="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                  <div class="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200" style="width: 20%"></div>
                                </div> -->

                                <div
                                    class="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                                    role="progressbar"
                                    :aria-valuenow="record.progress"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  >
                                    <div
                                      class="flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                                      :style="{ width: Math.min(record.progress, 100) + '%' }"
                                    ></div>
                                  </div>
                              </div>
                              

                              <div v-else-if="obj['datatype'] === 'action_button'" class="flex flex-wrap gap-1" >
                                <UIThreedotsDropdown></UIThreedotsDropdown>
                               
                              </div>
                              <!-- End: action_button -->
                              <div v-else>
                                  <span v-if="record[obj['field']] === '' || record[obj['field']] === null">ไม่ระบุ</span>
                                  <span v-else>{{ record[obj['field']]   }}</span> 
                              </div>
                            </td>
                               <!-- Action buttons for edit and delete -->
                           
                          </tr>
                        </tbody>
                      </table>
                      <!-- End Table -->
                    </div>
                  </div>
                  <!-- End Table Content -->
    
                  <!-- Footer -->
                  <div class="mt-5 flex flex-wrap justify-between items-center gap-2">
                    <p class=" text-stone-800 dark:text-neutral-200">
                      <!-- <span class="font-medium">27</span> -->
                      <span class="text-stone-500 dark:text-neutral-500"> {{paginationInfo}}</span>
                    </p>
    
                    <!-- Pagination -->
                    <nav class="flex justify-end items-center gap-x-1" aria-label="Pagination">
                      <button @click="prevPage" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700" aria-label="Previous">
                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span class="sr-only">Previous</span>
                      </button>
                      <div class="flex items-center gap-x-1">
                        <span class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-stone-100 text-stone-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white" aria-current="page">{{currentPage}}</span>
                        <span class="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
                        <span class="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">{{totalPages}}</span>
                      </div>
                      <button @click="nextPage" type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700" aria-label="Next">
                        <span class="sr-only">Next</span>
                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </nav>

                    <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                        <div class="flex justify-end items-center gap-2 order-2 md:order-1">
                          Show
                          <select class="select select-sm w-16" v-model="pageSize" @change="updatePageSize">
                            <option :value="5">5</option>
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                          </select>
                          per page
                        </div>

                        <!-- <div class="flex w-full justify-between pt-1 gap-4 order-1 md:order-2">
                          <div class="pagination">
                            <button class="mx-4" @click="prevPage" :disabled="currentPage === 1">Previous</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                          </div>
                        </div> -->
                        
                    </div>
                    <!-- End Pagination -->
                  </div>
                  <!-- End Footer -->
                </div>
                <!-- End Tab Content -->
    
                <!-- Tab Content -->
                <div id="hs-pro-tabs-dut-archived" class="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-archived">
                  <!-- Empty State -->
                  <div class="p-5  flex flex-col justify-center items-center text-center">
                    <svg class="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-50 dark:stroke-neutral-700/10" />
                      <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/30" />
                      <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <g filter="url(#filter4)">
                        <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" class="fill-white dark:fill-neutral-800" shape-rendering="crispEdges" />
                        <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/60" shape-rendering="crispEdges" />
                        <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700 " />
                        <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                        <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                      </g>
                      <defs>
                        <filter id="filter4" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="6" />
                          <feGaussianBlur stdDeviation="6" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape" />
                        </filter>
                      </defs>
                    </svg>
    
                    <div class="max-w-sm mx-auto">
                      <p class="mt-2 font-medium text-stone-800 dark:text-neutral-200">
                        Your data will appear here soon.
                      </p>
                      <p class="mb-5 text-sm text-stone-500 dark:text-neutral-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                      </p>
                    </div>
    
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Learn more
                    </a>
                  </div>
                  <!-- End Empty State -->
                </div>
                <!-- End Tab Content -->
    
                <!-- Tab Content -->
                <div id="hs-pro-tabs-dut-publish" class="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-publish">
                  <!-- Empty State -->
                  <div class="p-5  flex flex-col justify-center items-center text-center">
                    <svg class="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-50 dark:stroke-neutral-700/10" />
                      <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/30" />
                      <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <g filter="url(#filter5)">
                        <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" class="fill-white dark:fill-neutral-800" shape-rendering="crispEdges" />
                        <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/60" shape-rendering="crispEdges" />
                        <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700 " />
                        <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                        <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                      </g>
                      <defs>
                        <filter id="filter5" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="6" />
                          <feGaussianBlur stdDeviation="6" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape" />
                        </filter>
                      </defs>
                    </svg>
    
                    <div class="max-w-sm mx-auto">
                      <p class="mt-2 font-medium text-stone-800 dark:text-neutral-200">
                        Your data will appear here soon.
                      </p>
                      <p class="mb-5 text-sm text-stone-500 dark:text-neutral-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                      </p>
                    </div>
    
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Learn more
                    </a>
                  </div>
                  <!-- End Empty State -->
                </div>
                <!-- End Tab Content -->
    
                <!-- Tab Content -->
                <div id="hs-pro-tabs-dut-unpublish" class="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-unpublish">
                  <!-- Empty State -->
                  <div class="p-5  flex flex-col justify-center items-center text-center">
                    <svg class="w-48 mx-auto mb-4" width="178" height="90" viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="27" y="50.5" width="124" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-50 dark:stroke-neutral-700/10" />
                      <rect x="34.5" y="58" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="61" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="66.5" y="73" width="77" height="6" rx="3" fill="currentColor" class="fill-stone-50 dark:fill-neutral-700/30" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" fill="currentColor" class="fill-white dark:fill-neutral-800" />
                      <rect x="19.5" y="28.5" width="139" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/30" />
                      <rect x="27" y="36" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="39" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <rect x="59" y="51" width="92" height="6" rx="3" fill="currentColor" class="fill-stone-100 dark:fill-neutral-700/70" />
                      <g filter="url(#filter6)">
                        <rect x="12" y="6" width="154" height="40" rx="8" fill="currentColor" class="fill-white dark:fill-neutral-800" shape-rendering="crispEdges" />
                        <rect x="12.5" y="6.5" width="153" height="39" rx="7.5" stroke="currentColor" class="stroke-stone-100 dark:stroke-neutral-700/60" shape-rendering="crispEdges" />
                        <rect x="20" y="14" width="24" height="24" rx="4" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700 " />
                        <rect x="52" y="17" width="60" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                        <rect x="52" y="29" width="106" height="6" rx="3" fill="currentColor" class="fill-stone-200 dark:fill-neutral-700" />
                      </g>
                      <defs>
                        <filter id="filter6" x="0" y="0" width="178" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset dy="6" />
                          <feGaussianBlur stdDeviation="6" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape" />
                        </filter>
                      </defs>
                    </svg>
    
                    <div class="max-w-sm mx-auto">
                      <p class="mt-2 font-medium text-stone-800 dark:text-neutral-200">
                        Your data will appear here soon.
                      </p>
                      <p class="mb-5 text-sm text-stone-500 dark:text-neutral-500">
                        In the meantime, you can create new custom insights to monitor your most important metrics.
                      </p>
                    </div>
    
                    <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Learn more
                    </a>
                  </div>
                  <!-- End Empty State -->
                </div>
                <!-- End Tab Content -->
              </div>
            </div>
            <!-- End Users Table Card -->
          </div>
        </div>
        <!-- MODAL -->
        <button class="btn btn-icon btn-icon-lg size-9 rounded-full hover:bg-primary-light hover:text-primary text-gray-500" data-modal-toggle="#search_modal">
          <i class="ki-filled ki-magnifier">
          </i>
         </button>
        <div class="modal" data-modal="true" id="search_modal">
          <div class="modal-content max-w-[600px] top-[15%]">
           <div class="modal-header py-4 px-5">
            <i class="ki-filled ki-magnifier text-gray-700 text-xl">
            </i>
            <input class="input px-0 border-none bg-transparent shadow-none ml-2.5" name="query" placeholder="Tap to start search" type="text" value=""/>
            <button class="btn btn-sm btn-icon btn-light btn-clear shrink-0" data-modal-dismiss="true">
             <i class="ki-filled ki-cross">
             </i>
            </button>
           </div>
           <div class="modal-body p-0 pb-5">
            <div class="tabs justify-between px-5 mb-2.5" data-tabs="true">
             <div class="flex items-center gap-5">
              <button class="tab py-5 active" data-tab-toggle="#search_modal_mixed">
               Mixed
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_settings">
               Settings
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_integrations">
               Integrations
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_users">
               Users
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_docs">
               Docs
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_empty">
               Empty
              </button>
              <button class="tab py-5" data-tab-toggle="#search_modal_no-results">
               No Results
              </button>
             </div>
             <div class="menu -mt-px" data-menu="true">
              <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
               <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                <i class="ki-filled ki-setting-2">
                </i>
               </button>
               <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
                <div class="menu-item">
                 <a class="menu-link" href="#">
                  <span class="menu-icon">
                   <i class="ki-filled ki-document">
                   </i>
                  </span>
                  <span class="menu-title">
                   View
                  </span>
                 </a>
                </div>
                <div class="menu-item" data-menu-item-offset="-15px, 0" data-menu-item-placement="right-start" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:hover">
                 <div class="menu-link">
                  <span class="menu-icon">
                   <i class="ki-filled ki-notification-status">
                   </i>
                  </span>
                  <span class="menu-title">
                   Export
                  </span>
                  <span class="menu-arrow">
                   <i class="ki-filled ki-right text-3xs">
                   </i>
                  </span>
                 </div>
                 <div class="menu-dropdown menu-default w-full max-w-[175px]">
                  <div class="menu-item">
                   <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">
                    <span class="menu-icon">
                     <i class="ki-filled ki-sms">
                     </i>
                    </span>
                    <span class="menu-title">
                     Email
                    </span>
                   </a>
                  </div>
                  <div class="menu-item">
                   <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">
                    <span class="menu-icon">
                     <i class="ki-filled ki-message-notify">
                     </i>
                    </span>
                    <span class="menu-title">
                     SMS
                    </span>
                   </a>
                  </div>
                  <div class="menu-item">
                   <a class="menu-link" href="html/demo1/account/home/settings-sidebar.html">
                    <span class="menu-icon">
                     <i class="ki-filled ki-notification-status">
                     </i>
                    </span>
                    <span class="menu-title">
                     Push
                    </span>
                   </a>
                  </div>
                 </div>
                </div>
                <div class="menu-item">
                 <a class="menu-link" href="#">
                  <span class="menu-icon">
                   <i class="ki-filled ki-pencil">
                   </i>
                  </span>
                  <span class="menu-title">
                   Edit
                  </span>
                 </a>
                </div>
                <div class="menu-item">
                 <a class="menu-link" href="#">
                  <span class="menu-icon">
                   <i class="ki-filled ki-trash">
                   </i>
                  </span>
                  <span class="menu-title">
                   Delete
                  </span>
                 </a>
                </div>
               </div>
              </div>
             </div>
            </div>
            <div class="scrollable-y-auto" data-scrollable="true" data-scrollable-max-height="auto" data-scrollable-offset="300px">
             <div class="" id="search_modal_mixed">
              <div class="flex flex-col gap-2.5">
               <div>
                <div class="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                 Settings
                </div>
                <div class="menu menu-default p-0 flex-col">
                 <div class="menu-item">
                  <a class="menu-link" href="#">
                   <span class="menu-icon">
                    <i class="ki-filled ki-badge">
                    </i>
                   </span>
                   <span class="menu-title">
                    Public Profile
                   </span>
                  </a>
                 </div>
                 <div class="menu-item">
                  <a class="menu-link" href="#">
                   <span class="menu-icon">
                    <i class="ki-filled ki-setting-2">
                    </i>
                   </span>
                   <span class="menu-title">
                    My Account
                   </span>
                  </a>
                 </div>
                 <div class="menu-item">
                  <a class="menu-link" href="#">
                   <span class="menu-icon">
                    <i class="ki-filled ki-message-programming">
                    </i>
                   </span>
                   <span class="menu-title">
                    Devs Forum
                   </span>
                  </a>
                 </div>
                </div>
               </div>
               <div class="border-b border-b-gray-200">
               </div>
               <div>
                <div class="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                 Integrations
                </div>
                <div class="menu menu-default p-0 flex-col">
                 <div class="menu-item">
                  <div class="menu-link flex items-center jistify-between gap-2">
                   <div class="flex items-center grow gap-2">
                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                     <img alt="" class="size-6 shrink-0" src="/media/brand-logos/jira.svg"/>
                    </div>
                    <div class="flex flex-col gap-0.5">
                     <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                      Jira
                     </a>
                     <span class="text-2xs font-medium text-gray-600">
                      Project management
                     </span>
                    </div>
                   </div>
                   <div class="flex justify-end shrink-0">
                    <div class="flex -space-x-2">
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-4.png"/>
                     </div>
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-1.png"/>
                     </div>
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-2.png"/>
                     </div>
                     <div class="flex">
                      <span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                       +3
                      </span>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                 <div class="menu-item">
                  <div class="menu-link flex items-center jistify-between gap-2">
                   <div class="flex items-center grow gap-2">
                    <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                     <img alt="" class="size-6 shrink-0" src="/media/brand-logos/inferno.svg"/>
                    </div>
                    <div class="flex flex-col gap-0.5">
                     <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                      Inferno
                     </a>
                     <span class="text-2xs font-medium text-gray-600">
                      Real-time photo sharing app
                     </span>
                    </div>
                   </div>
                   <div class="flex justify-end shrink-0">
                    <div class="flex -space-x-2">
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-14.png"/>
                     </div>
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-12.png"/>
                     </div>
                     <div class="flex">
                      <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-9.png"/>
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="border-b border-b-gray-200">
               </div>
               <div>
                <div class="text-xs text-gray-600 font-medium pt-2.5 pb-1.5 pl-5">
                 Users
                </div>
                <div class="menu menu-default p-0 flex-col">
                 <div class="grid gap-1">
                  <div class="menu-item">
                   <div class="menu-link flex justify-between gap-2">
                    <div class="flex items-center gap-2.5">
                     <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-3.png"/>
                     <div class="flex flex-col">
                      <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                       Tyler Hero
                      </a>
                      <span class="text-2sm font-normal text-gray-500">
                       tyler.hero@gmail.com connections
                      </span>
                     </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                     <div class="badge badge-pill badge-outline badge-success gap-1.5">
                      <span class="badge badge-dot badge-success size-1.5">
                      </span>
                      In Office
                     </div>
                     <button class="btn btn-icon btn-light btn-clear btn-sm">
                      <i class="ki-filled ki-dots-vertical">
                      </i>
                     </button>
                    </div>
                   </div>
                  </div>
                  <div class="menu-item">
                   <div class="menu-link flex justify-between gap-2">
                    <div class="flex items-center gap-2.5">
                     <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-1.png"/>
                     <div class="flex flex-col">
                      <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                       Esther Howard
                      </a>
                      <span class="text-2sm font-normal text-gray-500">
                       esther.howard@gmail.com connections
                      </span>
                     </div>
                    </div>
                    <div class="flex items-center gap-2.5">
                     <div class="badge badge-pill badge-outline badge-danger gap-1.5">
                      <span class="badge badge-dot badge-danger size-1.5">
                      </span>
                      On Leave
                     </div>
                     <button class="btn btn-icon btn-light btn-clear btn-sm">
                      <i class="ki-filled ki-dots-vertical">
                      </i>
                     </button>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_settings">
              <div class="menu menu-default p-0 flex-col">
               <div class="text-xs text-gray-600 font-medium pt-2.5 pl-5 pb-1.5">
                Shortcuts
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-home-2">
                  </i>
                 </span>
                 <span class="menu-title">
                  Go to Dashboard
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-badge">
                  </i>
                 </span>
                 <span class="menu-title">
                  Public Profile
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-profile-circle">
                  </i>
                 </span>
                 <span class="menu-title">
                  My Profile
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-setting-2">
                  </i>
                 </span>
                 <span class="menu-title">
                  My Account
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-message-programming">
                  </i>
                 </span>
                 <span class="menu-title">
                  Devs Forum
                 </span>
                </a>
               </div>
               <div class="text-xs text-gray-600 font-medium pt-2.5 pl-5 pt-2.5 pb-1.5">
                Actions
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-user">
                  </i>
                 </span>
                 <span class="menu-title">
                  Create User
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-user-edit">
                  </i>
                 </span>
                 <span class="menu-title">
                  Create Team
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-subtitle">
                  </i>
                 </span>
                 <span class="menu-title">
                  Change Plan
                 </span>
                </a>
               </div>
               <div class="menu-item">
                <a class="menu-link" href="#">
                 <span class="menu-icon">
                  <i class="ki-filled ki-setting">
                  </i>
                 </span>
                 <span class="menu-title">
                  Setup Branding
                 </span>
                </a>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_integrations">
              <div class="menu menu-default p-0 flex-col">
               <div class="menu-item">
                <div class="menu-link flex items-center jistify-between gap-2">
                 <div class="flex items-center grow gap-2">
                  <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                   <img alt="" class="size-6 shrink-0" src="/media/brand-logos/jira.svg"/>
                  </div>
                  <div class="flex flex-col gap-0.5">
                   <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                    Jira
                   </a>
                   <span class="text-2xs font-medium text-gray-600">
                    Project management
                   </span>
                  </div>
                 </div>
                 <div class="flex justify-end shrink-0">
                  <div class="flex -space-x-2">
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-4.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-1.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-2.png"/>
                   </div>
                   <div class="flex">
                    <span class="hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs size-6 text-success-inverse size-6 ring-success-light bg-success">
                     +3
                    </span>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="menu-item">
                <div class="menu-link flex items-center jistify-between gap-2">
                 <div class="flex items-center grow gap-2">
                  <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                   <img alt="" class="size-6 shrink-0" src="/media/brand-logos/inferno.svg"/>
                  </div>
                  <div class="flex flex-col gap-0.5">
                   <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                    Inferno
                   </a>
                   <span class="text-2xs font-medium text-gray-600">
                    Real-time photo sharing app
                   </span>
                  </div>
                 </div>
                 <div class="flex justify-end shrink-0">
                  <div class="flex -space-x-2">
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-14.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-12.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-9.png"/>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="menu-item">
                <div class="menu-link flex items-center jistify-between gap-2">
                 <div class="flex items-center grow gap-2">
                  <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                   <img alt="" class="size-6 shrink-0" src="/media/brand-logos/evernote.svg"/>
                  </div>
                  <div class="flex flex-col gap-0.5">
                   <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                    Evernote
                   </a>
                   <span class="text-2xs font-medium text-gray-600">
                    Notes management app
                   </span>
                  </div>
                 </div>
                 <div class="flex justify-end shrink-0">
                  <div class="flex -space-x-2">
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-6.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-3.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-1.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-8.png"/>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="menu-item">
                <div class="menu-link flex items-center jistify-between gap-2">
                 <div class="flex items-center grow gap-2">
                  <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                   <img alt="" class="size-6 shrink-0" src="/media/brand-logos/gitlab.svg"/>
                  </div>
                  <div class="flex flex-col gap-0.5">
                   <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                    Gitlab
                   </a>
                   <span class="text-2xs font-medium text-gray-600">
                    Notes management app
                   </span>
                  </div>
                 </div>
                 <div class="flex justify-end shrink-0">
                  <div class="flex -space-x-2">
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-18.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-17.png"/>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="menu-item">
                <div class="menu-link flex items-center jistify-between gap-2">
                 <div class="flex items-center grow gap-2">
                  <div class="flex items-center justify-center size-10 shrink-0 rounded-full border border-gray-200 bg-gray-100">
                   <img alt="" class="size-6 shrink-0" src="/media/brand-logos/google-webdev.svg"/>
                  </div>
                  <div class="flex flex-col gap-0.5">
                   <a class="text-2sm font-semibold text-gray-900 hover:text-primary-active" href="#">
                    Google webdev
                   </a>
                   <span class="text-2xs font-medium text-gray-600">
                    Building web expierences
                   </span>
                  </div>
                 </div>
                 <div class="flex justify-end shrink-0">
                  <div class="flex -space-x-2">
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-14.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-20.png"/>
                   </div>
                   <div class="flex">
                    <img class="hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light size-6" src="/media/avatars/300-21.png"/>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
               <div class="menu-item px-4 pt-2">
                <a class="btn btn-sm btn-light justify-center" href="#">
                 Go to Apps
                </a>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_users">
              <div class="menu menu-default p-0 flex-col">
               <div class="grid gap-1">
                <div class="menu-item">
                 <div class="menu-link flex justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                   <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-3.png"/>
                   <div class="flex flex-col">
                    <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                     Tyler Hero
                    </a>
                    <span class="text-2sm font-normal text-gray-500">
                     tyler.hero@gmail.com connections
                    </span>
                   </div>
                  </div>
                  <div class="flex items-center gap-2.5">
                   <div class="badge badge-pill badge-outline badge-success gap-1.5">
                    <span class="badge badge-dot badge-success size-1.5">
                    </span>
                    In Office
                   </div>
                   <button class="btn btn-icon btn-light btn-clear btn-sm">
                    <i class="ki-filled ki-dots-vertical">
                    </i>
                   </button>
                  </div>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                   <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-1.png"/>
                   <div class="flex flex-col">
                    <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                     Esther Howard
                    </a>
                    <span class="text-2sm font-normal text-gray-500">
                     esther.howard@gmail.com connections
                    </span>
                   </div>
                  </div>
                  <div class="flex items-center gap-2.5">
                   <div class="badge badge-pill badge-outline badge-danger gap-1.5">
                    <span class="badge badge-dot badge-danger size-1.5">
                    </span>
                    On Leave
                   </div>
                   <button class="btn btn-icon btn-light btn-clear btn-sm">
                    <i class="ki-filled ki-dots-vertical">
                    </i>
                   </button>
                  </div>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                   <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-11.png"/>
                   <div class="flex flex-col">
                    <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                     Jacob Jones
                    </a>
                    <span class="text-2sm font-normal text-gray-500">
                     jacob.jones@gmail.com connections
                    </span>
                   </div>
                  </div>
                  <div class="flex items-center gap-2.5">
                   <div class="badge badge-pill badge-outline badge-primary gap-1.5">
                    <span class="badge badge-dot badge-primary size-1.5">
                    </span>
                    Remote
                   </div>
                   <button class="btn btn-icon btn-light btn-clear btn-sm">
                    <i class="ki-filled ki-dots-vertical">
                    </i>
                   </button>
                  </div>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                   <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-5.png"/>
                   <div class="flex flex-col">
                    <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                     TLeslie Alexander
                    </a>
                    <span class="text-2sm font-normal text-gray-500">
                     leslie.alexander@gmail.com connections
                    </span>
                   </div>
                  </div>
                  <div class="flex items-center gap-2.5">
                   <div class="badge badge-pill badge-outline badge-success gap-1.5">
                    <span class="badge badge-dot badge-success size-1.5">
                    </span>
                    In Office
                   </div>
                   <button class="btn btn-icon btn-light btn-clear btn-sm">
                    <i class="ki-filled ki-dots-vertical">
                    </i>
                   </button>
                  </div>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex justify-between gap-2">
                  <div class="flex items-center gap-2.5">
                   <img alt="" class="rounded-full size-9 shrink-0" src="/media/avatars/300-2.png"/>
                   <div class="flex flex-col">
                    <a class="text-sm font-semibold text-gray-900 hover:text-primary-active mb-px" href="#">
                     Cody Fisher
                    </a>
                    <span class="text-2sm font-normal text-gray-500">
                     cody.fisher@gmail.com connections
                    </span>
                   </div>
                  </div>
                  <div class="flex items-center gap-2.5">
                   <div class="badge badge-pill badge-outline badge-primary gap-1.5">
                    <span class="badge badge-dot badge-primary size-1.5">
                    </span>
                    Remote
                   </div>
                   <button class="btn btn-icon btn-light btn-clear btn-sm">
                    <i class="ki-filled ki-dots-vertical">
                    </i>
                   </button>
                  </div>
                 </div>
                </div>
                <div class="menu-item px-4 pt-2">
                 <a class="btn btn-sm btn-light justify-center" href="#">
                  Go to Users
                 </a>
                </div>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_docs">
              <div class="menu menu-default p-0 flex-col">
               <div class="grid">
                <div class="menu-item">
                 <div class="menu-link flex items-center">
                  <div class="flex items-center grow gap-2.5">
                   <img src="/media/file-types/pdf.svg"/>
                   <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                     Project-pitch.pdf
                    </span>
                    <span class="text-xs font-medium text-gray-500">
                     4.7 MB 26 Sep 2024 3:20 PM
                    </span>
                   </div>
                  </div>
                  <button class="btn btn-icon btn-light btn-clear btn-sm">
                   <i class="ki-filled ki-dots-vertical">
                   </i>
                  </button>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex items-center">
                  <div class="flex items-center grow gap-2.5">
                   <img src="/media/file-types/doc.svg"/>
                   <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                     Report-v1.docx
                    </span>
                    <span class="text-xs font-medium text-gray-500">
                     2.3 MB 1 Oct 2024 12:00 PM
                    </span>
                   </div>
                  </div>
                  <button class="btn btn-icon btn-light btn-clear btn-sm">
                   <i class="ki-filled ki-dots-vertical">
                   </i>
                  </button>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex items-center">
                  <div class="flex items-center grow gap-2.5">
                   <img src="/media/file-types/javascript.svg"/>
                   <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                     Framework-App.js
                    </span>
                    <span class="text-xs font-medium text-gray-500">
                     0.8 MB 17 Oct 2024 6:46 PM
                    </span>
                   </div>
                  </div>
                  <button class="btn btn-icon btn-light btn-clear btn-sm">
                   <i class="ki-filled ki-dots-vertical">
                   </i>
                  </button>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex items-center">
                  <div class="flex items-center grow gap-2.5">
                   <img src="/media/file-types/ai.svg"/>
                   <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                     Framework-App.js
                    </span>
                    <span class="text-xs font-medium text-gray-500">
                     0.8 MB 17 Oct 2024 6:46 PM
                    </span>
                   </div>
                  </div>
                  <button class="btn btn-icon btn-light btn-clear btn-sm">
                   <i class="ki-filled ki-dots-vertical">
                   </i>
                  </button>
                 </div>
                </div>
                <div class="menu-item">
                 <div class="menu-link flex items-center">
                  <div class="flex items-center grow gap-2.5">
                   <img src="/media/file-types/php.svg"/>
                   <div class="flex flex-col">
                    <span class="text-sm font-semibold text-gray-900 cursor-pointer hover:text-primary mb-px">
                     appController.js
                    </span>
                    <span class="text-xs font-medium text-gray-500">
                     0.1 MB 21 Nov 2024 3:20 PM
                    </span>
                   </div>
                  </div>
                  <button class="btn btn-icon btn-light btn-clear btn-sm">
                   <i class="ki-filled ki-dots-vertical">
                   </i>
                  </button>
                 </div>
                </div>
                <div class="menu-item px-4 pt-2.5">
                 <a class="btn btn-sm btn-light justify-center" href="#">
                  Go to Users
                 </a>
                </div>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_empty">
              <div class="flex flex-col text-center py-9 gap-5">
               <div class="flex justify-center">
                <img alt="image" class="dark:hidden max-h-[113px]" src="/media/illustrations/33.svg"/>
                <img alt="image" class="light:hidden max-h-[113px]" src="/media/illustrations/33-dark.svg"/>
               </div>
               <div class="flex flex-col gap-1.5">
                <h3 class="text-base font-semibold text-gray-900 text-center">
                 Looking for something..
                </h3>
                <span class="text-2sm font-medium text-center text-gray-600">
                 Initiate your digital experience with
                 <br>
                  our intuitive dashboard
                 </br>
                </span>
               </div>
               <div class="flex justify-center">
                <a class="btn btn-sm btn-light flex justify-center" href="#">
                 View Projects
                </a>
               </div>
              </div>
             </div>
             <div class="hidden" id="search_modal_no-results">
              <div class="flex flex-col text-center py-9 gap-5">
               <div class="flex justify-center">
                <img alt="image" class="dark:hidden max-h-[113px]" src="/media/illustrations/33.svg"/>
                <img alt="image" class="light:hidden max-h-[113px]" src="/media/illustrations/33-dark.svg"/>
               </div>
               <div class="flex flex-col gap-1.5">
                <h3 class="text-base font-semibold text-gray-900 text-center">
                 No Results Found
                </h3>
                <span class="text-2sm font-medium text-center text-gray-600">
                 Refine your query to discover relevant items
                </span>
               </div>
               <div class="flex justify-center">
                <a class="btn btn-sm btn-light flex justify-center" href="#">
                 View Projects
                </a>
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        <!-- end: MODAL -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useNavStore } from '~/stores/nav';
const navStore = useNavStore()


useHead({
  
  script: [
    { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
    { src: 'js/layouts/demo1.js', type: 'text/javascript', defer: true },
  ],
  link: [
  {
    rel: 'stylesheet',
    href: 'css/prelnmain.min.css', // Point to the file in the 'public' folder
  },
  {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
 ],
});

const props = defineProps({
  
  objStructure: {
    type: Array
  }
});

const objectStructure = ref(props.objStructure)

// onMounted(async () => {
//   objectStructure.value = props.objStructure
// });

// onUpdated(async () => {
//   objectStructure.value = props.objStructure
// });

// ==================== BEGIN: Dynamic Table Rendering ====================

// Custom DataType Interface
interface tableStructure {
  datatype: 'text' | 'image' | 'number' | 'money' | 'website' | 'date' | 'datetime'| 'switch' | 'text_list' | 'action_button' | 'progress';
  field: string;
  label?: string;
  mapping?: string;

}

// Record Interface
interface Record {
  [key: string]: any;
}





// กรอง objectStructure ให้มีเฉพาะ object ที่มี label ไม่เป็น null หรือ undefined
const filteredObjectStructure = computed(() => {
  // console.log("objectStructure.value.filter(obj => obj.label) >>> ",objectStructure.value.filter(obj => obj.label))
  return objectStructure.value.filter(obj => obj.label !== null && obj.label !== undefined );
});





// ==================== END: Dynamic Table Rendering ====================


// Compute headers dynamically from records
const tableHeaders = computed(() => {
  // return Object.keys(currentDataType.value || {});
  return objectStructure;
});


interface record {
  id: string;
  image: string;
  name: string;
  status?: string;
  category?: string;
  available?: boolean;
  sku: string;
  price: string;
  progress? : number;
  availability: string[];
  actions?: {
    view_link?: string; // เพิ่มความเป็น optional เพราะบาง record ใช้ `details_url` แทน
    download_options?: string[];
    details_url?: string; // เพิ่มสำหรับบาง record ที่ใช้ `details_url`
  }
  ;
}

const searchQuery = ref('');
const statusFilter = ref('');
const selectedRecords = ref<record[]>([]);
const items = ref<record[]>([]);
const currentPage = ref(1);
const selectAll = ref(0);
const pageSize = ref(5); // Adjust this if pagination is implemented
const totalItems = ref(0);
const totalRecords = ref(0);
const totalPages = ref(1);
const isIndeterminate = ref(false);
const paginatedRecords= ref([]);



const color = ref('rgba(19, 206, 102, 0.8)')



//************ FIELD MAPPING ************//


const transformRecords = (apiRecords: any[], objectStructure: tableStructure[]) => {
  return apiRecords.map(apiRecord => {
    const transformedRecord: Record<string, any> = {};
    objectStructure.value.forEach(({ field, mapping }) => {
      if (apiRecord[mapping] !== undefined) {
        transformedRecord[field] = apiRecord[mapping];
       
      }
    });
    return transformedRecord;
  });
};




function calcTotalPages(rec: any){
  return Math.ceil(rec.length / pageSize.value);
};

interface FetchData {
   data: any[]; // แทน any ด้วยชนิดข้อมูลที่ถูกต้องของ API ของคุณ
   page: number; // หมายเลขหน้าปัจจุบัน
   page_size: number ; // จำนวนรายการต่อหน้า
   total_items: number ;
   total_pages: number ;
}

const records = ref([]);
const fetchItems = async (page: number, size: number) => {
    paginatedRecords.value = [];
    try {


      const { data: fetchData } = await useFetch(`http://127.0.0.1:8000/arisa-api/salepie-api/products`, {
        params: {
          page,
          page_size: size,
        },
      });
      // console.log('<<<<<<<<<<< fetchData.value >>>>>>>>>>>>>',fetchData.value);
      
      let dataFetch = [];
      
      if (fetchData) {
        dataFetch = fetchData.value?.data || [];
        currentPage.value = fetchData.value.page ;
        pageSize.value = fetchData.value.page_size;
        totalItems.value = fetchData.value.total_items;
        totalPages.value = fetchData.value.total_pages;

        // paginatedRecords.value = dataFetch.map(item => transformRecord(item));
        // console.log('<<<<<<<<<<< dataFetch >>>>>>>>>>>>>',dataFetch);
        paginatedRecords.value = transformRecords(dataFetch, objectStructure);
        // console.log('<<<<<<<<<<< paginatedRecords.value >>>>>>>>>>>>>',paginatedRecords.value);
      }

    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  

const productFetching = await fetchItems(1, pageSize.value);
// const productsArray = productFetching ?? []; 
// records.value = productsArray.map(item => transformRecord(item));

onMounted( async() => {
  
 
});





const openSidebarFilter = () => {
  navStore.sidebarFilterParam = !navStore.sidebarFilterParam

  // console.log("navStore.sidebarFilterParam >>> ",navStore.sidebarFilterParam)

};



// ============= PAGE =============



const calTotalPages = () => {
  return Math.ceil(records.value.length / pageSize.value);
};

const paginationInfo = computed(() => {
  return `Showing ${Math.min(
    pageSize.value,
    records.value.length
  )} of ${records.value.length} records`;
});

// const paginatedRecords = computed(() => {
//   const start = (currentPage.value - 1) * pageSize.value;
//   const end = start + pageSize.value;
//   return records.value.slice(start, end);
// });

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

watch(currentPage, async() => {
  await fetchItems(currentPage.value , pageSize.value);
});

// เมื่อ itemsPerPage เปลี่ยน ต้องอัปเดต currentPage เป็น 1 เสมอ เพื่อเริ่มใหม่
watch(pageSize, async() => {
  currentPage.value = 1;
  await fetchItems(1, pageSize.value);
});





// ============= SELECT ALL =============


const toggleRecordSelection = (rec) => {
  const index = selectedRecords.value.findIndex(r => r.id === rec.id);
  if (index === -1) {
    selectedRecords.value.push(rec);

  }
  else{
    selectedRecords.value.splice(index, 1);

  }
  
};



const toggleSelectAll = () => {
  if (selectAll.value === 1) {
    // Unselect all records in the current page only
    paginatedRecords.value.forEach(record => {
      const index = selectedRecords.value.findIndex(r => r.id === record.id);
      if (index !== -1) {
        selectedRecords.value.splice(index, 1);
      }
    });
    selectAll.value = 0;
    isIndeterminate.value = selectedRecords.value.length > 0;
  } else {
    // Select all records in the current page only (if not already selected)
    paginatedRecords.value.forEach(record => {
      const alreadySelected = selectedRecords.value.some(r => r.id === record.id);
      if (!alreadySelected) {
        selectedRecords.value.push(record);
      }
    });
    selectAll.value = 1;
    isIndeterminate.value = false;
  }
};

const checkSelection = (recordId) => {
  return selectedRecords.value.some(r => r.id === recordId);
};



const monitorSelection = () => {
const currentRecordsIds = paginatedRecords.value?.map(record => record.id) || [];
  //console.log("currentRecordsIds >>> ",currentRecordsIds)
  const selectedIds = selectedRecords.value?.map(record => record.id) || [];
  // console.log("selectedIds >>> ",selectedIds)
  const allSelected = currentRecordsIds.every(id => selectedIds.includes(id));
  const someSelected = currentRecordsIds.some(id => selectedIds.includes(id));

  if (allSelected) {
    selectAll.value = 1;
    isIndeterminate.value = false;
  } else if (someSelected) {
    selectAll.value = 2;
    isIndeterminate.value = true;
  } else {
    selectAll.value = 0;
    isIndeterminate.value = false;
  }

  // console.log("selectAll.value >>> ",selectAll.value)
}



watch(selectedRecords, monitorSelection , { deep: true });
watch(paginatedRecords, monitorSelection , { deep: true });

watch(pageSize, () => {
  currentPage.value = 1;
});

</script>

<style scoped>
/* Your styles here */
</style>