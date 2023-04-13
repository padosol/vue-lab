import { 
    // fetchNewsList, 
    // fetchJobsList, 
    // fetchAskList,
    fetchUserInfo,
    fetchAskDetail,
    fetchList 
} from '../api/index';

const actions = {
    // FETCH_NEWS(context) {
    //     // return 하면 axios객체를 반환함 promise일듯?
    //     fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(function(error) {
    //         console.log(error)
    //     })
    // },
    // FETCH_JOBS({commit}){
    //     fetchJobsList()
    //     // 디스럭처링
    //     .then(({data}) => {
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // },
    // FETCH_ASK(context) {
    //     fetchAskList()
    //     .then(({data}) => {
    //         context.commit('SET_ASK', data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // },
    FETCH_USER( {commit}, name ) {
        fetchUserInfo(name)
        .then(( { data } ) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error)
        });
    },
    FETCH_ITEM({commit}, id) {
        return fetchAskDetail(id)
        .then(({ data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error)
        })
    },

    // context 객체를 받아오지만 { } ==> 객체 내용들을 가져올 수 있음. ==> 디스럭처링
    // FETCH_LIST( {commit}, pageName ) {
    //     // pageName == this.$route.name

    //     return fetchList(pageName)
    //     .then( ({data}) => {
    //         console.log(data)
    //         commit('SET_LIST', data);
    //     } )
    //     .catch( error => console.log(error))
    // },

    async FETCH_LIST( {commit}, pageName ) {
        // pageName == this.$route.name
        try {
            const response = await fetchList(pageName)
            commit('SET_LIST', response.data);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}


export default actions