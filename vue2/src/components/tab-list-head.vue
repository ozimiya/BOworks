<template>
	<ul :class="['tabListHead cf']">
		<li v-for="(item, index) in list" @click="changeTab(index)" :class="{'active': index === tabList.displays.activeIndex}" :key="item.key">{{item.text}}</li>
	</ul>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	// import TabListItem from './tab-list-item.vue'　覚書用

	export default {
		name: 'TabListHead',
		// components: {
		// 	// TabListItem,　覚書用
		// },
		data() {
			return {
				list: [
					{ key: 'tab1', text: 'aaa'},
					{ key: 'tab2', text: 'bbb'},
					{ key: 'tab3', text: 'ccc'},
				]
			}
		},
		computed: {
			...mapState(['tabList']),
		},
		methods: {
			...mapActions(['changeTab']),
		}
	};
</script>

<style scoped>
	.tabListHead > li {
		float: left;
		width: 95px;
		padding: 10px 0;
		background: #B0E0E6;
		text-align: center;
	}
	.tabListHead > li + li {
		border-left: 1px solid #FFFFFF;
	}
	.tabListHead > li.active {
		display: block;
		background: red;
	}
</style>
