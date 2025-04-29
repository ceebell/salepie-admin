<template>
    <div class="w-full mb-4">
      <div class="flex flex-col gap-5">
        <div v-if="field.desc" class="text-2sm text-gray-800">
          {{ field.desc }}
        </div>
  
        <label class="checkbox-group" :class="error ? 'text-red-500' : ''">
          <input
            class="checkbox checkbox-sm"
            type="checkbox"
            :name="field.param"
            v-model="internalValue"
            @blur="validate"
          />
          <span class="checkbox-label">
            {{ field.label }}
            <span
              v-if="field.required"
              class="text-red-500 font-bold text-[0.75rem]"
            >
              [required]
            </span>
          </span>
        </label>
  
        <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
      </div>
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
  const error = ref('')
  
  watch(internalValue, (val) => {
    emit('update:modelValue', val)
    validate()
  })
  
  function validate() {
    error.value = ''
    if (props.field.required && !internalValue.value) {
      error.value = 'You must confirm to proceed'
      return false
    }
    return true
  }
  
  defineExpose({ validate })
  </script>
  