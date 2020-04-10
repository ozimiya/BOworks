<template>
	<li>{{item.name}}</li>
</template>

<script>
export default {
	name: 'tabListItem',
	props: ['item'],
}
</script>

<style scoped>
	li {
		list-style: none;
	}
	/*.tabList > li {*/
	/*	display: none;*/
	/*	float: left;*/
	/*	background: #CCC;*/
	/*	height: 100px;*/
	/*	line-height: 100px;*/
	/*	width: 100px;*/
	/*}*/
	/*.tabList > li.enable {*/
	/*	display: block;*/
	/*}*/
	/*.tabList > li + li {*/
	/*	margin-left: 10px;*/
	/*}*/
</style>
