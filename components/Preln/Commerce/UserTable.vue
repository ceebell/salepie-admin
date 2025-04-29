<template>
  <div>
    <main id="content" class="min-h-screen  custom-scrollbar lg:ps-[260px] pt-[59px] pb-[24px] sm:pb-[24px] ">
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
                    
                  <!-- BEGIN OF CONTENT -->
                  <div>

                    <!--  TABLE LOADING -->
                    <div id="hs-pro-tabs-dut-all" role="tabpanel" aria-labelledby="hs-pro-tabs-dut-item-all">
                      <!-- Table Content -->
                      <div class="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div class="min-w-full inline-block align-middle">
                          <!-- Skeleton Loader -->
                          <table v-if="navStore.nowLoading === true"  class="min-w-full divide-y divide-stone-200 dark:divide-neutral-700">
                            <thead>
                              <tr>
                                <th scope="col" class="px-5 py-2 text-start" style="width: 50px"></th>
                                <th scope="col" class="px-5 py-2 text-start" style="width: 150px" >
                                    <el-skeleton  animated>
                                      <template #template>
                                        <el-skeleton-item variant="h3" style="width:100%;" />
                                      </template>
                                    </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start" style="width: 250px" >
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start"  style="width: 200px">
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start">
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start">
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start">
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                                <th scope="col" class="px-5 py-2 text-start">
                                  <el-skeleton  animated>
                                    <template #template>
                                      <el-skeleton-item variant="h3" style="width:100%;" />
                                    </template>
                                  </el-skeleton>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                            
                                  <tr v-for="index in 3" :key="'skeleton-' + index" >
                                        <td class="px-5 py-3">
                                              <el-skeleton style="width: 10px"  animated>
                                                <template #template>
                                                  <el-skeleton-item variant="text" :row="1" style="width:30px; height: 30px;" />
                                                  </template>
                                              </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                            <el-skeleton style="width: 100px" animated  >
                                                  <template #template>
                                                    <el-skeleton-item variant="image" style="width: 110px; height: 120px" />
                                                  </template>
                                            </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3" style="width: 100px" >
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3" style="width: 100px">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                        <td class="px-5 py-3">
                                          <el-skeleton  animated>
                                            <template #template>
                                              <el-skeleton-item variant="h3" style="width:50%;" />
                                              <el-skeleton-item variant="h3" style="width:100%;" />
                                            </template>
                                          </el-skeleton>
                                        </td>
                                  </tr>
                            </tbody>
                          </table>
                          
                          <!-- Actual Table -->
                          <!-- <table v-if="navStore.nowLoading === false" class="min-w-full divide-y divide-stone-200 dark:divide-neutral-700"> -->
                        
                          <!-- </table> -->
                          <!-- End Table -->
                        </div>
                          <!-- Container -->
                          <div  id="content_container">
                          </div>
                          <!-- End of Container -->
                          <!-- Container -->
                          <div class="">
                          <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                            <div class="flex flex-col justify-center gap-2">
                            <h1 class="text-xl font-medium leading-none text-gray-900">
                              SaaS Users
                            </h1>
                            <div class="flex items-center flex-wrap gap-1.5 font-medium">
                              <span class="text-md text-gray-600">
                              All Members:
                              </span>
                              <span class="text-md text-gray-800 font-semibold me-2">
                              49,053
                              </span>
                              <span class="text-md text-gray-600">
                              Pro Licenses
                              </span>
                              <span class="text-md text-gray-800 font-semibold">
                              1724
                              </span>
                            </div>
                            </div>
                            <div class="flex items-center gap-2.5">
                            <a class="btn btn-sm btn-light" href="#">
                              Import CSV
                            </a>
                            <a class="btn btn-sm btn-primary" href="#">
                              Add Member
                            </a>
                            </div>
                          </div>
                          </div>
                          <!-- End of Container -->
                          


                          <!-- Container -->
                          <div class="">
                            <div class="grid gap-5 lg:gap-7.5">

                               

                              <div class="card card-grid min-w-full">
                              <div class="card-header flex-wrap gap-2">
                                <h3 class="card-title font-medium text-sm">
                                Showing 10 of 49,053 users
                                </h3>
                                <div class="flex flex-wrap gap-2 lg:gap-5">
                                    <div class="flex">
                                      <label class="input input-sm">
                                      <i class="ki-filled ki-magnifier">
                                      </i>
                                      <input placeholder="Search users + ENTER" type="text" v-model="quickFilter.q" @keyup.enter="onSearch()"  />
                                      </input>
                                      </label>
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                          <select v-model="quickFilter.itemStatus" @change="onSearch()" class="select select-sm w-28">
                                            <option value="">
                                              Select Status
                                            </option>
                                            <option value="active">
                                              Active
                                            </option>
                                            <option value="disabled">
                                              Disabled
                                            </option>
                                            <option value="pending">
                                              Pending
                                            </option>
                                          </select>
                                          <!-- <select class="select select-sm w-28">
                                          <option value="1">
                                            Latest
                                          </option>
                                          <option value="2">
                                            Older
                                          </option>
                                          <option value="3">
                                            Oldest
                                          </option>
                                          </select> -->
                                          <!-- <button class="btn btn-sm btn-outline btn-primary">
                                              <i class="ki-filled ki-setting-4">
                                              </i>
                                              Filters
                                          </button> -->
                                    </div>
                                  <div class="flex">
                                   <!-- Begin: sortingBy -->
                                    <div class="hs-dropdown [--auto-close:true] relative inline-flex">
                                      <button
                                        id="sort-dropdown-button"
                                        type="button"
                                        class="py-1.5 px-3 flex justify-center items-center text-sm text-gray-600 lg:hover:bg-gray-100 rounded-lg dark:text-neutral-400 dark:hover:bg-neutral-800"
                                      >
                                      <svg class="shrink-0 mt-0.5 size-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                          <path d="m3 16 4 4 4-4" />
                                          <path d="M7 20V4" />
                                          <path d="m21 8-4-4-4 4" />
                                          <path d="M17 4v16" />
                                      </svg>
                                        <span class="max-w-32 truncate font-mitr">
                                          {{ sortingSelected ? sortTypeOption.find(opt => opt.id === sortingSelected)?.label : 'เรียงลำดับ' }}
                                        </span>
                                        <svg class="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                      </button>
                                  
                                      <!-- Dropdown Menu -->
                                      <div
                                        class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-56 transition-opacity duration opacity-0 hidden z-10 bg-white rounded-xl shadow-lg dark:bg-neutral-950"
                                        role="menu"
                                        aria-labelledby="sort-dropdown-button"
                                      >
                                        <div class="p-1">
                                          <button
                                            v-for="option in sortTypeOption"
                                            :key="option.id"
                                            type="button"
                                            @click="selectSort(option.id)"
                                            class="w-full text-left text-sm text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 font-mitr"
                                          >
                                            {{ option.label }}
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <!-- End: sortingBy -->
                                  </div>
                                </div>
                              </div>
                              <div class="card-body">
                                <div data-datatable="true" data-datatable-page-size="10">
                                <div class="scrollable-x-auto">
                                 

                                  <!-- BEGIN: TABLE WITH CODE CONTROLE -->
                                  <table class="table table-auto table-border " data-datatable-table="true">
                                      <thead>
                                        <tr>
                                          <th class="w-[60px] text-center">
                                            <input class="checkbox checkbox-sm" type="checkbox" @change="toggleSelectAll" :checked="selectAll === 1" :indeterminate="selectAll === 2" />
                                          </th>
                                          <th v-for="(col, i) in filteredObjectStructure" :key="i" class="min-w-[150px]">
                                            <span class="sort">
                                              <span class="sort-label font-normal text-gray-700">
                                                {{ col.label || col.field }}
                                              </span>
                                              <span class="sort-icon"></span>
                                            </span>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr v-for="(record, index) in paginatedRecords" :key="record.id">
                                          <td class="text-center">
                                            <input class="checkbox checkbox-sm" type="checkbox" :checked="checkSelection(record.id)" @change="toggleRecordSelection(record)" />
                                          </td>
                                    
                                          <!-- Render each column dynamically -->
                                          <td v-for="(col, j) in filteredObjectStructure" :key="j">
                                            <!-- image -->
                                            <div v-if="col.datatype === 'image'" class="flex items-center gap-2.5">
                                              <img :src="record[col.field]" class="rounded-full size-7 shrink-0" />
                                            </div>
                                    
                                            <!-- text_list -->
                                            <div v-else-if="col.datatype === 'text_list'" class="flex flex-wrap gap-1.5">
                                              <span class="badge badge-sm" v-for="(item, k) in record[col.field]" :key="k">{{ item }}</span>
                                            </div>
                                    
                                            <!-- switch -->
                                            <div v-else-if="col.datatype === 'switch'">
                                              <label class="switch switch-sm">
                                                <!-- <input type="checkbox" :checked="record[col.field]" @change="record[col.field] = !record[col.field]" /> -->
                                                <el-switch v-model="record[col.field]" class="ml-2" style="--el-switch-on-color: #13ce66;"  />
                                              </label>
                                            </div>
                                    
                                            <!-- money -->
                                            <div v-else-if="col.datatype === 'money'">
                                              <span class="text-green-700 font-semibold">{{ record[col.field] }}</span>
                                            </div>

                                            <!-- image_text_1 -->
                                            <div v-else-if="col.datatype === 'image_text_1'" class="flex flex-wrap gap-1.5">
                                              <span class="badge badge-sm" v-for="(item, k) in record[col.field]" :key="k">{{ item }}</span>

                                                <div class="flex items-center gap-2.5">
                                                    <img alt="" class="rounded-full size-7 shrink-0" :src="record[col.imageField]"/>
                                                    <div class="flex flex-col text-wrap">
                                                      <div class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px " href="#">
                                                      {{ record[col.textField] }}
                                                      </div>
                                                      <div class="text-wrap text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                                                        {{ record[col.subtextField] }}
                                                      </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- text_subtext_1 -->
                                            <div v-else-if="col.datatype === 'text_subtext_1'" class="flex flex-wrap gap-1.5">
                                                    <div class="flex flex-col">
                                                      <span class="text-sm text-gray-800 font-medium">
                                                        {{ record[col.textField] }}
                                                      </span>
                                                      <span class="text-xs text-gray-600">
                                                        {{ record[col.subtextField] }}
                                                      </span>
                                                      </div>
                                            </div>
                                    
                                            <!-- default text -->
                                            <div v-else>
                                              <span>{{ record[col.field] || 'ไม่ระบุ' }}</span>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                  </table>
                                  <!-- END: TABLE WITH CODE CONTROLE -->
                                </div>

                                  <!-- BEGIN: Table Footer -->
                                  <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                                        <!-- BEGIN: Dropdown -->
                                        <div class="flex items-center gap-2 order-2 md:order-1">
                                            Show
                                            <select class="select select-sm w-16" v-model="pageSize" >
                                              <option v-for="(size, sizeInd) in navStore.page_size_options" :key="sizeInd" :value="size">{{size}}</option>
                                            </select>
                                            per page
                                        </div>
                                            <div class="flex items-center gap-4 order-1 md:order-2">

                                            <!-- BEGIN: Pagination -->
                                            <div class="demo-pagination-block">
                                              <!-- <div class="demonstration">Jump to</div> -->
                                              <el-pagination
                                                v-model:current-page="currentPage"
                                                v-model:page-size="pageSize"
                                                :size="ep_size"
                                                layout="prev, pager, next, jumper"
                                                :total="totalItems"
                                              
                                              />
                                            </div>
                                            <!-- END: Pagination -->
                                        </div>
                                        <!-- End: Dropdown -->
                                  </div>
                                  <!-- END: Table Footer -->
                                </div>
                                </div>
                              </div>
                            
                              <div class="grid lg:grid-cols-2 gap-5 lg:gap-7.5">
                              <div class="card">
                                <div class="card-body px-10 py-7.5 lg:pr-12.5">
                                <div class="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
                                  <div class="flex flex-col items-start gap-3">
                                  <h2 class="text-1.5xl font-medium text-gray-900">
                                    Questions ?
                                  </h2>
                                  <p class="text-sm text-gray-800 leading-5.5 mb-2.5">
                                    Visit our Help Center for detailed assistance on billing, payments, and subscriptions.
                                  </p>
                                  </div>
                                  <img alt="image" class="dark:hidden max-h-[150px]" src="/media/illustrations/29.svg"/>
                                  <img alt="image" class="light:hidden max-h-[150px]" src="/media/illustrations/29-dark.svg"/>
                                </div>
                                </div>
                                <div class="card-footer justify-center">
                                <a class="btn btn-link" href="">
                                  Go to Help Center
                                </a>
                                </div>
                              </div>
                              <div class="card">
                                <div class="card-body px-10 py-7.5 lg:pr-12.5">
                                <div class="flex flex-wrap md:flex-nowrap items-center gap-6 md:gap-10">
                                  <div class="flex flex-col items-start gap-3">
                                  <h2 class="text-1.5xl font-medium text-gray-900">
                                    Contact Support
                                  </h2>
                                  <p class="text-sm text-gray-800 leading-5.5 mb-2.5">
                                    Need assistance? Contact our support team for prompt, personalized help your queries & concerns.
                                  </p>
                                  </div>
                                  <img alt="image" class="dark:hidden max-h-[150px]" src="/media/illustrations/31.svg"/>
                                  <img alt="image" class="light:hidden max-h-[150px]" src="/media/illustrations/31-dark.svg"/>
                                </div>
                                </div>
                                <div class="card-footer justify-center">
                                <a class="btn btn-link" href="">
                                  Contact Support
                                </a>
                                </div>
                              </div>
                              </div>
                            </div>
                          </div>
                          <!-- End of Container -->
                      </div>
                      <!-- End Table Content -->
        
                    
                    </div>
                    <!-- End TABLE LOADING -->
        
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
import { useRouter,useRoute } from '#app'
import { useNavStore } from '~/stores/nav';
import { ElementPlus } from '@element-plus/icons-vue'
import { pageHeaderEmits, type TagProps } from 'element-plus'
import { useTransform } from '@/composables/useTransform';
import type { filterStructure } from '@/models/TableStructure'; 

