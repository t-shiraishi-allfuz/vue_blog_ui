<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style>
	body {
		margin: 20px 0 0;
		font-family: Arial, sans-serif;
	}
	#app {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
</style>
