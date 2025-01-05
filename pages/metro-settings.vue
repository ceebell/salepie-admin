<template>
    <div>
        <div class="card">
            <div class="card-header">
             <h3 class="card-title">
              Card Title
             </h3>
            </div>
            <div class="card-body">
             Centralize your team information with our management tools. Access detailed instructions, expert advice, and technical documentation to maintain an up-to-date team directory.
            </div>
            <div class="card-footer justify-center">
             <a class="btn btn-link" href="#">
              Example link
             </a>
            </div>
        </div>
           
           
           <!-- TABLE -->
           <div class="card min-w-full my-8">
            <div class="card-header">
             <h3 class="card-title">
              Latest Orders
             </h3>
            </div>
            <div class="card-table">
             <div data-datatable="true" data-datatable-page-size="5">
              <div class="scrollable-x-auto">
               <table class="table table-border text-sm" data-datatable-table="true">
                <thead>
                 <tr>
                  <th class="w-[60px]">
                   <input class="checkbox checkbox-sm" data-datatable-check="true" type="checkbox"/>
                  </th>
                  <th>
                   Customer
                  </th>
                  <th>
                   Order Amount
                  </th>
                  <th>
                   Order Date
                  </th>
                  <th>
                   Status
                  </th>
                 </tr>
                </thead>
                <tbody>
                 <tr>
                  <td>
                   <input @click="selectRow(1)" class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="1"/>
                  </td>
                  <td>
                   Customer 1
                  </td>
                  <td>
                   $100.00
                  </td>
                  <td>
                   5 Jan, 2024
                  </td>
                  <td>
                   Pending
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="2"/>
                  </td>
                  <td>
                   Customer 2
                  </td>
                  <td>
                   $250.50
                  </td>
                  <td>
                   29 Feb, 2024
                  </td>
                  <td>
                   Shipped
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="3"/>
                  </td>
                  <td>
                   Customer 3
                  </td>
                  <td>
                   $75.75
                  </td>
                  <td>
                   2 Mar, 2024
                  </td>
                  <td>
                   Delivered
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="4"/>
                  </td>
                  <td>
                   Customer 4
                  </td>
                  <td>
                   $32.99
                  </td>
                  <td>
                   20 Feb, 2024
                  </td>
                  <td>
                   Cancelled
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="5"/>
                  </td>
                  <td>
                   Customer 5
                  </td>
                  <td>
                   $150.00
                  </td>
                  <td>
                   10 Jan, 2024
                  </td>
                  <td>
                   Pending
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="6"/>
                  </td>
                  <td>
                   Customer 6
                  </td>
                  <td>
                   $89.90
                  </td>
                  <td>
                   1 Feb, 2024
                  </td>
                  <td>
                   Shipped
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="7"/>
                  </td>
                  <td>
                   Customer 7
                  </td>
                  <td>
                   $120.40
                  </td>
                  <td>
                   15 Mar, 2024
                  </td>
                  <td>
                   Delivered
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="8"/>
                  </td>
                  <td>
                   Customer 8
                  </td>
                  <td>
                   $300.00
                  </td>
                  <td>
                   25 Jan, 2024
                  </td>
                  <td>
                   Cancelled
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="9"/>
                  </td>
                  <td>
                   Customer 9
                  </td>
                  <td>
                   $45.50
                  </td>
                  <td>
                   3 Feb, 2024
                  </td>
                  <td>
                   Pending
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="10"/>
                  </td>
                  <td>
                   Customer 10
                  </td>
                  <td>
                   $78.99
                  </td>
                  <td>
                   8 Mar, 2024
                  </td>
                  <td>
                   Shipped
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="11"/>
                  </td>
                  <td>
                   Customer 11
                  </td>
                  <td>
                   $260.75
                  </td>
                  <td>
                   17 Feb, 2024
                  </td>
                  <td>
                   Delivered
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="12"/>
                  </td>
                  <td>
                   Customer 12
                  </td>
                  <td>
                   $90.30
                  </td>
                  <td>
                   23 Mar, 2024
                  </td>
                  <td>
                   Cancelled
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="13"/>
                  </td>
                  <td>
                   Customer 13
                  </td>
                  <td>
                   $140.00
                  </td>
                  <td>
                   12 Jan, 2024
                  </td>
                  <td>
                   Pending
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="14"/>
                  </td>
                  <td>
                   Customer 14
                  </td>
                  <td>
                   $200.20
                  </td>
                  <td>
                   7 Feb, 2024
                  </td>
                  <td>
                   Shipped
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <input class="checkbox checkbox-sm" data-datatable-row-check="true" type="checkbox" value="15"/>
                  </td>
                  <td>
                   Customer 15
                  </td>
                  <td>
                   $67.80
                  </td>
                  <td>
                   28 Mar, 2024
                  </td>
                  <td>
                   Delivered
                  </td>
                 </tr>
                </tbody>
               </table>
               <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
                <div class="flex items-center gap-2">
                 Show
                 <select class="select select-sm w-16" data-datatable-size="true" name="perpage">
                 </select>
                 per page
                </div>
                <div class="flex items-center gap-4">
                 <span data-datatable-info="true">
                 </span>
                 <div class="pagination" data-datatable-pagination="true">
                 </div>
                </div>
               </div>
              </div>
             </div>
            </div>
           </div>


           <!-- MODAL -->
           <div class="card card-grid py-16">
            <div class="card-header">
             <h3 class="card-title">
              Card Title
             </h3>
            </div>
            <div class="card-table scrollable-x-auto">
             <div class="scrollable-auto">
              <table class="table table-border align-middle text-gray-700 font-medium text-sm">
               <thead>
                <tr>
                 <th>
                  Column 1
                 </th>
                 <th>
                  Column 2
                 </th>
                 <th>
                  Column 3
                 </th>
                </tr>
               </thead>
               <tbody>
                <tr>
                 <td>
                  Cell 1
                 </td>
                 <td>
                  Cell 2
                 </td>
                 <td>
                  Cell 3
                 </td>
                </tr>
                <tr>
                 <td>
                  Cell 1
                 </td>
                 <td>
                  Cell 2
                 </td>
                 <td>
                  Cell 3
                 </td>
                </tr>
                <tr>
                 <td>
                  Cell 1
                 </td>
                 <td>
                  Cell 2
                 </td>
                 <td>
                  Cell 3
                 </td>
                </tr>
               </tbody>
              </table>
             </div>
            </div>
            <div class="card-footer justify-center md:justify-between flex-col md:flex-row gap-3 text-gray-600 text-2sm font-medium">
             <div class="flex items-center gap-2">
              Show
              <select class="select select-sm w-16" name="perpage">
               <option value="5">
                5
               </option>
               <option value="10">
                10
               </option>
               <option value="25">
                25
               </option>
               <option value="50">
                50
               </option>
              </select>
              per page
             </div>
             <div class="flex items-center gap-4">
              <span>
               1-10 of 52
              </span>
              <div class="pagination">
               <button class="btn" disabled="">
                <i class="ki-outline ki-black-left">
                </i>
               </button>
               <button class="btn">
                1
               </button>
               <button class="btn active">
                2
               </button>
               <button class="btn">
                3
               </button>
               <button class="btn">
                <i class="ki-outline ki-black-right">
                </i>
               </button>
              </div>
             </div>
            </div>
           </div>

      </div>
  </template>
  
  <script setup>
  
  
  import {ref} from 'vue'
  useHead({
    // script: [
    //   { src: '/js/core.bundle.js', type: 'text/javascript', defer: true},
    // ],
    link: [
    {
      rel: 'stylesheet',
      href: 'css/metro-style.css', // Point to the file in the 'public' folder
    },
  ],
  });

const orderList = ref([])

const selectRow = () => {}


  </script>