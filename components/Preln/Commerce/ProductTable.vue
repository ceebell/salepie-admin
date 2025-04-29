<template>
  <div>
    <main id="content" class="lg:ps-[260px] pt-[59px] pb-[40px] sm:pb-[64px] ">
        <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
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
                        <button type="button" class="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-epfo">
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
                            Filter
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
                                    <input type="checkbox" :checked="selectAll === 1" :indeterminate="selectAll === 2" @change="toggleSelectAll" class="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800">
                              </th>
    
                            <th scope="col" class="min-w-[250px] ">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptits" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  Item
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-eptits">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col" class="min-w-36">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-epttys" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  Type
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-epttys">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptsts" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  Stocks
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-eptsts">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptsks" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  SKU
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-eptsks">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptprs" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  Price
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-eptprs">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col" class="min-w-[160px] ">
                              <!-- Sort Dropdown -->
                              <div class="hs-dropdown relative inline-flex w-full cursor-pointer">
                                <button id="hs-pro-eptai" type="button" class="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                  Available In
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m7 15 5 5 5-5" />
                                    <path d="m7 9 5-5 5 5" />
                                  </svg>
                                </button>
    
                                <!-- Dropdown -->
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-eptai">
                                  <div class="p-1">
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m5 12 7-7 7 7" />
                                        <path d="M12 19V5" />
                                      </svg>
                                      Sort ascending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 5v14" />
                                        <path d="m19 12-7 7-7-7" />
                                      </svg>
                                      Sort descending
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m12 19-7-7 7-7" />
                                        <path d="M19 12H5" />
                                      </svg>
                                      Move left
                                    </button>
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                      </svg>
                                      Move right
                                    </button>
    
                                    <div class="my-1 border-t border-stone-200 dark:border-neutral-800"></div>
    
                                    <button type="button" class="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                                      <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                        <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                        <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                        <line x1="2" x2="22" y1="2" y2="22" />
                                      </svg>
                                      Hide in view
                                    </button>
                                  </div>
                                </div>
                                <!-- End Dropdown -->
                              </div>
                              <!-- End Sort Dropdown -->
                            </th>
    
                            <th scope="col"></th>
                          </tr>
                        </thead>


                        <!-- Table body row for products -->
                        <tbody class="divide-y divide-stone-200 dark:divide-neutral-700">
                           <tr v-for="(product, ind) in paginatedRecords" :key="product.id">
                            <td class="size-px whitespace-nowrap ps-3 py-4">
                                <!-- <input type="checkbox" class="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"> -->
                                <!-- Select each -->
                                <!-- <input type="checkbox" v-model="selectedRecords" :value="product" @change="toggleRecordSelection(product)" class="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"> -->
                                <input class="checkbox checkbox-sm" type="checkbox" :checked="checkSelection(product.id)" @change="toggleRecordSelection(product)" />
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <div class="w-full flex items-center gap-x-3">
                                <img class="shrink-0 size-12 rounded-md" :src="product.image" alt="Product Image">
                                <div class="grow">
                                  <a class="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500" href="../../pro/ecommerce/product-details.html">
                                    {{product.name}}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <span class="text-sm text-stone-600 dark:text-neutral-400">
                                {{product.category}}
                              </span>
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <div class="flex justify-between items-center">
                                <div class="relative inline-block">
                                    <el-switch
                                    v-model="product.available"
                                    style="--el-switch-on-color: #13ce66"
                                  />
                                </div>
                              </div>
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <span class="text-sm text-stone-600 dark:text-neutral-400">
                                {{product.sku}}
                              </span>
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <span class="text-sm text-stone-600 dark:text-neutral-400">
                                {{product.price}}
                              </span>
                            </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                                <div class="flex flex-wrap gap-1">
                                  <span
                                    v-for="location in product.availability"
                                    :key="location"
                                    class="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200"
                                  >
                                    {{ location }}
                                  </span>
                                </div>
                              </td>
                            <td class="size-px whitespace-nowrap px-4 py-3">
                              <div class="inline-flex items-center -space-x-px">
                                <a class="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="../../pro/ecommerce/product-details.html">
                                  <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                  </svg>
                                </a>
    
                                <!-- Download Dropdown -->
                                <div class="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                                  <button id="hs-pro-etwsdd1" type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                      <polyline points="7 10 12 15 17 10" />
                                      <line x1="12" x2="12" y1="15" y2="3" />
                                    </svg>
                                  </button>
    
                                  <!-- Download Dropdown -->
                                  
                                  <!-- End Download Dropdown -->
                                </div>
                                <!-- End Download Dropdown -->
                              </div>
                            </td>
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
                        <span class="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">3</span>
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
                          <select class="select select-sm w-16" v-model="itemsPerPage" @change="updatePageSize">
                            <option :value="3">3</option>
                            <option :value="10">10</option>
                            <option :value="25">25</option>
                            <option :value="50">50</option>
                          </select>
                          per page
                        </div>

                        <div class="flex w-full justify-between pt-1 gap-4 order-1 md:order-2">
                          <!-- <span>{{ paginationInfo }}</span> -->
                          <div class="pagination">
                            <button class="mx-4" @click="prevPage" :disabled="currentPage === 1">Previous</button>
                            <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                          </div>
                        </div>
                        
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
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

