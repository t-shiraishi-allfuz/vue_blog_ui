import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticleList from '../components/ArticleList.vue';
import ArticleDetail from '../components/ArticleDetail.vue';

const routes = [
	{ path: '/', component: HomeView },
	{ path: '/articles', component: ArticleList },
	{ path: '/articles/:id', component: ArticleDetail },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
