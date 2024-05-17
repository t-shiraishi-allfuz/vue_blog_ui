<template>
	<aside class="app-profile">
		<img src="@/assets/profile.jpg" alt="AppProfile" class="profile-img" />
		<h2>{{ profile.name }}</h2>
		<p>{{ profile.description }}</p>
	</aside>
</template>

<script>
	export default {
		name: 'AppProfile',
		data() {
			return {
				profile: {name: 'ニックネーム', description: '自己紹介。'}
			}
		}
	};
</script>

<style scoped>
	.app-profile {
		flex: 0 0 200px;
		margin: 10px;
	}

	.profile-img {
		width: 50px;
		height: auto;
	}

	@media (max-width: 768px) {
		.app-profile {
			flex: 1;
			margin: 0;
		}
	}
</style>
