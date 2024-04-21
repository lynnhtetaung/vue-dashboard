<template>
  <div class="header">
    <nav>
      <ul :class="{ 'open': isMenuOpen }" class="menu"> <!-- Apply 'open' class when menu is open -->
        <li><router-link to="/">Home |</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
    <button class="hamburger-menu" @click="toggleMenu">&#9776;</button> <!-- Remove 'v-show' directive -->
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
/* Header styles */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center; /* Center the list horizontally */
  display: flex;
}

.menu li {
  padding-right: 20px;
}

.menu li:last-child {
  padding-right: 0; /* Remove padding from the last menu item */
}

.menu li a {
  color: #fff;
  text-decoration: none;
}

.menu li a:hover {
  text-decoration: underline;
}

.hamburger-menu {
  display: none; /* Initially hide the hamburger menu button */
}

/* Media query for mobile devices */
@media (max-width: 768px) {
  .hamburger-menu {
    display: block; /* Show the hamburger menu button on small screens */
  }

  .header nav ul {
    display: none; /* Hide the navigation links on small screens */
  }

  .header nav ul.open {
    display: block; /* Show the navigation links when the menu is open */
  }
}
</style>