const { transformRecords, generateUrl_MainParams } = useTransform();

const navStore = useNavStore()
const router = useRouter();
// มีทั้ง 2 แบบ
const route = useRoute();


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
    },
    dataItems: {
      type: Array
    },
});



const objectStructure = ref(props.objStructure)
const dataItems = ref(props.dataItems)



// onUpdated(async () => {
//   objectStructure.value = props.objStructure
// });

// ==================== BEGIN: Dynamic Table Rendering ====================



// Custom DataType Interface
interface tableStructure {
  datatype: 'text' | 'image' | 'number' | 'money' | 'website' | 'date' | 'datetime'| 'switch' | 'text_list' | 'action_button' | 'progress' | 'link' ;
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

interface optionType {
  id: string;
  label: string;
}

const searchQuery = ref('');
const statusFilter = ref('');
const selectedRecords = ref<record[]>([]);
const items = ref<record[]>([]);
const currentPage = ref(1);
const selectAll = ref(0);
const pageSize = ref(10); // Adjust this if pagination is implemented
const totalItems = ref(0);
const totalRecords = ref(0);
const totalPages = ref(1);
const isIndeterminate = ref(false);
const paginatedRecords= ref([]);
const ep_size = ref<ComponentSize>('default')
// Simulate loading state
const isLoading = ref(true);
const sortTypeOption = ref<optionType[]>([
                                            {id: "",label:"เรียงลำดับ"},
                                            {id: "newest",label:"สินค้ามาใหม่"},
                                            {id: "best-selling",label:"สินค้าขายดี"},
                                            {id: "price-asc",label:"ราคา: ต่ำไปสูง"},
                                            {id: "price-desc",label:"ราคา: สูงไปต่ำ"},
                                        ]);



                                      
const sortingSelected = ref('')
const quickFilter = ref<filterStructure>(
  {
    q: "",
    itemStatus: "",
    startDate: "",
    endDate: ""
  }
)

const mainParams = ref({})
// const optionalParam = ref([])
const sortingPar = ref({})

onMounted(() => {
  quickFilter.value = navStore.loadMainParameters(route);
  // console.log("UserTable.vue ::::: quickFilter.value >>> ",quickFilter.value)`
  // searchText.value = mainParams.value.q
  sortingPar.value = navStore.loadSorting(route)
  // console.log("UserTable.vue ::::: sortingPar.value >>> ",sortingPar.value)
});




const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}


