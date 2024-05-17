<template>
	<div class="container">
		<AppProfile />
		<main class="content">
			<ArticleList />
		</main>
		<AppSidebar />
	</div>
</template>

<script>
	import AppProfile from '../components/AppProfile.vue';
	import ArticleList from '../components/ArticleList.vue';
	import AppSidebar from '../components/AppSidebar.vue';

	export default {
		name: "HomeView",
		components: {
			AppProfile,
			ArticleList,
			AppSidebar
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
</style>
