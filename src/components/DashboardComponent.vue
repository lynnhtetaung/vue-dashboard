<template>
  <div class="dashboard-layout">
    <header>
      <HeaderComponent @toggle-menu="toggleMenu" />
    </header>

    <div class="main-content">
      <LeftMenuComponent />

      <main>
        <router-view></router-view>
      </main>

    </div>

    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent.vue';
import FooterComponent from './layouts/FooterComponent.vue';
import LeftMenuComponent from './layouts/LeftMenuComponent.vue';

export default {
  name: 'DashboardComponent',
  components: {
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent
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
.dashboard-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header,
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.main-content {
  display: flex;
  flex: 1;
}

.left-menu,
.right-menu {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}

main {
  flex: 1;
  padding: 20px;
}
</style>