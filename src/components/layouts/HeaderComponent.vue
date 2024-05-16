<template>
  <div class="header">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <button class="navbar-burger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div :class="{ 'is-active': isMenuOpen }" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <!-- Add more navigation links as needed -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'HeaderComponent',
  components: {
    RouterLink
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
}

.navbar {
  background-color: #333; /* Override Bulma's primary color */
}

.navbar-item {
  color: #fff !important; /* Ensure the text is white */
}

.navbar-item:hover {
  background-color: #444; /* Darken the background on hover */
}

.navbar-burger {
  color: #fff;
}

.navbar-menu.is-active {
  display: block; /* Ensure the menu is shown when active */
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .navbar-menu {
    display: none; /* Hide the navigation links on small screens */
  }

  .navbar-menu.is-active {
    display: block; /* Show the navigation links when the menu is open */
  }
}
</style>
