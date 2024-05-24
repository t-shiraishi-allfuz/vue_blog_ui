<template>
	<aside class="app-header">
		<div id="blog-title">
			<router-link :to="'/'">
				{{ blog.title }}
			</router-link>
		</div>
		<p id="blog-description">{{ blog.description }}</p>
		<img src="@/assets/header.png" alt="AppHeader" class="header-img" />
	</aside>
</template>

<script>
	export default {
		name: 'AppHeader',
		data() {
			return {
				blog: {title: 'ブログタイトル', description: 'サイト紹介'}
			}
		}
	};
</script>

<style scoped>
	.app-header {
		position: relative;
		background: transparent;
		height: auto;

		#blog-title{
			font-size: 24px;
			font-weight: bold;
			line-height: 1.4;
			margin: 30px 0;

			a{
				color: #fff;
				text-decoration: none;
			}
		}
		#blog-description{
			color: #979797;
			font-size: 14px;
			font-weight: normal;
			line-height: 1.6;
			margin: 30px 0;
		}
		img{
			width: 100%;
			height: auto;
		}
	}
</style>
