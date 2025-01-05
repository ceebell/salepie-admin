<template>
    <div class="py-8">
      <div class="relative">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">ขายดีประจำสัปดาห์</h2>
          <a href="#" class="text-orange-600 hover:underline">ดูทั้งหมด &gt;</a>
        </div>
  
        <div class="relative">
          <div ref="carousel" class="carousel-container flex overflow-x-auto snap-x space-x-4 pb-4 no-scrollbar">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="snap-start flex-shrink-0 w-64 border rounded-lg shadow-lg p-4"
            >
              <div class="bg-orange-500 text-white p-2 w-max mb-2 text-xs">TOP</div>
              <img :src="product.image" :alt="product.name" class="h-40 w-full object-cover mb-2 rounded-lg" />
              <div class="text-gray-700 font-semibold mb-1">{{ product.sales }}</div>
              <h3 class="text-lg font-bold">{{ product.name }}</h3>
            </div>
          </div>
  
          <!-- Left Arrow Button -->
          <button @click="scrollCarousel('left')" class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg z-30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          <!-- Right Arrow Button -->
          <button @click="scrollCarousel('right')" class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg z-30">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            image: 'https://example.com/images/product1.jpg',
            sales: 'ยอดขายต่อเดือน 28พัน+',
            name: 'Cream ผิวแห้ง',
          },
          {
            image: 'https://example.com/images/product2.jpg',
            sales: 'ยอดขายต่อเดือน 3พัน+',
            name: 'ขาตั้งจอคอม',
          },
          {
            image: 'https://example.com/images/product3.jpg',
            sales: 'ยอดขายต่อเดือน 3พัน+',
            name: 'Keycap',
          },
          {
            image: 'https://example.com/images/product4.jpg',
            sales: 'ยอดขายต่อเดือน 39พัน+',
            name: 'ราวตากผ้า',
          },
          {
            image: 'https://example.com/images/product5.jpg',
            sales: 'ยอดขายต่อเดือน 10พัน+',
            name: 'กล้องติดรถยนต์ 70MAI',
          },
          {
            image: 'https://example.com/images/product6.jpg',
            sales: 'ยอดขายต่อเดือน 6พัน+',
            name: 'Aukey',
          },
          {
            image: 'https://example.com/images/product7.jpg',
            sales: 'ยอดขายต่อเดือน 12พัน+',
            name: 'ไมโครโฟน',
          },
          {
            image: 'https://example.com/images/product8.jpg',
            sales: 'ยอดขายต่อเดือน 5พัน+',
            name: 'ที่คีบผม',
          },
          {
            image: 'https://example.com/images/product9.jpg',
            sales: 'ยอดขายต่อเดือน 9พัน+',
            name: 'เครื่องฟอกอากาศ',
          },
        ],
      };
    },
    methods: {
      scrollCarousel(direction) {
        const carousel = this.$refs.carousel;
        const scrollAmount = carousel.clientWidth * 0.8; // Adjust to 80% of carousel width
        if (direction === 'left') {
          carousel.scrollLeft -= scrollAmount;
        } else if (direction === 'right') {
          carousel.scrollLeft += scrollAmount;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .carousel-container {
    scroll-behavior: smooth;
    position: relative;
  }
  .carousel-container::before,
  .carousel-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 20;
    pointer-events: none;
  }
  .carousel-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
  .carousel-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
  </style>
  