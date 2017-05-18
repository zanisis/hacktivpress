<template>
  <div id="app">
    <div class="ui container">
      <header-bar></header-bar>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeadersBar.vue'

export default {
  name: 'app',
  components: {
    HeaderBar
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
