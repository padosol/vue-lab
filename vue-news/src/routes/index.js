import { createWebHistory, createRouter } from 'vue-router';
// 컴포넌트들
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

const routes = [
    {
        path:'/',
        redirect: '/news'
    },
    {
        // path: url 주소
        path: '/news',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
        name: 'FETCH_NEWS'
    },
    {
        path: '/ask',
        component: AskView,
        name: 'FETCH_ASK'
    },
    {
        path: '/jobs',
        component: JobsView,
        name: 'FETCH_JOBS'
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

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;