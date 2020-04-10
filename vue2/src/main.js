import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
});
