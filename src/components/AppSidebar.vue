<template>
	<aside class="app-sidebar">
		<div class="calendar">
			<p>Calendar Component Here</p>
		</div>
		<div class="categories">
			<label for="category">カテゴリー</label>
			<select id="category" name="category">
				<option value="all">全て</option>
				<option value="category1">カテゴリー1</option>
				<option value="category2">カテゴリー2</option>
			</select>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'AppSidebar',
	};
</script>

<style scoped>
	.app-sidebar {
		flex: 0 0 200px;
		margin: 10px;
	}

	.calendar,
	.categories {
		margin-bottom: 20px;
	}

	@media (max-width: 768px) {
		.app-sidebar {
			flex: 1;
			margin: 0;
		}
	}
</style>
