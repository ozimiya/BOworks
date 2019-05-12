<template>
  <div id="app">
<!--    <img src="../assets/logo.png">-->
<!--    <router-view/>-->
    <tabs/>
  </div>
</template>

<script>
  console.log('start::app');
  import tabs from './tabs.vue';

export default {
  name: 'App',
  components: {
    tabs: tabs
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
