<template>
    <!-- Wrapper -->
    <div class="wrapper flex grow flex-col">
      <!-- STORE TABLE PAGE GPT4 -->
      <!-- Content -->
      <main class="grow content pt-5" id="content" role="content">
        <!-- Container -->
        <div class="container-fixed" id="content_container">
        </div>
        <!-- End of Container -->
        <!-- Container -->
        <div class="container-fixed">
          <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
            <div class="flex flex-col justify-center gap-2">
              <h1 class="text-xl font-medium leading-none text-gray-900">
                Store Table
              </h1>
              <div class="flex items-center flex-wrap gap-1.5 font-medium">
                <span class="text-md text-gray-600">
                  All Records:
                </span>
                <span class="text-md text-gray-800 font-semibold me-2">
                  {{ totalRecords }}
                </span>
              </div>
            </div>
            <div class="flex items-center gap-2.5">
              <a class="btn btn-sm btn-light" href="#">
                Import CSV
              </a>
              <a class="btn btn-sm btn-primary" href="#">
                Add Record
              </a>
            </div>
          </div>
        </div>
        <!-- End of Container -->
        <!-- Container -->
        <div class="container-fixed">
          <div class="grid gap-5 lg:gap-7.5">
            <div class="card card-grid min-w-full">
              <div class="card-header flex-wrap gap-2">
                <h3 class="card-title font-medium text-sm">
                  Showing {{ itemsPerPage }} of {{ totalRecords }} records
                </h3>
                <div class="flex flex-wrap gap-2 lg:gap-5">
                  <div class="flex">
                    <label class="input input-sm">
                      <i class="ki-filled ki-magnifier">
                      </i>
                      <input placeholder="Search records" type="text" v-model="searchQuery" />
                    </label>
                  </div>
                  <div class="flex flex-wrap gap-2.5">
                    <select class="select select-sm w-28" v-model="statusFilter">
                      <option value="Active">Active</option>
                      <option value="Disabled">Disabled</option>
                      <option value="Pending">Pending</option>
                    </select>
                    <select class="select select-sm w-28" v-model="sortOrder">
                      <option value="Latest">Latest</option>
                      <option value="Older">Older</option>
                      <option value="Oldest">Oldest</option>
                    </select>
                    <button class="btn btn-sm btn-outline btn-primary">
                      <i class="ki-filled ki-setting-4">
                      </i>
                      Filters
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div data-datatable="true" :data-datatable-page-size="itemsPerPage">
                  <div class="scrollable-x-auto">
                    <table class="table table-auto table-border" data-datatable-table="true">
                      <thead>
                        <tr>
                          <th class="w-[60px] text-center">
                            <input class="checkbox checkbox-sm" type="checkbox" :indeterminate="isIndeterminate" v-model="selectAll" @change="toggleSelectAll" />
                          </th>
                          <th v-for="column in columns" :key="column.key" class="min-w-[150px]">
                            {{ column.label }}
                          </th>
                          <th class="w-[60px]"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="record in paginatedRecords" :key="record.id">
                          <td class="text-center">
                            <input class="checkbox checkbox-sm" type="checkbox" :checked="selectedRecords.includes(record.id)" @change="toggleRecordSelection(record.id)" />
                          </td>
                          <td v-for="column in columns" :key="column.key" class="text-gray-800 font-normal">
                            {{ record[column.key] }}
                          </td>
                          <td>
                            <div class="menu" data-menu="true">
                              <div class="menu-item" data-menu-item-offset="0, 10px" data-menu-item-placement="bottom-end" data-menu-item-toggle="dropdown" data-menu-item-trigger="click|lg:click">
                                <button class="menu-toggle btn btn-sm btn-icon btn-light btn-clear">
                                  <i class="ki-filled ki-dots-vertical"></i>
                                </button>
                                <div class="menu-dropdown menu-default w-full max-w-[175px]" data-menu-dismiss="true">
                                  <div class="menu-item">
                                    <a class="menu-link" href="#">
                                      <span class="menu-icon">
                                        <i class="ki-filled ki-search-list"></i>
                                      </span>
                                      <span class="menu-title">View</span>
                                    </a>
                                  </div>
                                  <div class="menu-item">
                                    <a class="menu-link" href="#">
                                      <span class="menu-icon">
                                        <i class="ki-filled ki-file-up"></i>
                                      </span>
                                      <span class="menu-title">Export</span>
                                    </a>
                                  </div>
                                  <div class="menu-separator"></div>
                                  <div class="menu-item">
                                    <a class="menu-link" href="#">
                                      <span class="menu-icon">
                                        <i class="ki-filled ki-pencil"></i>
                                      </span>
                                      <span class="menu-title">Edit</span>
                                    </a>
                                  </div>
                                  <div class="menu-item">
                                    <a class="menu-link" href="#">
                                      <span class="menu-icon">
                                        <i class="ki-filled ki-copy"></i>
                                      </span>
                                      <span class="menu-title">Make a copy</span>
                                    </a>
                                  </div>
                                  <div class="menu-separator"></div>
                                  <div class="menu-item">
                                    <a class="menu-link" href="#">
                                      <span class="menu-icon">
                                        <i class="ki-filled ki-trash"></i>
                                      </span>
                                      <span class="menu-title">Remove</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-5 text-gray-600 text-2sm font-medium">
                    <div class="flex items-center gap-2 order-2 md:order-1">
                      Show
                      <select class="select select-sm w-16" v-model="itemsPerPage" @change="updatePageSize">
                        <option :value="3">3</option>
                        <option :value="10">10</option>
                        <option :value="25">25</option>
                        <option :value="50">50</option>
                      </select>
                      per page
                    </div>
                    <div class="flex items-center gap-4 order-1 md:order-2">
                      <span>{{ paginationInfo }}</span>
                      <div class="pagination">
                        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
                        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End of Container -->
      </main>
      <!-- End of Content -->
    </div>
    <!-- End of Wrapper -->
  </template>
  
  <script setup>
  import { ref, computed, onMounted, watch } from 'vue';
  useHead({
    script: [
      { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
      { src: 'js/layouts/demo1.js', type: 'text/javascript', defer: true },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'css/metro-style.css', // Point to the file in the 'public' folder
      },
    ],
  });
  
  const searchQuery = ref('');
  const statusFilter = ref('');
  const sortOrder = ref('Latest');
  const itemsPerPage = ref(3);
  const currentPage = ref(1);
  const selectAll = ref(false);
  const selectedRecords = ref([]);
  const columns = ref([  // Define the columns of the table
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'clientId', label: 'Client ID' },
    { key: 'ordersValue', label: 'Orders Value' },
    { key: 'location', label: 'Location' },
    { key: 'activity', label: 'Activity' },
  ]);
  
  const records = ref([]);
  const totalRecords = ref(0);
  
  onMounted(async () => {
    await fetchRecords();
  });
  
  const fetchRecords = async () => {
    try {
      const userFetching = await $fetch('https://jsonplaceholder.typicode.com/users');
      records.value = userFetching;
      totalRecords.value = records.value.length;
    } catch (error) {
      console.error('Error fetching records:', error);
    }
  };
  
  const filteredRecords = computed(() => {
    return records.value.filter(record => {
      return (
        record.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        (statusFilter.value === '' || record.status?.toLowerCase() === statusFilter.value.toLowerCase())
      );
    });
  });
  
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
  
  const toggleRecordSelection = (recordId) => {
    if (selectedRecords.value.includes(recordId)) {
      selectedRecords.value = selectedRecords.value.filter(id => id !== recordId);
    } else {
      selectedRecords.value.push(recordId);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectAll.value) {
      selectedRecords.value = records.value.map(record => record.id);
    } else {
      selectedRecords.value = [];
    }
  };
  
  const isIndeterminate = computed(() => {
    return selectedRecords.value.length > 0 && selectedRecords.value.length < records.value.length;
  });
  
  watch(selectedRecords, () => {
    if (selectedRecords.value.length === records.value.length) {
      selectAll.value = true;
    } else {
      selectAll.value = false;
    }
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>