<template>
  <aside class="menu">
    <ul class="menu-list">
      <li class="is-size-5 my-5">
        <router-link to="/invoice" class="router-link">Import Management</router-link>
      </li>
      <li class="is-size-5">
        <router-link to="/export_item" class="router-link">Export Management</router-link>
      </li>
      <li class="is-size-5">
        <router-link to="/track/listing" class="router-link">Tracking Management</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LeftMenuComponent'
};
</script>

<style scoped>
.menu {
  width: 250px; /* Set the width of the left menu */
}

.menu-list {
  padding: 0;
}

.menu-list li {
  margin-bottom: 10px;
}

.menu-list li a {
  color: #555;
  display: block; /* Ensure the link takes up the full width */
  padding: 0.5rem; /* Add some padding for better spacing */
}

.menu-list li a:hover {
  color: #333;
  background-color: #f5f5f5; /* Add a background color on hover */
  text-decoration: underline; /* Underline the link on hover */
}

/* Add styles for the active router links */
.router-link-active {
  color: #3273dc; /* Bulma primary color */
  font-weight: bold;
}

.router-link:hover,
.router-link:focus {
  color: #3273dc !important; /* Apply !important to override any existing styles */
}
</style>
