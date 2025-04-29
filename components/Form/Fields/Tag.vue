<template>
    <div>
      <label :for="field.param" class="block mb-2 text-sm font-medium text-stone-800 dark:text-white">
        {{ field.label }}
      </label>
      <input
        type="text"
        :id="field.param"
        class="font-mitr py-1.5 px-3 block w-full border-stone-200 rounded-lg sm:text-sm placeholder:text-stone-400
               focus:border-green-500 focus:ring-green-500 dark:bg-transparent dark:border-neutral-700
               dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <p class="mt-1.5 text-xs text-stone-500 dark:text-neutral-500">
        เพิ่มหลายรหัสคูปองได้ โดยคั่นด้วยคอมม่า
      </p>
    </div>
  </template>
  
  <script setup>
  defineProps({ modelValue: String, field: Object })
  defineEmits(['update:modelValue'])
  </script>
  