<template>
<div>
      <div class="custom-scrollbar  px-4 sm:px-6 lg:px-8 mx-auto">
                <!-- Begin: Card -->
                  <!-- {{ groupedRows }} -->
                  <!-- Start: FORM GROUP -->
                      <div v-for="(row, rowIndex) in groupedRows" :key="'row-' + rowIndex" class="flex flex-wrap -mx-2">
                        <div
                          v-for="(field, index) in row"
                          :key="field.param || index"
                          :class="`${getColumnClass(field.width)} px-2 mb-4`"
                          :style="field.style || {}"
                        >

                          <FormFieldsTextInput v-if="field.type === 'text'" v-model="modelBinds[field.param]" :field="field" :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsTextarea  v-else-if="field.type === 'textarea'" v-model="modelBinds[field.param]" :field="field" :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsNumber    v-else-if="field.type === 'number'" v-model="modelBinds[field.param]" :field="field"  :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsTag       v-else-if="field.type === 'tag'" v-model="modelBinds[field.param]" :field="field"  :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsSelect2   v-else-if="field.type === 'select2'" v-model="modelBinds[field.param]" :field="field"  :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsSwitchCard  v-else-if="field.type === 'switch_card'" v-model="modelBinds[field.param]" :field="field" :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsRadioVertical   v-else-if="field.type === 'radio_vertical'" v-model="modelBinds[field.param]" :field="field"  :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsCheckbox   v-else-if="field.type === 'checkbox'" v-model="modelBinds[field.param]" :field="field"  :ref="el => (fieldRefs[field.param] = el)" />
                          <FormFieldsSingleImageUpload v-else-if="field.type === 'singleImage'" v-model="modelBinds[field.param]" :field="field" :ref="el => (fieldRefs[field.param] = el)" />

                          <!-- OTHERWISE -->
                          <FormFieldsTextInput v-else  v-model="modelBinds[field.param]" :field="field" />
                          <!-- Render Form Field -->
                          


                        </div>
                      </div>
                  <!-- End: FROM GROUP -->
                            <button
                                class="btn btn-primary mt-4 sm:w-1/3 text-center"
                                @click="handleSubmit"
                              >
                                Submit
                            </button>
                <!-- End: Card -->
      </div>
</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, defineExpose } from 'vue'
import { useUI } from '@/composables/useUI';

const { getColumnClass, groupFormFieldsIntoRows } = useUI();

useHead({
  
  script: [
    { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
    { src: 'js/layouts/demo1.js', type: 'text/javascript', defer: true },
  ],
  link: [
  {
    rel: 'stylesheet',
    href: 'css/prelnmain.min.css', // Point to the file in the 'public' folder
  },
  {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
 ],
});


const props = defineProps({
  modelValue: Object,
  formGroup: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']) // ✅ เพิ่มตรงนี้



const formGroup = ref(props.formGroup)
const form = reactive({})
const fieldRefs = reactive({})



// ✅ ตอน mount หรือเมื่อ formGroup เปลี่ยน เราจะสร้าง modelBinds
const modelBinds = reactive({})


watch(form, (newForm) => {
  emit('update:modelValue', newForm) // ✅ เวลาข้อมูลใน form เปลี่ยน จะส่งกลับให้พ่อ
}, { deep: true }) // ต้องใช้ deep:true เพราะ form เป็น object หลายชั้น

watch(() => props.formGroup, (newVal) => {
  generateModelBinds(newVal)
  generateInitialForm(newVal)
}, { immediate: true })

function generateModelBinds(fields) {
  fields.forEach(field => {
    if (!modelBinds[field.param]) {
      modelBinds[field.param] = computed({
        get: () => getValue(form, field.param),  // ต้องใช้ getValue
        set: (val) => setValue(form, field.param, val) // ต้องใช้ setValue
      })
    }
  })
}

function generateInitialForm(fields) {
  fields.forEach(field => {
    const current = getValue(form, field.param) // ใช้ getValue ดูว่ามีอยู่ไหม
    if (current === undefined) {
      let initialValue
      if (field.type === 'checkbox' || field.type === 'switch_card' || field.type === 'switch') {
        initialValue = false
      } else if (field.type === 'singleImage' || field.type === 'image' || field.type === 'file'  || field.type === 'date' || field.type === 'datetime') {
        initialValue = null
      }  else if (field.type === 'number' ) {
        initialValue = 0
      }else if (field.type === 'select2') {  // ✅ เพิ่มตรงนี้
        initialValue = []
      }
      
      else {
        initialValue = ''
      }
      setValue(form, field.param, initialValue) // ใช้ setValue เท่านั้น
    }
  })
}

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

function setValue(obj: any, path: string, value: any) {
  const keys = path.split('.')
  const lastKey = keys.pop()

  const deepObj = keys.reduce((acc, key) => {
    if (!acc[key]) acc[key] = {}
    return acc[key]
  }, obj)

  if (lastKey) {
    deepObj[lastKey] = value
  }
}

function validateAllFields() {
  let isValid = true
  for (const key in fieldRefs) {
    if (fieldRefs[key]?.validate && typeof fieldRefs[key].validate === 'function') {
      const valid = fieldRefs[key].validate()
      if (!valid) isValid = false
    }
  }
  return isValid
}

// ✅ เปิดฟังก์ชัน validateAllFields ออกไปให้พ่อ (Parent) ใช้ได้
defineExpose({validateAllFields})



const handleSubmit = () => {
  let isValid = true
  for (const key in fieldRefs) {
    if (fieldRefs[key]?.validate && typeof fieldRefs[key].validate === 'function') {
      const valid = fieldRefs[key].validate()
      if (!valid) isValid = false
    }
  }

  if (isValid) {
    console.log('✅ All fields valid >>> :', form)
    // Do something like submit to API
  } else {
    console.warn('❌ Validation failed')
  }

  console.log('✅ FINALLLLL valid >>> :', form)

}


const groupedRows = computed(() => groupFormFieldsIntoRows(formGroup.value || []))

// watch(form, (newValue) => {
//   console.log('Updated grouped rows:', form)
// },{ deep: true })



</script>

<style scoped>

</style>