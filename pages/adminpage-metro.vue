<template>

</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';

useHead({
  script: [
    { src: 'js/core.bundle.js', type: 'text/javascript', defer: true },
    { src: 'js/layouts/demo1.js', type: 'text/javascript', defer: true },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
    // {
    //   rel: 'stylesheet',
    //   href: 'vendors/keenicons/styles.bundle.css', // Point to the file in the 'public' folder
    // },
  ],
});
</script>

<style scoped>
/* Your styles here */
</style>