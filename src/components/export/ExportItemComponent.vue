<template>
  <div class="container">
    <div class="editor-container">
      <div class="form-container">
        <form @submit.prevent="exportPdf">
          <div class="field">
            <label class="label">Invoice No</label>
            <div class="control">
              <input class="input" v-model="invoiceNo" type="text" placeholder="Enter Invoice No">
            </div>
          </div>
          <!-- Add more fields as necessary -->
          <div class="control">
            <button class="button is-primary" type="submit">Export PDF</button>
          </div>
        </form>
      </div>
      <div class="preview-container">
        <iframe :src="pdfSrc" ref="pdfViewer" width="100%" height="500px"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { PDFDocument, rgb } from 'pdf-lib';
import { saveAs } from 'file-saver';
import examplePdf from '@/assets/templates/755B-SC-SMGL_compressed-1.pdf';

export default {
  data() {
    return {
      invoiceNo: '',
      pdfSrc: '',
    };
  },
  mounted() {
    this.loadPdf();
  },
  methods: {
    async loadPdf() {
      const response = await fetch(examplePdf);
      const pdfArrayBuffer = await response.arrayBuffer();
      this.pdfSrc = URL.createObjectURL(new Blob([pdfArrayBuffer], { type: 'application/pdf' }));
    },
    async exportPdf() {
      const existingPdfBytes = await fetch(examplePdf).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      const { height } = firstPage.getSize();

      // Add the form data to the PDF
      firstPage.drawText(this.invoiceNo, { x: 100, y: height - 100, size: 12, color: rgb(0, 0, 0) });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      saveAs(blob, 'updated_document.pdf');

      // Update the preview
      this.pdfSrc = URL.createObjectURL(blob);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.editor-container {
  display: flex;
  width: 100%;
}

.form-container {
  width: 40%;
  padding-right: 20px;
}

.preview-container {
  width: 60%;
}

iframe {
  border: 1px solid #ccc;
}
</style>
