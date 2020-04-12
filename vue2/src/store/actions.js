console.log('start::actions');

export const actions = {
	changeTab(context, num){
		context.commit('changeTab', num);
	}
	// tabList: (context, num) => {
	// 	changeTab: {
	// 		context.commit('changeTab', num);
	// 	}
	// }
};
