<template>
  <div>
        <!-- Location Modal -->
<div id="hs-pro-shnlm" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-pro-shnlm-label">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-md sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
      <div class="w-full max-h-full relative flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
        <!-- Close Button -->
        <div class="absolute top-2.5 end-2.5 z-10">
          <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-shnlm">
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <!-- End Close Button -->
  
        <!-- Body -->
        <div class="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div class="p-6 md:p-8">
            <div class="mb-5">
              <svg class="shrink-0 w-20 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>
            </div>
  
            <h4 id="hs-pro-shnlm-label" class="text-gray-800 dark:text-neutral-200">
              Your location set to <span class="font-semibold">United Kingdom</span>
            </h4>
  
            <ul class="list-disc list-inside ps-3 mt-3 space-y-1">
              <li class="text-sm text-gray-500 dark:text-neutral-500">
                Shop in GBP £
              </li>
              <li class="text-sm text-gray-500 dark:text-neutral-500">
                Get shipping options for United Kingdom
              </li>
            </ul>
  
            <!-- Button Group -->
            <div class="mt-5 space-y-3">
              <button type="button" class="py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-indigo-700" data-hs-overlay="#hs-pro-shnlm">
                Continue
              </button>
  
              <div class="text-center">
                <button type="button" class="inline-flex justify-center items-center font-medium text-sm text-gray-800 underline underline-offset-4 decoration-1 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400" data-hs-overlay="#hs-pro-shnrsm">
                  Change Country
                </button>
              </div>
            </div>
            <!-- End Button Group -->
          </div>
        </div>
        <!-- End Body -->
      </div>
    </div>
  </div>
  <!-- End Location Modal -->

  </div>
</template>

<script setup lang="ts">

</script>

