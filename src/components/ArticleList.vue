<template>
	<div class="article-list">
		<h2>記事一覧</h2>
		<ul>
			<li v-for="article in articles" :key="article.id">
				<router-link :to="'/articles/' + article.id">{{ article.title }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ArticleList",
		data() {
			return {
				articles: [
					{ id: 1, title: "記事 1" },
					{ id: 2, title: "記事 2" },
				]
			};
		}
	};
</script>

<style scoped>
	.article-list {
		flex: 1;
		padding: 20px;
		box-sizing: border-box;
	}
</style>
