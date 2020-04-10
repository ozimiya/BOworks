<template>
	<div class="tabWrap">
		<ul class="tabList cf">
			<TabListItem v-for="item in list" v-bind:item="item" />
		</ul>
	</div>
</template>

<script>
	import TabListItem from './tab-list-item.vue';
	export default {
		name: 'TabList',
		components: {
			TabListItem,
		},
		// props: ['item'],
		data() {
			return {
				list: [
					{ id: 1, name: 'aaa'},
					{ id: 2, name: 'bbb'},
					{ id: 3, name: 'ccc'},
				]
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	/*.cf:after {*/
	/*	content: '';*/
	/*	display: block;*/
	/*	clear: both;*/
	/*}*/
	/*.tabWrap {*/
	/*	width: 210px;*/
	/*	height: 100px;*/
	/*	overflow: hidden;*/
	/*}*/
	/*.tabList {*/
	/*	margin: 0 auto;*/
	/*	letter-spacing: -.4em;*/
	/*}*/

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