const mainCriteria = computed(() => {
  const criteria = {}
  // วนลูปเก็บค่าที่ไม่ใช่ optionalAttr
  Object.keys(route.query).forEach(key => {
    if (key !== 'optionalAttr' && key !== 'sortBy') {
      criteria[key] = route.query[key]
    }
  })

  // console.log("mainCriteria  >>> ",criteria)

  return criteria
})

const optionalCriteria = computed(() => {
  const criteria = {}
  if (route.query.optionalAttr) {
    const attrs = Array.isArray(route.query.optionalAttr)
      ? route.query.optionalAttr
      : [route.query.optionalAttr]

    attrs.forEach(item => {
      // ตัวอย่าง item: "color/red,blue" หรือ "size/6L,12L"
      const [key, valuesStr] = item.split('/', 2)
      if (key && valuesStr) {
        const values = valuesStr.split(',').map(v => v.trim())
        if (!criteria[key]) {
          criteria[key] = []
        }
        criteria[key] = criteria[key].concat(values)
      }
    })
  }

  // console.log("optionalCriteria  >>> ",criteria)
  return criteria
});


const sortingCriteria = computed(() => {
  let criteria: any = ""
  // วนลูปเก็บค่าที่ไม่ใช่ optionalAttr
  Object.keys(route.query).forEach(key => {
    if (key === 'sortBy') {
      // console.log("computed :::: criteria IN IF KEY === SORT BY  >>> ",key , "value >>> ", route.query[key] )
      criteria = route.query[key]
    }
  }
)
// console.log("computed :::: criteria  >>> ",criteria )


if(     criteria !== null 
          && criteria !== undefined 
          &&  criteria !== ''
    )
  {
    sortingSelected.value = criteria;
  }
  else{
    return null
  }
  


  return criteria
});



