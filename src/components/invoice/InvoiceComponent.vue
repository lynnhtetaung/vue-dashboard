<template>
    <div id="invoice-form">      
      <!-- Company Info Component -->
      <CompanyInfo />
  
      <!-- Item Table Component -->
      <ItemTable />
  
      <!-- Invoice Details Component -->
      <InvoiceDetails />
  
      <!-- Button to Export as PDF -->
      <button @click="exportToPDF" class="button is-primary">Export to PDF</button>
    </div>
  </template>
  
  <script>
  import CompanyInfo from '@/components/invoice/CompanyInfo.vue'
  import InvoiceDetails from '@/components/invoice/InvoiceDetails.vue'
  import ItemTable from '@/components/invoice/ItemTable.vue'
  import html2pdf from 'html2pdf.js'
  
  export default {
    components: {
      CompanyInfo,
      InvoiceDetails,
      ItemTable,
    },
    methods: {
      exportToPDF() {
        // Temporarily hide the elements to be removed when exporting
        const elementsToHide = document.querySelectorAll('.hide-on-export');
        elementsToHide.forEach(element => {
          element.style.display = 'none';
        });
  
        const element = document.getElementById('invoice-form');
        html2pdf().from(element).save();
  
        // Restore the display of hidden elements
        elementsToHide.forEach(element => {
          element.style.display = '';
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Your component styles here */
  </style>
  