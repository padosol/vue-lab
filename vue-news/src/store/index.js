import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions';


// vuex는 상태 관리 도구입니다.
const store = new Vuex.Store({
    // state getters는 같이있으면 보기 좋음
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {}
    },
    getters: {
        fetchedAsk(state) {
            return state.ask
        },
        fetchedNews(state) {
            return state.news
        },
        fetchedUser(state) {
            return state.user
        },
        fetchedItem(state) {
            return state.item
        }
    },
    mutations,
    actions
});

export default store
