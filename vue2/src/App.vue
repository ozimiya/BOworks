<template>
	<div id="app">
		<TabList/>
	</div>
</template>

<script>
	import TabList from './components/tab-list.vue';
	console.log(TabList);
	export default {
		name: 'App',
		components: {
			TabList,
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
