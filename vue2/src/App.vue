<template>
	<div id="app">
		<TabList/>
	</div>
</template>

<script>
	import TabList from './components/tab-list.vue';

	export default {
		name: 'App',
		components: {
			TabList,
		},
	}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
.cf:after {
	content: '';
	display: block;
	clear: both;
}
li {
	list-style: none;
}
</style>
