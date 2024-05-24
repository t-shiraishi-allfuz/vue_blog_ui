import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticleDetailView from '../views/ArticleDetailView.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/articles/:id', component: ArticleDetailView },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
