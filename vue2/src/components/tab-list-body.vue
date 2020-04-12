<template>
	<ul :class="['tabListBody cf']">
		<li v-for="(item, index) in list" :class="{'active': index === tabList.displays.activeIndex}" :key="item.key">{{item.text}}</li>
	</ul>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'tabListBody',
		data() {
			return {
				list: [
					{ key: 'tab1', text: 'aaaてきすと'},
					{ key: 'tab2', text: 'bbbてきすと'},
					{ key: 'tab3', text: 'cccてきすと'},
				]
			}
		},
		computed: {
			...mapState(['tabList']),
		}
	};
</script>

<style scoped>
	.tabListBody > li {
		display: none;
		float: left;
		width: 700px;
		padding: 50px 0;
		background: #B0E0E6;
	}
	.tabListBody > li {
		background: red;
	}
	.tabListBody > li.active {
		display: block;
	}
</style>
