<template>
  <main id="content" class="min-h-screen custom-scrollbar lg:ps-[260px] pt-[59px] pb-[24px] sm:pb-[24px] ">
    <div class="custom-scrollbar max-w-[85rem] p-6 sm:px-6 lg:px-8 mx-auto ">
          
          <!-- Begin: Container Header 1 -->
          <UIContainerHeader>
            <template #title>Settings - With Sidebar</template>
            <template #subtitle>Intuitive Access to In-Depth Customization</template>
            <template #actions>
              <a class="btn btn-sm btn-light" href="#">Public Profile</a>
              <a class="btn btn-sm btn-primary" href="#">Get Started</a>
              <a class="btn btn-sm btn-success" href="#">Submit</a>
            </template>
          </UIContainerHeader>
          <!-- End: Container Header 1  -->
          
          <!-- Begin : Card -->
          <UICardContainer1>
            <template #header>
              <h3 class="card-title">Delete Account</h3>
            </template>
            <template #body>
              <FormCustomPreln v-model="form2" :formGroup="formGroup" ref="formCustomPrelnRef" />
            </template>
          </UICardContainer1>
          <!-- End : Card -->

          <button
          class="btn btn-primary mt-4 sm:w-1/3 text-center"
          @click="submitForm2()"
        >
          Submit
      </button>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'PrelineForm',
  layout: 'salepie-admin'
});

const props = defineProps({
  
  objStructure: {
    type: Array
  }
});

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


const form2 = ref({})
const formCustomPrelnRef = ref() // ✅ ref ตัวนี้เอาไว้จับ customPreln

const formGroup = [
 
  {
    type: "singleImage",
    param: "productImage3",
    required: true,
    label: "รูปสินค้า",
   width: "full",
    imageWidth: "200px",
    // default: "/media/images/default_image.png",
  },
 
  {
    type: "switch_card",
    param: "theSetting.setting1",
    label: "Email Notifications",
    subTitle: "Tailor Your Email Preferences.",
    width: "1/2",
  },
  {
    type: "switch_card",
    param: "theSetting.setting2",
    label: "Email Notifications",
    subTitle: "Tailor Your Email Preferences.",
    width: "1/2",
  },
  {
    type: "text",
    param: "name.nameEN",
    required: true,
    label: "Name",
    width: "full",
    placeholder: "Shop Name",
  },{
    type: "text",
    param: "name.nameTH",
    required: true,
    label: "ชื่อร้านค้า",
    width: "full",
    placeholder: "ชื่อร้านค้า",
  },
//   {
//   type: "text",
//   param: "username",
//   // required: true,
//   max: 30,
//   regex: "^[\\w.-]+@[\\w.-]+\\.\\w+$",
//   label: "อีเมล",
//   width: "full",
//   placeholder: "อีเมล"
// },
  {
    type: "textarea",
    param: "description",
    // required: true,
    max: 50,
    label: "รายละเอียดร้านค้า",
    width: "full",
    placeholder: "คำอธิบาย รายละเอียดร้านค้า",
  },
  {
      type: "select2",
      param: "assignee",
      newLine: true,
      // required: true,
      label: "Assignee",
      width: "full",
      placeholder: "Staff Assigned",
      option: [
        {
          display: "Feature ⚡️",
          value: "issueType1",
          data: {
            // icon: "<img class='inline-block rounded-md' src='https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?...' alt='Avatar'>"
          }
        },
        {
          display: "Bug 🐞",
          value: "issueType2",
          // data: {
          //   // icon: "<img class='inline-block rounded-md' src='...'>"
          // }
        },
        {
          display: "Entropy 👜",
          value: "issueType999",
          // data: {
          //   // icon: "<img class='inline-block rounded-md' src='...'>"
          // }
        },
        {
          display: "Clothing 👚",
          value: "issueType67",
          // data: {
          //   // icon: "<img class='inline-block rounded-md' src='...'>"
          // }
        },
        {
          display: "Bicycle 🚵🏻‍♂️",
          value: "issueType3433",
          // data: {
          //   // icon: "<img class='inline-block rounded-md' src='...'>"
          // }
        },
        {
          display: "Children 👼🏼",
          value: "issueType7867",
          // data: {
          //   // icon: "<img class='inline-block rounded-md' src='...'>"
          // }
        },
        {
          display: "Support 🙏",
          value: "issueType3",
          // data: {
          //   icon: "<span class='flex shrink-0 justify-center items-center size-5 bg-gray-100 text-gray-700 text-[10px] font-medium uppercase rounded-md  dark:bg-neutral-700 dark:text-neutral-300'>O</span>"
          // }
        },
       
      ]
    },

  {
    type: "number",
    param: "credit",
    // required: true,
    newLine: true,
    label: "เครดิตคูปอง",
    width: "1/2",
  },
  {
    type: "number",
    param: "smsCredit",
    label: "เครดิต SMS",
    width: "1/2",
  },
  // {
  //   type: "checkboxList",
  //   param: "attributes",
  //   label: "Attributes",
  //   width: "1/3",
  //   option: [
  //           {
  //             display: "Show list names",
  //             desc : "See the name next to each icon",
  //             value: false,
             
  //           },
  //           {
  //             display: "Show linked task names",
  //             desc : "Show task names next to ids for linked project tasks.",
  //             value: false,
             
  //           }
           
  //     ],
  // },
  {
    type: "checkbox",
    param: "confirmDelete",
    label: "Delete Account",
    desc: "We regret to see you leave. Confirm account deletion below. Your data will be permanently removed. Thank you for being part of our community. Please check our Setup Guidelines if you still wish continue.",
    width: "2/3"
   
  },
  
 
 
  {
    type: "radio_vertical",
    param: "notification",
    newLine: true,
    // required: true,
    label: "Desktop notifications",
    width: "1/3",
    option: [
            {
              display: "⚡️ All new messages (Recommended)",
              value: "1",
             
            },
            {
              display: "🐞 Direct @mentions",
              value: "2",
             
            },
            {
              display: "👜 Disabled",
              value: "3",
             
            },
      ],
  },
  
]

watch(form2, (newValue) => {
  console.log('Form2 data:', newValue)
})

const submitForm2 = () => {
  const isValid = formCustomPrelnRef.value?.validateAllFields()
  if (isValid) {
    console.log('✅ All fields valid:', form2.value)
  } else {
    console.warn('❌ Validation failed')
  }

  console.log('✅✅✅ All fields valid:', form2.value)

}


</script>

<style scoped>
/* Your styles here */
</style>