<template>
  <div>
    <FormCustomElePlus :formGroup="formGroup"></FormCustomElePlus>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Form1',
  layout: 'salepie-admin'
});



const formGroup = [
  {
    type: "text",
    param: "name",
    required: true,
    label: "ชื่อร้านค้า",
    width: "full",
    placeholder: "ชื่อร้านค้า",
  },
  {
    type: "textarea",
    param: "description",
    required: true,
    label: "รายละเอียดร้านค้า",
    width: "full",
    placeholder: "คำอธิบาย รายละเอียดร้านค้า",
  },
  {
    type: "review2",
    param: "credit",
    required: true,
    label: "เครดิตคูปอง",
    width: "half",
  },
  {
    type: "review2",
    param: "smsCredit",
    label: "เครดิต SMS",
    width: "half",
  },
  {
    type: "tag",
    param: "redeemCode",
    label: "รหัสสำหรับ redeem coupon",
    width: "full",
    style: { 'padding-top': '40px' },
  }
]


</script>

<style scoped>
/* Your styles here */
</style>