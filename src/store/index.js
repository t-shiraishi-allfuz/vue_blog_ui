import { createStore } from 'vuex';

const store = createStore({
	state: {
		user: null,
		config: {},  // config プロパティを初期化
	},
	getters: {
		user: state => state.user,
		config: state => state.config,  // config プロパティを追加
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
		setConfig(state, config) {
			state.config = config;
		},
	},
	actions: {
		fetchUser({ commit }, user) {
			// ユーザーデータをフェッチしてセット
			commit('setUser', user);
		},
		fetchConfig({ commit }, config) {
			// コンフィグデータをフェッチしてセット
			commit('setConfig', config);
		},
	},
});

export default store;
