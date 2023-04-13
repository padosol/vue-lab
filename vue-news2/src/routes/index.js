import Vue from 'vue';
import VueRouter from 'vue-router';
// 컴포넌트들
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
// import JobsView from '../views/JobsView.vue';

import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';

import bus from '../utils/bus';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        redirect: '/news'
    },
    {
        // path: url 주소
        path: '/news',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        name: 'news',
        component: NewsView,
        // component: createListView('NewsView')
        beforeEnter: (to, from, next) => {

            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log("fetched");
                next();
            })
            .catch(function(error) {
                console.log(error)
            });
        },
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        // component: createListView('AskView'),
        beforeEnter: (to, from, next) => {

            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log("fetched");
                bus.$emit('end:spinner');
                next();
            })
            .catch(function(error) {
                console.log(error)
            });
        },
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: JobsView,
        component: createListView('JobsView')
    },
    {
        path: '/user/:id',
        component: UserView,
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes,
})

export default router;