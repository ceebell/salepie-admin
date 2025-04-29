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
<PrelnCommerceUserTable :objStructure="objectStructure"  :dataItems="dataItems" ></PrelnCommerceUserTable>
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



objectStructure.value = [
    {
    datatype: 'text',
    field: 'id', 
    mapping: 'id',
    defaultValue: '',
  },
  // {
  //   datatype: 'image',
  //   field: 'image', 
  //   label: 'Image',
  //   mapping: 'pic_url',
  //   defaultValue: '',
  // },

  {
    datatype: 'image_text_1',
    imageField: 'image', 
    imageMapping: 'image',
    imageDefaultValue: '',
    textField: 'name', 
    textMapping: 'name',
    textDefaultValue: '',
    subtextField: 'email', 
    subtextMapping: 'email',
    subtextDefaultValue: '',
    label: 'User name',
  },

  

  {
    datatype: 'text_list',
    label: 'Products',
    field: 'products', 
    mapping: 'products',
    defaultValue: [],
  },

  {
    datatype: 'switch',
    label: 'Enforce 2 FA',
    field: 'enforce2FA', 
    mapping: 'enforce2FA',
    defaultValue: false,
  },

  {
    datatype: 'text_subtext_1',
    textField: 'type', 
    textMapping: 'license.type',
    textDefaultValue: '',
    subtextField: 'duration', 
    subtextMapping: 'license.duration',
    subtextDefaultValue: '',
    label: 'License',
  },

  // { 
  //   field: 'name', 
  //   datatype: 'text',
  //   label: 'Product',
  //   mapping: 'title',
  //   defaultValue: 'ไม่ระบุ',
  // },
  // { 
  //   field: 'sku', 
  //   datatype: 'text',
  //   label: 'SKU',
  //   mapping: 'product_sku',
  //   defaultValue: 'ไม่ระบุ',
  // },
  // { 
  //   field: 'category',
  //   datatype: 'text', 
  //   label: 'category',
  //   mapping: 'cat_name',
  //   defaultValue: 'ไม่ระบุ',
  // },
  // { 
  //   field: 'price',
  //   datatype: 'money', 
  //   label: 'ราคา',
  //   mapping: 'list_price',
  //   defaultValue: 0,
  // },
  // { 
  //   field: 'inStock',
  //   datatype: 'number', 
  //   label: 'inStock',
  //   mapping: 'is_in_stock',
  //   defaultValue: 0,
  // },
  
  // { 
  //   field: 'actions',
  //   datatype: 'action_button', 
  //   label: '',
  //   mapping: 'actions_data',
  //   defaultValue: '',
  // },
  
];

const transformedData = transformRecords(apiRecords.value, objectStructure.value);

interface SubscriberRecord {
  id: number
  name: string
  email: string
  image: string
  products: string[]
  license: {
    type: string
    duration: string
  }
  lastPayment: string
  enforce2FA: boolean
  invoiceLink: string
}

const dataItems = ref<SubscriberRecord[]>([
  {
    id: 1,
    name: "Tyler Hero",
    email: "tyler.hero@gmail.com",
    image: "/media/avatars/300-3.png",
    products: ["NFT", "Artwork", "Widget"],
    license: {
      type: "Premium",
      duration: "4 months left"
    },
    lastPayment: "6 Aug, 2024",
    enforce2FA: true,
    invoiceLink: ""
  },
  {
    id: 2,
    name: "Esther Howard",
    email: "esther.howard@gmail.com",
    image: "/media/avatars/300-1.png",
    products: ["Design", "Template"],
    license: {
      type: "Trial",
      duration: "16 days left"
    },
    lastPayment: "21 Apr, 2024",
    enforce2FA: false,
    invoiceLink: ""
  },
  {
    id: 3,
    name: "Jacob Jones",
    email: "jacob.jones@gmail.com",
    image: "/media/avatars/300-11.png",
    products: ["App", "Plugin"],
    license: {
      type: "Premium",
      duration: "2 months left"
    },
    lastPayment: "14 Mar, 2024",
    enforce2FA: true,
    invoiceLink: ""
  }
]);

</script>

<style scoped>

</style>~/types/TableStructure