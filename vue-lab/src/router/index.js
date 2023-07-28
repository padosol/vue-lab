import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('../components/DefaultView.vue'),
            children: [
                {
                    path: '/main/:param',
                    name: 'content',
                    component: () => import('../view/ContentView.vue')
                }
            ]
        },
        {
            path: '/custom',
            component: () => import('@/view/CustomComponent.vue'),
        }
    ]
})

export default router;