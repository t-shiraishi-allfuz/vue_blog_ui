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
	html{
		color: #000;
		font-size: 100%;
	}
	body {
		margin: 0;
		padding: 0;
		color: #fff;
		background-color: #000;
		font-family: Arial, sans-serif;
		word-wrap: break-word;
	}
	#app {
		padding-top: 24px;
	}
</style>
