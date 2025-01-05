<template>
    <!-- Wrapper -->
    <div class="wrapper flex grow flex-col">
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
                Store Clients
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
                  724
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
        <div class="container-fixed">
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
                      <input placeholder="Search users" type="text" v-model="searchQuery" />
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
                <div data-datatable="true" data-datatable-page-size="10">
                  <div class="scrollable-x-auto">
                    <table class="table table-auto table-border" data-datatable-table="true">
                      <thead>
                        <tr>
                          <th class="w-[60px] text-center">
                            <input class="checkbox checkbox-sm" type="checkbox" :checked="allUsersSelected" :indeterminate="someUsersSelected" @change="toggleSelectAll" />
                          </th>
                          <th class="min-w-[300px]">Member</th>
                          <th class="min-w-[150px]">Client ID</th>
                          <th class="min-w-[150px]">Orders Value</th>
                          <th class="min-w-[150px]">Location</th>
                          <th class="min-w-[150px]">Activity</th>
                          <th class="w-[100px] text-center">Invoices</th>
                          <th class="w-[60px]"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in filteredUsers" :key="user.id">
                          <td class="text-center">
                            <input class="checkbox checkbox-sm" type="checkbox" :checked="isSelected(user)" @change="toggleUserSelection(user)" />
                          </td>
                          <td>
                            <div class="flex items-center gap-2.5">
                              <img :alt="user.name" class="rounded-full size-7 shrink-0" :src="user.avatar" />
                              <div class="flex flex-col">
                                <a class="text-sm font-medium text-gray-900 hover:text-primary-active mb-px" href="#">
                                  {{ user.name }}
                                </a>
                                <a class="text-2sm text-gray-700 font-normal hover:text-primary-active" href="#">
                                  {{ user.email }}
                                </a>
                              </div>
                            </div>
                          </td>
                          <td class="text-gray-800 font-normal">{{ user.clientId }}</td>
                          <td class="text-gray-800 font-normal">{{ user.ordersValue }}</td>
                          <td>
                            <div class="flex items-center gap-1.5 text-gray-800 font-normal">
                              <img :alt="user.location" class="rounded-full size-4 shrink-0" :src="user.flag" />
                              {{ user.location }}
                            </div>
                          </td>
                          <td class="text-gray-800 font-normal">{{ user.activity }}</td>
                          <td>
                            <div class="flex justify-center">
                              <a class="btn btn-link" href="#">
                                View
                              </a>
                            </div>
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
                      <select class="select select-sm w-16" v-model="itemsPerPage">
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
            <!-- <div>
                <h2>Selected Users (JSON):</h2>
                <pre>{{ JSON.stringify(selectedUsers, null, 2) }}</pre>
          </div> -->
      </main>
      <!-- End of Content -->
    </div>
    <!-- End of Wrapper -->
  </template>
  
  <script setup> 
  
  import { ref, computed } from 'vue';
  useHead({
    script: [
      { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
      { src: 'js/demo1.js', type: 'text/javascript', defer: true },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'css/metro-style.css', // ชี้ไปที่ไฟล์ใน 'public' folder
      },
    ],
  });
  
  
  const searchQuery = ref('');
  const statusFilter = ref('');
  const sortOrder = ref('Latest');
  const itemsPerPage = ref(10);
  const currentPage = ref(1);
  const selectAll = ref(false);
  const selectedUsers = ref([]);
  
  const users = ref([
    {
      id: 1,
      name: 'Tyler Hero',
      email: 'tyler.hero@gmail.com',
      clientId: 'MS-23456832',
      ordersValue: '$27,456.09',
      location: 'Estonia',
      flag: 'assets/media/flags/estonia.svg',
      activity: 'Current session',
      avatar: 'assets/media/avatars/300-3.png',
    },
    {
      id: 2,
      name: 'Esther Howard',
      email: 'esther.howard@gmail.com',
      clientId: 'MS-52967418',
      ordersValue: '$45,800.90',
      location: 'Malaysia',
      flag: 'assets/media/flags/malaysia.svg',
      activity: 'Week ago',
      avatar: 'assets/media/avatars/300-1.png',
    },
    {
      id: 3,
      name: 'Jacob Jones',
      email: 'jacob.jones@gmail.com',
      clientId: 'MS-43765928',
      ordersValue: '$63,250.30',
      location: 'Ukraine',
      flag: 'assets/media/flags/ukraine.svg',
      activity: 'Today, 9:53 am',
      avatar: 'assets/media/avatars/300-11.png',
    },
    {
      id: 4,
      name: 'Cody Fisher',
      email: 'cody.fisher@gmail.com',
      clientId: 'MS-29846571',
      ordersValue: '$80,100.45',
      location: 'Canada',
      flag: 'assets/media/flags/canada.svg',
      activity: 'Current session',
      avatar: 'assets/media/avatars/300-2.png',
    },
  ]);
  
  const filteredUsers = computed(() => {
    return users.value.filter(user => {
      return (
        user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
        (statusFilter.value === '' || user.status === statusFilter.value)
      );
    });
  });
  
  const totalPages = computed(() => {
    return Math.ceil(filteredUsers.value.length / itemsPerPage.value);
  });
  
  const paginationInfo = computed(() => {
    return `Showing ${Math.min(
      itemsPerPage.value,
      filteredUsers.value.length
    )} of ${filteredUsers.value.length} users`;
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
  
  const toggleUserSelection = (user) => {
    if (isSelected(user)) {
      selectedUsers.value = selectedUsers.value.filter(selected => selected.id !== user.id);
    } else {
      selectedUsers.value.push(user);
    }
  };
  
  const toggleSelectAll = () => {
    if (allUsersSelected.value) {
      selectedUsers.value = [];
    } else {
      selectedUsers.value = [...filteredUsers.value];
    }
  };
  
  const isSelected = (user) => {
    return selectedUsers.value.some(selected => selected.id === user.id);
  };
  
  const allUsersSelected = computed(() => {
    return filteredUsers.value.length > 0 && filteredUsers.value.every(user => isSelected(user));
  });
  const someUsersSelected = computed(() => {
    return selectedUsers.value.length > 0 && selectedUsers.value.length < filteredUsers.value.length;
  });
  
  
  
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>