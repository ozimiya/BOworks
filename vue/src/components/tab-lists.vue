<template>
  <li>{{item.name}}</li>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'lists',
  props: ['item'],
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabList > li {
  display: none;
  float: left;
  background: #CCC;
  height: 100px;
  line-height: 100px;
  width: 100px;
}
.tabList > li.enable {
  display: block;
}
.tabList > li + li {
  margin-left: 10px;
}
</style>
