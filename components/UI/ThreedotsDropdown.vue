<template>
    <!-- <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton class="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span class="sr-only">Open options</span>
          <EllipsisVerticalIcon class="size-5" aria-hidden="true" />
        </MenuButton>
      </div>
  
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <PencilSquareIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Edit
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <DocumentDuplicateIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Duplicate
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <ArchiveBoxIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Archive
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <ArrowRightCircleIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Move
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <UserPlusIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Share
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <HeartIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Add to favorites
              </a>
            </MenuItem>
          </div>
          <div class="py-1">
            <MenuItem v-slot="{ active }">
              <a href="#" :class="[active ? 'bg-gray-100 text-gray-900 outline-none' : 'text-gray-700', 'group flex items-center px-4 py-2 text-sm']">
                <TrashIcon :class="[active ? 'text-gray-500' : '', 'mr-3 size-5 text-gray-400']" aria-hidden="true" />
                Delete
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu> -->

    <el-col :span="8">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- <i class="ki-filled ki-dots-square text-3xl"></i> -->
          <!-- <el-icon class="el-icon--right"><More /></el-icon> -->
          <i class="ki-outline ki-dots-horizontal text-2xl"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="font-mitr">
            <el-dropdown-item>
              <i class="ki-filled ki-notepad-edit text-2xl pr-2"></i>
              Edit
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="ki-filled ki-copy text-2xl pr-2"></i>
              Duplicate
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="ki-filled  ki-trash  text-2xl pr-2"></i> 
              Delete
            </el-dropdown-item>

            <!-- <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>

  </template>
  
  <script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/vue/20/solid'

import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
  More,
  
} from '@element-plus/icons-vue'

useHead({
  
  link: [
  {
    rel: 'stylesheet',
    href: 'icons/styles.bundle.css', // Point to the file in the 'public' folder
  },
  {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
 ],
});


</script>

<style scoped>
.el-popper{
  width: 130px !important;
}
.el-dropdown-menu__item{
  padding-top: 20px;
  padding-bottom: 20px;
}

.el-dropdown-menu__item:hover{
  background-color:bisque !important;
  padding-top: 20px;
  padding-bottom: 20px;
}


.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>