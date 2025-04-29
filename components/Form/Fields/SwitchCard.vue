<template>
    <div class="flex items-center justify-between flex-wrap grow border border-gray-200 rounded-xl gap-2 px-3.5 py-2.5">
      <div class="flex items-center flex-wrap gap-3.5">
        <div class="relative size-[50px] shrink-0">
          <svg class="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z"></path>
            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke=""></path>
          </svg>
          <div class="absolute leading-none left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
            <i class="ki-filled ki-sms text-xl text-gray-500"></i>
          </div>
        </div>
        
        <div class="flex flex-col">
          <span class="text-sm font-medium text-gray-900 mb-px">{{ field.label }}</span>
          <span class="text-2sm text-gray-700">{{ field.subTitle }}</span>
        </div>

      </div>
      <label class="switch switch-sm">
        <input type="checkbox" v-model="internalValue" class="sr-only peer" />
        <!-- <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-all after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div> -->
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    modelValue: Boolean,
    field: Object,
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const internalValue = ref(props.modelValue || false)
  
  watch(() => props.modelValue, (val) => {
    internalValue.value = val
  })
  
  watch(internalValue, (val) => {
    emit('update:modelValue', val)
  })
  </script>

  <style lang="css" scoped>
  .switch input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpath d='M20 6L9 17l-5-5'/%3E%3C/svg%3E");
  background-size: 12px 12px; /* ปรับขนาดเครื่องหมายถูก */
  background-position: center;
  background-repeat: no-repeat;
}
  </style>