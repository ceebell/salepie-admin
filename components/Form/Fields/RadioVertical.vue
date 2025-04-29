<template>
    <div class="w-full">
        <label
        v-if="field.label"
        :class="[
            'font-mitr block mb-1 text-sm font-medium',
            error ? 'text-red-500' : 'text-stone-800 dark:text-white'
        ]"
      >
        {{ field.label }} <span v-if="field.required" class="text-red-500 text-bold text-[0.7rem]">[required]</span>
      </label> 
  
      <div class="flex flex-col items-start gap-3.5 mt-2">
        <label
          v-for="(opt, index) in field.option"
          :key="index"
          class="radio-group"
        >
          <input
            class="radio"
            type="radio"
            :name="field.param"
            :value="opt.value"
            v-model="internalValue"
          />
          <span class="radio-label radio-label-sm">{{ opt.display }}</span>
        </label>
      </div>
  
      <p v-if="error" class="text-xs text-red-500 mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    field: Object
  })
  
  const emit = defineEmits(['update:modelValue'])
  const internalValue = ref(props.modelValue || '')
  const error = ref('')
  
  watch(internalValue, (val) => {
    emit('update:modelValue', val)
    validate()
  })
  
  function validate() {
    error.value = ''
    if (props.field.required && !internalValue.value) {
      error.value = 'จำเป็นต้องเลือกตัวเลือก'
      return false
    }
    return true
  }
  
  defineExpose({ validate })
  </script>
  
  <style scoped>
  .radio-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .radio {
    accent-color: #3b82f6;
  }
  .radio-label-sm {
    font-size: 0.875rem;
    color: #374151;
    font-family: 'Mitr', sans-serif;
  }
  </style>
  