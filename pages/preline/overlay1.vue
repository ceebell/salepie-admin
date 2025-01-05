<template>
<div class="flex flex-grow">
   <button type="button" class="mx-auto py-3 my-8 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"  aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal">
            Open modal
    </button>
    <ModalPrelineModal></ModalPrelineModal>
</div>
</template>

<script setup>
import {ref} from 'vue'

const modalVisible  = ref(false)
function toggleModal() {
  modalVisible.value = !modalVisible.value;
}

</script>