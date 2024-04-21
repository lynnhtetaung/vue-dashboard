<template>
  <img alt="Vue logo" src="./assets/lynn_banner.jpg">
  <DashboardComponent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import DashboardComponent from './components/DashboardComponent.vue'
import 'bulma/css/bulma.css'

export default {
  name: 'App',
  components: {
    DashboardComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
