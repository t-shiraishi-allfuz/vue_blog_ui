<template>
	<div class="article-detail" v-if="article">
		<h2>{{ article.title }}</h2>
		<p>{{ article.content }}</p>
	</div>
</template>

<script>
	export default {
		name: "ArticleDetail",
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
	.article-detail {
		width: 300px;
		padding: 20px;
		box-sizing: border-box;
		background-color: #f9f9f9;
	}
</style>
