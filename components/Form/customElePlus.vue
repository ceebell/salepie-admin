<template>
    <div>
        <main id="content" class="min-h-screen  custom-scrollbar lg:ps-[260px] pt-[59px] pb-[24px] sm:pb-[24px] ">
            <div class="custom-scrollbar max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <div class="py-2 sm:pb-0 sm:pt-5 space-y-5">
                    <!-- Card -->
                    <div class="p-5 space-y-4 flex flex-col bg-white border border-stone-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
                
                        <el-form :model="form" label-width="120px">
                            <div v-for="(field, index) in formGroup" :key="index" class="mb-4" :class="field.width === 'half' ? 'w-1/2 pr-2 inline-block' : 'w-full'">
                            <!-- Text Input -->
                            <el-form-item v-if="field.type === 'text'" :label="field.label" :required="field.required">
                                <el-input v-model="form[field.param]" :placeholder="field.placeholder" />
                            </el-form-item>
                        
                            <!-- Label (display only) -->
                            <el-form-item v-else-if="field.type === 'label'" :label="field.label">
                                <span>{{ form[field.param] }}</span>
                            </el-form-item>
                        
                            <!-- Textarea -->
                            <el-form-item v-else-if="field.type === 'textarea'" :label="field.label" :required="field.required">
                                <el-input type="textarea" v-model="form[field.param]" :placeholder="field.placeholder" :maxlength="field.max" show-word-limit />
                            </el-form-item>
                        
                            <!-- Number -->
                            <el-form-item v-else-if="field.type === 'number'" :label="field.label" :required="field.required">
                                <el-input-number v-model="form[field.param]" :min="field.min || 0" />
                            </el-form-item>
                        
                            <!-- Select -->
                            <el-form-item v-else-if="field.type === 'select'" :label="field.label" :required="field.required">
                                <el-select v-model="form[field.param]" placeholder="กรุณาเลือก">
                                <el-option v-for="(opt, i) in field.option" :key="i" :label="opt.display" :value="opt.value" />
                                </el-select>
                            </el-form-item>
                        
                            <!-- Datetime -->
                            <el-form-item v-else-if="field.type === 'datetime'" :label="field.label" :required="field.required">
                                <el-date-picker v-model="form[field.param]" type="datetime" placeholder="เลือกวันเวลา" />
                            </el-form-item>

                            <!-- Custom type: review2 -->
                            <el-form-item v-else-if="field.type === 'review2'" :label="field.label" :required="field.required">
                                <el-input-number v-model="form[field.param]" :min="0" />
                            </el-form-item>
                    
                            <!-- Custom type: tag -->
                            <el-form-item v-else-if="field.type === 'tag'" :label="field.label">
                                <el-select
                                    v-model="form[field.param]"
                                    multiple
                                    allow-create
                                    default-first-option
                                    placeholder="เพิ่ม tag หรือรหัส"
                                    class="w-full"
                                    >
                                </el-select>
                            </el-form-item>
                            <!-- Upload Button -->
                            <el-form-item v-else-if="field.type === 'uploadbutton'" :label="field.label">
                                <el-upload
                                class="upload-demo"
                                action="#"
                                :auto-upload="false"
                                :limit="1"
                                :show-file-list="false"
                                >
                                <el-button :type="field.buttonColor || 'primary'">อัปโหลด</el-button>
                                </el-upload>
                            </el-form-item>
                        
                            <!-- Upload with Default Image -->
                            <el-form-item v-else-if="field.type === 'uploadDefaultImage'" :label="field.label">
                                <el-upload
                                class="upload-demo"
                                action="#"
                                :auto-upload="false"
                                :limit="1"
                                :show-file-list="false"
                                >
                                <el-image :src="field.defaultImage" class="w-24 h-24 mb-2" fit="cover" />
                                <el-button>อัปโหลดใหม่</el-button>
                                </el-upload>
                            </el-form-item>
                            </div>
                            </el-form>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
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

