<template>
  <div class="relative w-full flex flex-col items-center justify-center">
    <label v-if="!imageData" class="cursor-pointer">
      <input type="file" accept="image/*" class="hidden" @change="handleFileChange" />
      <img :src="placeholderImage" alt="Placeholder"  :class="[`max-w-[${field.imageWidth}]`]" class="rounded-xl" />
    </label>

    <div v-else class="relative">
      <img :src="imageData" alt="Preview" :class="[`max-w-[${field.imageWidth}]`]" class=" rounded-xl" />
     
      <div @click="confirmDelete" class="absolute top-[-10px] right-[-10px]">
        <div  class="w-10 h-10 rounded-full border border-red-500 flex items-center justify-center 
                    bg-white shadow-md
                    transition-all duration-200 ease-in-out 
                    hover:-translate-y-1 
                    hover:drop-shadow-[0_8px_18px_rgba(0,0,0,0.2)] 
                    active:scale-95 active:drop-shadow-none cursor-pointer">
          <i class="ki-filled ki-trash text-xl text-red-500 transition-colors duration-200 hover:text-red-600"></i>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import Swal from 'sweetalert2'
  
  useHead({
  
  link: [
  {
    rel: 'stylesheet',
    href: 'icons/styles.bundle.css', // Point to the file in the 'public' folder
  },
  {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
 ],
});

  const props = defineProps({
    modelValue: String,
    field: Object
  })
  const emit = defineEmits(['update:modelValue'])
  
  const imageData = ref(props.modelValue || '')
  const placeholderImage = '/media/images/default_image.png'
  
  function handleFileChange(e) {
    const file = e.target.files[0]
    if (!file) return
  
    const reader = new FileReader()
    reader.onload = () => {
      imageData.value = reader.result
      emit('update:modelValue', reader.result)
    }
    reader.readAsDataURL(file)
  }
  
  function confirmDelete() {
  Swal.fire({
  icon: 'warning',
  title: 'ต้องการลบรูปใช่หรือไม่',
  showCancelButton: true,
  confirmButtonText: 'ลบรูป',
  cancelButtonText: 'ยกเลิก',
  customClass: {
    popup: 'font-mitr', // 👈 เพิ่มตรงนี้เพื่อให้ใช้ font-mitr
    confirmButton: 'swal-confirm-btn',
    cancelButton: 'swal-cancel-btn'
  },
  buttonsStyling: false // ปิด default style ของ SweetAlert2 เพื่อใช้ custom class เต็มที่
})
    .then((result) => {
      if (result.isConfirmed) {
        removeImage()
      }
    })
  }
  
  function removeImage() {
    imageData.value = ''
    emit('update:modelValue', '')
  }
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.2s;
  }
  </style>