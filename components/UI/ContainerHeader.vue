<template>
    <!-- Begin: Container Header -->
    <div class="container-fixed">
      <div class="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
        <div class="flex flex-col justify-center gap-2">
          <h1 class="text-xl font-medium leading-none text-gray-900">
            <slot name="title"></slot>
          </h1>
          <div class="flex items-center gap-2 text-sm font-normal text-gray-700">
            <slot name="subtitle"></slot>
          </div>
        </div>
  
        <div class="flex items-center gap-2.5">
          <slot name="actions">
          </slot>
        </div>
      </div>
    </div>
    <!-- End: Container Header -->
  </template>
  
  <script setup>
  // No logic needed, fully slot-based
  </script>