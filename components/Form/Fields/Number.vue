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

    <input
      type="text"
      class="font-mitr py-1.5 px-2 w-full border text-sm rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-neutral-900 dark:text-neutral-200"
      :class="{ 'border-red-500': error, 'border-gray-300': !error }"
      v-model="displayValue"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />

    <div class="flex justify-between mt-1">
      <p v-if="error" class="text-xs text-red-500">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  field: Object
})

const emit = defineEmits(['update:modelValue'])

// ค่าจริงที่เก็บใน form (ไม่มี comma)
const internalValue = ref(props.modelValue || '')

// ค่าที่โชว์ใน input (มี comma เฉพาะตอน blur)
const displayValue = ref(formatWithComma(props.modelValue || ''))

const error = ref('')

// คำนวณจำนวนตัวอักษรที่เหลือ
const remainingDigits = computed(() => {
  return props.field.max ? props.field.max - internalValue.value.toString().length : null
})

// เวลา input (พิมพ์)
function onInput(event) {
  const raw = event.target.value.replace(/,/g, '')   // ลบ comma ออก
  if (!isNaN(raw)) {
    internalValue.value = raw
    displayValue.value = raw
    emit('update:modelValue', raw)
  }
}

// เวลา blur (ออกจากช่อง) → format comma
function onBlur() {
  displayValue.value = formatWithComma(internalValue.value)
  validate()
}

// เวลา focus (เข้าไปพิมพ์) → ลบ comma ออก
function onFocus() {
  displayValue.value = internalValue.value
}

// Function แปลงตัวเลขเป็นมี comma
function formatWithComma(val) {
  if (!val) return ''
  const num = parseFloat(val)
  if (isNaN(num)) return val
  return num.toLocaleString('en-US')
}

// Validation
function validate() {
  error.value = ''
  if (props.field.required && !internalValue.value) {
    error.value = 'จำเป็นต้องกรอกข้อมูล'
    return false
  }
  if (props.field.regex) {
    const pattern = new RegExp(props.field.regex)
    if (!pattern.test(internalValue.value)) {
      error.value = 'รูปแบบไม่ถูกต้อง'
      return false
    }
  }
}

// expose validate ให้ form parent เรียก
defineExpose({ validate })
</script>
