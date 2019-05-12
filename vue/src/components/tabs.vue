<template>
<!--  <p>タブ切り替えをつくる</p>-->
  <div class="tabWrap">
    <ul class="tabList cf">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
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
.tabList > li {
  float: left;
  background: #CCC;
  height: 100px;
  line-height: 100px;
  width: 100px;
}
.tabList > li + li {
  margin-left: 10px;
}
</style>
