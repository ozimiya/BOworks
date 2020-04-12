<template>
	<div class="tabWrap">
		<TabListHead/>
		<TabListBody/>
	</div>
</template>

<script>
	import TabListHead from './tab-list-head.vue';
	import TabListBody from './tab-list-body.vue';
	export default {
		name: 'TabList',
		components: {
			TabListHead,
			TabListBody,
		}
	};
</script>

<style scoped>
	.tabList > li {
		float: left;
	}
	.tabListHead > li,
	.tabListBody > li {
		color: #B0E0E6;
	}
</style>
