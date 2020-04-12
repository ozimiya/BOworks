console.log('start::store/index.js');

import Vue from 'vue';
import Vuex from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { state, mutations } from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
	actions: actions,
	getters: getters,
	state,
	mutations
});
