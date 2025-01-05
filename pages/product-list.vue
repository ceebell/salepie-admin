<template>
<div class="bg-gray-50 dark:bg-neutral-900">
 <!-- ========== HEADER ========== -->
 <PrelnTopNav></PrelnTopNav>
<!-- ========== END HEADER ========== -->

<!-- ========== MAIN SIDEBAR ========== -->
<PrelnAside></PrelnAside>
<!-- ========== END MAIN SIDEBAR ========== -->

<!-- ========== MAIN CONTENT ========== -->
<PrelnCommerceProductTable></PrelnCommerceProductTable>
<!-- ========== END MAIN CONTENT ========== -->

<!-- ========== FOOTER ========== -->
<PrelnFooter></PrelnFooter>
<!-- ========== END FOOTER ========== -->
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';

definePageMeta({
  title: 'Dashboard',
  layout: 'salepie-admin'
});

</script>

<style scoped>
/* Your styles here */
</style>