const formGroup = [
  {
    type: "text",
    param: "shopName",
    required: true,
    min: 0,
    max: 100,
    label: "ชื่อร้าน",
    width: "half",
    mapTo: "t1",
    placeholder: "ชื่อร้าน",
  },
  {
    type: "text",
    param: "shopName",
    required: true,
    min: 0,
    max: 100,
    label: "ชื่อร้าน",
    width: "half",
    mapTo: "t1",
    placeholder: "ชื่อร้าน",
  },
  {
    type: "label",
    param: "shopName",
    required: true,
    label: "ชื่อร้าน",
    width: "full",
    mapTo: "t1",
  },
  {
    type: "textarea",
    param: "shopDescription",
    required: true,
    min: 0,
    max: 500,
    label: "คำอธิบาย",
    width: "full",
    mapTo: "t2",
    placeholder: "คำอธิบาย",
  },
  {
    type: "number",
    param: "credit",
    required: true,
    label: "เครดิตคูปอง",
    width: "half",
    mapTo: "t5",
  },
  {
    type: "select",
    param: "packageSize",
    required: false,
    label: "Package Size",
    width: "half",
    mapTo: "t3",
    dataType: "string",
    option: [
      { display: "เลือก package size", value: "" },
      { display: "เริ่มต้น (S)", value: "s" },
      { display: "กลาง (M)", value: "m" },
      { display: "ใหญ่ (L)", value: "l" },
    ]
  },
  {
    type: "datetime",
    param: "packageStart",
    required: true,
    label: "วันเริ่ม package",
    width: "half",
    mapTo: "t3",
  },
  {
    type: "uploadbutton",
    param: "dataimage",
    required: false,
    label: "อัพโหลด image",
    width: "half",
    mapTo: "t5",
  },
  {
    type: "uploadbutton",
    param: "dataimage",
    required: false,
    label: "ภาพที่ 2 image",
    width: "half",
    mapTo: "t5",
    buttonColor: "dark"
  },
  {
    type: "uploadDefaultImage",
    param: "dataimage",
    defaultImage: "/public/media/0mine/defaultImage.png",
    required: false,
    label: "อัพโหลด image",
    width: "half",
    mapTo: "t5",
  },
  {
                type: "text",
                param: "name",
                required: true,
                min: 0,
                max: 100,
                // regex: "",
                label: "ชื่อร้านค้า",
                width: "full" , //*** {full, half, 3 , 4}
                placeholder: "ชื่อร้านค้า",
                // icon: ["flaticon2-search-1", "text-muted"],
              },
              {
                type: "textarea",
                param: "description",
                required: true,
                min: 0,
                max: 500,
                // regex: "",
                label: "รายละเอียดร้านค้า",
                width: "full" , //*** {full, half, 3 , 4}
                placeholder: "คำอธิบาย รายละเอียดร้านค้า",
                // icon: ["flaticon2-search-1", "text-muted"],
              },


              {
                type: "review2",
                param: "credit",
                required: true,
                // regex: "",
                label: "เครดิตคูปอง",
                width: "half" , //*** {full, half}
                mapTo: "credit",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              {
                type: "review2",
                param: "smsCredit",
                // required: true,
                // regex: "",
                label: "เครดิต SMS",
                width: "half" , //*** {full, half, 3 , 4} 
                // mapTo: "credit",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              {
                type: "tag",
                param: "redeemCode",
                // required: true,
                // regex: "",
                label: "รหัสสำหรับ redeem coupon",
                width: "full" , //*** {full, half, 3 , 4}
                style: {'padding-top': '40px'},
                // mapTo: "name",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              //  {
              //   type: "text",
              //   param: "smsSender",
              //   // required: true,
              //   // regex: "",
              //   label: "ชื่อผู้ส่ง SMS",
              //   width: "full" , //*** {full, half, 3 , 4}
              //   // style: {'padding-top': '40px'},
              //   // mapTo: "name",
              //   // placeholder: "ชื่อร้าน",
              //   // icon: ["flaticon2-search-1", "text-muted"],
              // },

              // {
              //   type: "text",
              //   param: "smsContent",
              //   // required: true,
              //   // regex: "",
              //   label: "ข้อความสำหรับ SMS",
              //   width: "full" , //*** {full, half, 3 , 4}
              //   // style: {'padding-top': '40px'},
              //   // mapTo: "name",
              //   // placeholder: "ชื่อร้าน",
              //   // icon: ["flaticon2-search-1", "text-muted"],
              // },

]

const form = reactive({})
</script>

<style scoped>
.upload-demo {
  display: flex;
  flex-direction: column;
}
</style>