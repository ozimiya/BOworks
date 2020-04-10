<template>
<!--  <p>タブ切り替えをつくる</p>-->
  <div class="tabWrap">
    <ul class="tabList cf">
      <lists v-for="item in list" v-bind:item="item"/>
    </ul>
  </div>
</template>

<script>
import lists from './tab-lists.vue';

export default {
  name: 'tabs',
  components: {
    lists: lists
  },
  data () {
    return {
      list: [
        { id: 1, name: 1},
        { id: 2, name: 2},
        { id: 3, name: 3}
      ]
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.cf:after {
  content: '';
  display: block;
  clear: both;
}
.tabWrap {
  width: 210px;
  height: 100px;
  overflow: hidden;
}
.tabList {
  margin: 0 auto;
  letter-spacing: -.4em;
}

</style>
