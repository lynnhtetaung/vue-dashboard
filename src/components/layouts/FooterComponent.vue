<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <span>&copy; Lynn Htet Aung</span> <!-- Add the copyright notice -->
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
};
</script>

<style scoped>
/* Footer styles */
.footer {
  background-color: #333;
  color: #fff;
  padding: 10px 0; /* Reduce padding to make the footer more compact */
}

.footer p {
  margin-bottom: 5px; /* Reduce margin between paragraphs */
  font-size: 14px; /* Adjust font size */
}
</style>
