<template>
<div class="bg-gray-50 dark:bg-neutral-900 ">
 <!-- ========== HEADER ========== -->
 <PrelnTopNav></PrelnTopNav>
<!-- ========== END HEADER ========== -->

<!-- ========== MAIN SIDEBAR ========== -->
<PrelnAside></PrelnAside>
<!-- ========== END MAIN SIDEBAR ========== -->

<SidebarFilter></SidebarFilter>

<!-- ========== MAIN CONTENT ========== -->
<PrelnCommerceCommonTable :objStructure="objectStructure"></PrelnCommerceCommonTable>
<!-- ========== END MAIN CONTENT ========== -->

<!-- ========== FOOTER ========== -->
<!-- <PrelnFooter></PrelnFooter> -->
<!-- ========== END FOOTER ========== -->
</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { Icon } from '@iconify/vue';

import { useTransform } from '@/composables/useTransform';
import type { TableStructure } from '@/models/TableStructure'; // นำเข้า interface

const { transformRecords } = useTransform();

definePageMeta({
  title: 'Dashboard',
  layout: 'salepie-admin'
});

const apiRecords = ref<any[]>([]);
const objectStructure = ref<TableStructure[]>([]);
const paginatedRecords= ref([]);

interface FetchData {
   data: any[]; // แทน any ด้วยชนิดข้อมูลที่ถูกต้องของ API 
   page: number; // หมายเลขหน้าปัจจุบัน
   page_size: number ; // จำนวนรายการต่อหน้า
   total_items: number ;
   total_pages: number ;
}

const records = ref([]);


  objectStructure.value = [
    {
    datatype: 'text',
    field: 'id', 
    mapping: 'prod_id',
    defaultValue: '',
  },
  {
    datatype: 'image',
    field: 'image', 
    label: 'Image',
    mapping: 'pic_url',
    defaultValue: '',
  },
  { 
    field: 'name', 
    datatype: 'text',
    label: 'Product',
    mapping: 'title',
    defaultValue: 'ไม่ระบุ',
  },
  { 
    field: 'sku', 
    datatype: 'text',
    label: 'SKU',
    mapping: 'product_sku',
    defaultValue: 'ไม่ระบุ',
  },
  { 
    field: 'category',
    datatype: 'text', 
    label: 'category',
    mapping: 'cat_name',
    defaultValue: 'ไม่ระบุ',
  },
  { 
    field: 'price',
    datatype: 'money', 
    label: 'ราคา',
    mapping: 'list_price',
    defaultValue: 0,
  },
  { 
    field: 'inStock',
    datatype: 'number', 
    label: 'inStock',
    mapping: 'is_in_stock',
    defaultValue: 0,
  },
  { 
    field: 'inStock',
    datatype: 'number', 
    label: 'inStock',
    mapping: 'is_in_stock',
    defaultValue: 0,
  },
  {
    datatype: 'text',
    field: 'color', 
    label: 'Color',
    mapping: 'color',
    defaultValue: '',
  },
  { 
    field: 'actions',
    datatype: 'action_button', 
    label: '',
    mapping: 'actions_data',
    defaultValue: '',
  },
  
];

const transformedData = transformRecords(apiRecords.value, objectStructure.value);



</script>

<style scoped>

</style>~/types/TableStructure