const input = ref<string[]>()


const color = ref('rgba(19, 206, 102, 0.8)')


interface TagsItem {
  name: string
  type: TagProps['type']
}


const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3', 'Tag 3'])
const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}



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
    navStore.setNowLoading(true) 

    paginatedRecords.value = [];

    const mainParam = mainCriteria.value
    // console.log('Searching with mainParam:', mainParam)

    const optionParam = optionalCriteria.value
    // console.log('Searching with optionParam:', optionParam)

    const sortByParam = sortingCriteria.value
    console.log('Searching with sortByParam:', sortByParam)
    const sortingBy = {sortBy: ""}
    if(sortByParam !== null && sortByParam !== undefined && sortByParam !== ''){
      sortingBy.sortBy = sortByParam
    }

    try {


      const { data: fetchData } = await useFetch(`http://127.0.0.1:8000/arisa-api/salepie-api/users`, {
        params: {
          page,
          page_size: size,
          ...mainParam, // ส่งค่า mainParam ไปยัง API
          ...optionParam, // ส่งค่า optionParam ไปยัง API
          ...sortingBy,
        },
      });

      
      let dataFetch = [];
      
      if (fetchData) {
        dataFetch = fetchData.value?.data || [];
        currentPage.value = fetchData.value.page ;
        pageSize.value = fetchData.value.page_size;
        totalItems.value = fetchData.value.total_items;
        totalPages.value = fetchData.value.total_pages;

        // paginatedRecords.value = dataFetch.map(item => transformRecord(item));
        // console.log('<<<<<<<<<<< fetchData.value >>>>>>>>>>>>>',fetchData.value);
        paginatedRecords.value = transformRecords(dataFetch, objectStructure.value);
        // console.log('<<<<<<<<<<< paginatedRecords.value >>>>>>>>>>>>>',paginatedRecords.value);
        // isLoading.value = false;
        
      }
      navStore.setNowLoading(false) ;
    } catch (error) {
      console.error('Error fetching items:', error);
      isLoading.value = false;
    }
  };
  // END : fetchItems()



  watch(() => route.query, async () => {
  console.log("CommonTable ::: Call API >>> ")
  await fetchItems(1, pageSize.value);
  navStore.setNowLoading(false) ;
}, );



