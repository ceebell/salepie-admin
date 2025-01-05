<template>
  <div class="min-h-screen custom-scrollbar">
      <!-- Secondary Sidebar -->
  <aside id="hs-pro-mini-sidebar" class="
  hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  translate-x-full transition-all duration-300 transform
  w-20
  hidden lg:block
  fixed inset-y-0 end-0 z-[60]
  bg-white border-s border-gray-200
  lg:block lg:translate-x-0 lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabindex="-1" aria-label="Mini Sidebar">
    <div class="h-full p-4">
      <div class="relative h-full border border-dashed border-gray-200 rounded-xl overflow-hidden dark:border-neutral-700">
        <div class="absolute inset-0 size-full">
          <div class="bg-[linear-gradient(45deg,theme(colors.gray.100)_7.14%,transparent_7.14%,transparent_50%,theme(colors.gray.100)_50%,theme(colors.gray.100)_57.14%,transparent_57.14%,transparent);] bg-[length:10px_10px] dark:bg-[linear-gradient(45deg,theme(colors.neutral.700)_7.14%,transparent_7.14%,transparent_50%,theme(colors.neutral.700)_50%,theme(colors.neutral.700)_57.14%,transparent_57.14%,transparent);] size-full"></div>
        </div>
      </div>
    </div>

    <div class="lg:hidden absolute top-3 -start-3 z-10">
      <!-- Sidebar Close -->
      <button type="button" class="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-pro-mini-sidebar">
        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      <!-- End Sidebar Close -->
    </div>
  </aside>
  <!-- End Secondary Sidebar -->
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
