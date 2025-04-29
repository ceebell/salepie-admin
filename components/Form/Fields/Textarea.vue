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

    <textarea
      class="font-mitr py-2 px-2 w-full border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:text-neutral-200"
      :class="{ 'border-red-500': error, 'border-gray-300': !error }"
      :placeholder="field.placeholder || ''"
      v-model="internalValue"
      :maxlength="field.max || null"
      @blur="validate"
    ></textarea>

    <div class="flex justify-between items-center mt-1">
      <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
      <p v-if="field.max" class="text-xs text-blue-500 ml-auto">
        Remaining: {{ remainingChars }} 
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  field: Object
})

const emit = defineEmits(['update:modelValue'])
const internalValue = ref(props.modelValue || '')
const error = ref('')

const remainingChars = computed(() => {
  return (props.field.max || 0) - internalValue.value.length
})

watch(internalValue, val => {
  emit('update:modelValue', val)
  validate()
})

function validate() {
  error.value = ''
  if (props.field.required && !internalValue.value.trim()) {
    error.value = 'จำเป็นต้องกรอกข้อมูล'
    return false
  }
  if (props.field.regex) {
    const pattern = new RegExp(props.field.regex)
    if (!pattern.test(internalValue.value)) {
      error.value = 'รูปแบบข้อมูลไม่ถูกต้อง'
      return false
    }
  }
}
// expose to parent
defineExpose({ validate })
</script>

<style scoped>
textarea {
  resize: vertical;
  min-height: 80px;
}
</style>