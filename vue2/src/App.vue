<template>
	<div id="app">
		<TabList/>
		<Select />
	</div>
</template>

<script>
	import TabList from './components/tab-list.vue';
	import Select from './components/Select.vue';

	export default {
		name: 'App',
		components: {
			TabList,
			Select,
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
