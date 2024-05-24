<template>
	<div class="container">
		<AppHeader />
		<main class="content">
			<ArticleDetail />
			<AppSidebar />
		</main>
	</div>
</template>

<script>
	import AppHeader from '../components/AppHeader.vue';
	import ArticleDetail from '../components/ArticleDetail.vue';
	import AppSidebar from '../components/AppSidebar.vue';

	export default {
		name: "HomeView",
		components: {
			AppHeader,
			ArticleDetail,
			AppSidebar
		},
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