useHead({
 
  link: [
  {
    rel: 'stylesheet',
    href: 'css/prelnmain.min.css', // Point to the file in the 'public' folder
  },
 ],
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
  availability: string[];
  actions?: {
    view_link?: string; // เพิ่มความเป็น optional เพราะบาง record ใช้ `details_url` แทน
    download_options?: string[];
    details_url?: string; // เพิ่มสำหรับบาง record ที่ใช้ `details_url`
  }
  ;
}

const color = ref('rgba(19, 206, 102, 0.8)')

const records = ref<record[]>([
    {
        "id" : "sohgoisd345345",
        "image" : "https://images.unsplash.com/photo-1528310385748-dba09bf1657a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "name": "Google Home",
        "category": "Electronics",
        "available": false,
        "sku": "2384741241",
        "price": "$65",
        "availability": ["🛍️ In store", "🌐 Online"],
        "actions": {
            "view_link": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "678dgosjs9civhh09s",
        "image" : "https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "name": "Calvin Klein T-shirts",
        "category": "Clothing",
        "available": true,
        "sku": "4124123847",
        "price": "$21",
        "availability": ["🛍️ In store"],
        "actions": {
            "view_link": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "sn8ysdvdfgvhhis9dhj8",
        "image" : "https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "name": "Pattern Winter Sweater",
        "category": "Accessories",
        "available": false,
        "sku": "8472341241",
        "price": "$37",
        "availability": ["🛍️ In store", "🌐 Online"],
        "actions": {
            "view_link": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "mbiusndfu89sd76sdf90u0sd",
        "name": "White Blazer by Armani",
        "category": "Clothing",
        "status": "Available",
        "sku": "7184741241",
        "price": "$17",
        "availability": ["🛍️ In store"],
        "image": "https://images.unsplash.com/photo-1616969899621-0ea269426a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "actions": {
            "details_url": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "Uhnd799jsdf8g87sdf-di",
        "name": "Watch",
        "category": "Tech",
        "status": "Available",
        "sku": "1084741241",
        "price": "$249",
        "availability": ["🌐 Online"],
        "image": "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "actions": {
            "details_url": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "d9LskOo09sdfm-sdfk",
        "name": "Nike Air Jordan 1 Yellow",
        "category": "Shoes",
        "status": "Available",
        "sku": "4831441241",
        "price": "$149",
        "availability": ["🛍️ In store", "🌐 Online"],
        "image": "https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "actions": {
            "details_url": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        
        "id" : "g98sdh98sd09J09udf0",
        "name": "Keyboard Matt",
        "category": "Accessories",
        "status": "Available",
        "sku": "1223847441",
        "price": "$39",
        "availability": ["🛍️ In store", "🌐 Online"],
        "image": "https://images.unsplash.com/photo-1617220933132-4e0d0596ff64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "actions": {
            "details_url": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
    {
        "id" : "Lodf90090sd09j-sdf",
        "name": "Hat",
        "category": "Accessories",
        "status": "Available",
        "sku": "1242384741",
        "price": "$4",
        "availability": ["🛍️ In store"],
        "image": "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80",
        "actions": {
            "details_url": "../../pro/ecommerce/product-details.html",
            "download_options": ["Excel", "Word"]
        }
    },
]);

const searchQuery = ref('');
const statusFilter = ref('');
const selectedRecords = ref<record[]>([]);
const itemsPerPage = ref(3);
const currentPage = ref(1);
const selectAll = ref(0);
const pageSize = ref(3); // Adjust this if pagination is implemented
const totalRecords = ref(0);
const isIndeterminate = ref(false);


// const filteredRecords = computed(() => {
//   return records.value.filter(record => {
//     return (
//       record.name.toLowerCase().includes(searchQuery.value.toLowerCase())
//     );
//   });
// });
const filteredRecords = computed(() => {
  return records.value.filter(record => {
    const matchesName = record.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesStatus = !statusFilter.value || record.status === statusFilter.value;
    return matchesName && matchesStatus;
  });
});


// ============= PAGE =============

const totalPages = computed(() => {
  return Math.ceil(filteredRecords.value.length / itemsPerPage.value);
});

const paginationInfo = computed(() => {
  return `Showing ${Math.min(
    itemsPerPage.value,
    filteredRecords.value.length
  )} of ${filteredRecords.value.length} records`;
});

const paginatedRecords = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredRecords.value.slice(start, end);
});

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




// ============= SELECT ALL =============


const toggleRecordSelection = (record) => {
  const index = selectedRecords.value.findIndex(r => r.id === record.id);
  if (index === -1) {
    selectedRecords.value.push(record);

  }
  else{
    selectedRecords.value.splice(index, 1);

  }
  
};



const toggleSelectAll = () => {
  if (selectAll.value === 1) {
    selectedRecords.value = [];
    selectAll.value = 0;
    isIndeterminate.value = false;
  } else {
    selectedRecords.value = [...paginatedRecords.value];
    selectAll.value = 1;
    isIndeterminate.value = false;
  }
};

const checkSelection = (product_id: string) => {
    const selectedIds = selectedRecords.value.findIndex(r => r.id === product_id);
    if (selectedIds === -1) {
    return false;
  }
  else{
    return true;
  }
};

// const isIndeterminate = computed(() => {
//   return selectedRecords.value.length > 0 && selectedRecords.value.length < records.value.length;
// });

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
}



watch(selectedRecords, monitorSelection , { deep: true });
watch(paginatedRecords, monitorSelection , { deep: true });

watch(itemsPerPage, () => {
  currentPage.value = 1;
});

</script>

<style scoped>
/* Your styles here */
</style>