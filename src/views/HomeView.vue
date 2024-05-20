<template>
	<div class="container">
		<AppHeader />
		<main class="content">
			<ArticleList />
			<AppSidebar />
		</main>
	</div>
</template>

<script>
	import AppHeader from '../components/AppHeader.vue';
	import ArticleList from '../components/ArticleList.vue';
	import AppSidebar from '../components/AppSidebar.vue';

	export default {
		name: "HomeView",
		components: {
			AppHeader,
			ArticleList,
			AppSidebar
		}
	};
</script>

<style scoped>
	.container {
		margin: 0 auto;
		width: 940px;
	}
	.content {
		position: relative;
	}
</style>
