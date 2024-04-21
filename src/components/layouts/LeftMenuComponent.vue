<template>
  <aside class="menu">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><router-link to="/user" class="is-active">User Management</router-link></li>
      <li><router-link to="/time">Time Management</router-link></li>
      <li><router-link to="/health">Health Management</router-link></li>
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

.menu-label {
  color: #333;
  font-weight: bold;
}

.menu-list {
  padding: 0;
}

.menu-list li {
  margin-bottom: 10px;
}

.menu-list li a {
  color: #555;
}

.menu-list li a:hover {
  color: #333;
}
</style>
