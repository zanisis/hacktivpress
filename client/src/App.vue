<template>
  <div id="app">
    <div class="ui container">
      <header-bar></header-bar>
      <router-view v-if="status"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeadersBar.vue'

export default {
  name: 'app',
  data(){
    return {
      status : true
    }
  },
  components: {
    HeaderBar
  },
  created(){

  }
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
