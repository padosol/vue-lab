// 데이터 바인딩 ,  ajax 성공시 이 함수들을 이용해서 데이터를 매핑시킴

const mutations = {
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_ITEM(state, item) {
        state.item = item
    },
    SET_LIST(state, list) {
        state.list = list
    }   
}

export default mutations