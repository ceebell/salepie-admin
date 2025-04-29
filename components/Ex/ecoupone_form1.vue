<template>
  <div>

  </div>
</template>

<script setup lang="ts">
const formDetail =  {
          fromHeader: "Customer Info",
          formSubHeader: "ข้อมูลลูกค้าทั้งหมด",
          formButton:[
            {
              label: "บันทึก",
              color: "success",
              style: {'width': '150px'},
              action: "submit"
            }
          ],
          formGroup:  [
              {
                type: "text",
                param: "shopName",
                required: true,
                min: 0,
                max: 100,
                // regex: "",
                label: "ชื่อร้าน",
                width: "full" , //*** {full, half}
                mapTo: "t1",
                placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              {
                type: "label",
                param: "shopName",
                required: true,
                label: "ชื่อร้าน",
                width: "full" , //*** {full, half}
                mapTo: "t1",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              {
                type: "textarea",
                param: "shopDescription",
                required: true,
                min: 0,
                max: 500,
                // regex: "",
                label: "คำอธิบาย",
                width: "full" , //*** {full, half}
                mapTo: "t2",
                placeholder: "คำอธิบาย",
                // icon: ["flaticon2-search-1", "text-muted"],
              },


              {
                type: "number",
                param: "credit",
                required: true,
                // regex: "",
                label: "เครดิตคูปอง",
                width: "half" , //*** {full, half}
                mapTo: "t5",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },
              { 
                type: "select",
                param: "packageSize",
                required: false,
                label: "Package Size",
                width: "half" , //*** {full, half}

                mapTo: "t3",
                dataType: "string",

                option: [
                  {
                    display: "เลือก package size",
                    value: ""
                  },
                  {
                    display: "เริ่มต้น (S)",
                    value: "s"
                  },
                  {
                    display: "กลาง (M)",
                    value: "m"
                  },
                  {
                    display: "ใหญ่ (L)",
                    value: "l"
                  },
                 

                ]
              },
              {
                type: "datetime",
                param: "packageStart",
                required: true,
                // regex: "",
                label: "วันเริ่ม package",
                width: "half" , //*** {full, half}
                mapTo: "t3",
                // icon: ["flaticon2-search-1", "text-muted"],
              },

              {
                type: "uploadbutton",
                param: "dataimage",
                required: false,
                // regex: "",
                label: "อัพโหลด image",
                width: "half" , //*** {full, half}
                mapTo: "t5",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },
              {
                type: "uploadbutton",
                param: "dataimage",
                required: false,
                buttonStyle: { },
                buttonColor: "dark",
                // regex: "",
                label: "ภาพที่ 2 image",
                width: "half" , //*** {full, half}
                mapTo: "t5",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },
               {
                type: "uploadDefaultImage",
                param: "dataimage",
                defaultImage: "/public/media/0mine/defaultImage.png",
                required: false,
                // regex: "",
                label: "อัพโหลด image",
                width: "half" , //*** {full, half}
                mapTo: "t5",
                // placeholder: "ชื่อร้าน",
                // icon: ["flaticon2-search-1", "text-muted"],
              },
          ]
          
      }
</script>

<style scoped>
/* Your styles here */
</style>