<template>
  <div class="min-h-screen">
<!-- ========== HEADER ========== -->
 <PrelnTopNav></PrelnTopNav>
 <!-- ========== END HEADER ========== -->
 
 <!-- ========== MAIN SIDEBAR ========== -->
 <PrelnAside></PrelnAside>
 <!-- ========== END MAIN SIDEBAR ========== -->

<!-- ========== MAIN CONTENT ========== -->
    <slot />
<!-- ========== END MAIN CONTENT ========== -->
 
<!-- ========== FOOTER ========== -->
<PrelnFooter></PrelnFooter>
<!-- ========== END FOOTER ========== -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
