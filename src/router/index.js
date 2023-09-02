import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/test',
		name: 'test',
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
