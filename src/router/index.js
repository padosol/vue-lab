import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/test',
		name: 'test',
	},
	{
		path: '/ocean'
		name: 'bay'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