// watch(sortingSelected,  () => {
//   // console.log("sortingSelected.value >>> ",sortingSelected.value)
// },
// );
  

const productFetching = await fetchItems(1, pageSize.value);


// ==================== SEARCH FUNCTION ====================

// const performSearch = async () => {
//   // รีเซ็ตหน้าเป็นหน้าแรกและเรียกข้อมูลใหม่พร้อมกับพารามิเตอร์ค้นหา
//   currentPage.value = 1;
//   isLoading.value = true;
//   await fetchItems(currentPage.value, pageSize.value);
// };


const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}

const searchText = ref('')


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
  navStore.setNowLoading(true) ;
  await fetchItems(currentPage.value , pageSize.value);
  navStore.setNowLoading(false) ;
});

// เมื่อ itemsPerPage เปลี่ยน ต้องอัปเดต currentPage เป็น 1 เสมอ เพื่อเริ่มใหม่
watch(pageSize, async() => {
  console.log("pageSize.value >>> ",pageSize.value)

  currentPage.value = 1;
  isLoading.value = true;
  let queryObject = {}
  queryObject = {...route.query}
  queryObject["pageSize"] = pageSize.value
  console.log("queryObject >>> ",queryObject)
  router.push({
    path: route.path,
    query: queryObject
  });



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
  // console.log("************ monitorSelection START selectAll.value ************ ",selectAll.value)
const currentRecordsIds = paginatedRecords.value?.map(record => record.id) || [];
  //console.log("currentRecordsIds >>> ",currentRecordsIds)
  const selectedIds = selectedRecords.value?.map(record => record.id) || [];
  // console.log("selectedIds >>> ",selectedIds)
  const allSelected = currentRecordsIds.every(id => selectedIds.includes(id));
  const someSelected = currentRecordsIds.some(id => selectedIds.includes(id));

  if (allSelected && currentRecordsIds.length > 0) {
    selectAll.value = 1;
    isIndeterminate.value = false;
  } else if (someSelected) {
    selectAll.value = 2;
    isIndeterminate.value = true;
  } else {
    selectAll.value = 0;
    isIndeterminate.value = false;
  }

  console.log("************ monitorSelection LAST selectAll.value ************ ",selectAll.value)
}


const convertFilterObjectToOptionalAttrArray = (input: any): string[] => {
  if (!input || Object.keys(input).length === 0) {
    return []
  }

  return Object.entries(input).map(([key, values]) => {
    return `${key}/${values.join(',')}`
  })
}

const createParamUrl = () => {
  let queryObject = {}
  // currentPage
  queryObject = { page: currentPage.value, page_size: pageSize.value }
}

const selectSort = (id: string) => {
  sortingSelected.value = id
  
  const queryObject = {
    ...route.query,        // ⬅️ เก็บ query ปัจจุบันไว้ก่อน
    sortBy: id     // ⬅️ อัปเดตหรือเพิ่มค่าใหม่
  }


  router.push({
    path: route.path,
    query: queryObject
  });
};



// const filterParamsToUrl = () => {
//   let queryObject = {  };



//   queryObject = { ...mainParams.value }; // ✅ กระจายค่า mainParams.value
 
//   if(sortingPar.value !== null 
//           && sortingPar.value.sortBy !== null 
//           && sortingPar.value.sortBy !== undefined 
//           &&  sortingPar.value.sortBy !== ''
//     )
//   {
//     queryObject.sortBy = sortingPar.value.sortBy;
//   }

//   // console.log(" WE ARE GOING TO PUSH queryObject >>> ",queryObject)

//   router.push({
//     path: route.path,
//     query: queryObject
//   });

// };





watch(selectedRecords, () => {selectAll.value = 0;  monitorSelection();} , { deep: true });
watch(paginatedRecords, () => {
  selectAll.value = 0;  monitorSelection();
  // console.log(" CHANGE !!! paginatedRecords.value >>> ",paginatedRecords.value.map( (x)  => { 
  //   return { fa2: x.enforce2FA}
  // } ) )
} , { deep: true });

const onSearch = () => {
  const queryObject = generateUrl_MainParams(quickFilter.value)

  if(sortingPar.value !== null 
          && sortingPar.value.sortBy !== null 
          && sortingPar.value.sortBy !== undefined 
          &&  sortingPar.value.sortBy !== ''
    )
  {
    queryObject.sortBy = sortingPar.value.sortBy;
  }

    router.push({
    path: route.path,
    query: queryObject
  });
};



watch(sortingSelected, () => {
  currentPage.value = 1;
  isLoading.value = true;
  // fetchItems(currentPage.value, pageSize.value);
});

// monitor ค่า page_size
watch(
  () => navStore.nowLoading,
  (newVal, oldVal) => {
    
  }
);


</script>

<style scoped>
.el-input-tag{
  border: none !important
}
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, and Opera */
}

</style>