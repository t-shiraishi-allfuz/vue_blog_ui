<template>
	<div class="container">
		<AppProfile />
		<main class="content">
			<div class="article-detail" v-if="article">
				<router-link :to="'/'">戻る</router-link>
				<h2>{{ article.title }}</h2>
				<p>{{ article.content }}</p>
			</div>
		</main>
		<AppSidebar />
	</div>
</template>

<script>
	import AppProfile from '../components/AppProfile.vue';
	import AppSidebar from '../components/AppSidebar.vue';

	export default {
		name: "ArticleDetail",
		components: {
			AppProfile,
			AppSidebar
		},
		data() {
			return {
				article: null
			};
		},
		created() {
			const articleId = this.$route.params.id;
			this.article = { id: articleId, title: `記事 ${articleId}`, content: `これは記事 ${articleId} です` };
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 10px;
	}
	.content {
		flex: 1;
		margin: 10px;
		min-width: 200px;
	}
	@media (max-width: 768px) {
		.container {
			flex-direction: column;
		}
		.content {
			margin: 0;
		}
	}
	.article-detail {
		width: 100%;
		height: auto;
		padding: 20px;
		box-sizing: border-box;
		background-color: #f9f9f9;
	}
</style>
