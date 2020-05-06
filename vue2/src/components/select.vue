<template>
	<select v-model="current">
		<option v-for="topic in topics" v-bind:value="topic.value">{{ topic.name }}</option>
	</select>
<!--	<div v-if=""></div>-->
</template>

<script>
	import axios from 'axios';

	export default {
		data(){
			return {
				list: [],
				current: '',
				topics: [
					{ value: 'vue', name: 'vue' },
					{ value: 'jquery', name: 'jquery' },
				]
			}
		},
		watch: {
			current: function(val) {
				console.log('currrent');
				axios.get('https://api.github.com/search/repositories', {
					params: {
						q: 'topic:' + val
					}
				}).then(function(response) {
					this.list = response.data.items
					console.log(this.list.length);
				}.bind(this))
			}
		}
	}
</script>
