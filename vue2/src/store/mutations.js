console.log('start::mutations');

export const state = {
	tabList: {
		displays: {
			activeIndex: 0,
		}
	}
};

export const mutations = {
	changeTab(state, num){
		state.tabList.displays.activeIndex = num;
	}

};
