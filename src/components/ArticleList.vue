<template>
	<div id="main" class="column">
		<div id="main-inner">
			<article class="article" v-for="article in articles" :key="article.id">
				<div class="article-inner">
					<header class="article-header">
						<h1 class="article-title">
							<router-link :to="'/articles/' + article.id">
								{{ article.title }}
							</router-link>
						</h1>
						<p class="article-date">{{ article.date }}</p>
					</header>
					<div class="article-body">
						<div class="article-body-inner">
							{{ article.description }}
						</div>
					</div>
					<div class="article-first-image">
						<router-link :to="'/articles/' + article.id">
							<img :src="require(`@/assets/thumb${ article.id }.png`)" alt="article-img" />
						</router-link>
					</div>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ArticleList",
		data() {
			return {
				articles: [
					{ id: 1, title: "記事 1", description: "記事の説明", date: "2024年5月20日 00:00" },
					{ id: 2, title: "記事 2", description: "記事の説明", date: "2024年5月21日 00:00" },
				]
			};
		}
	};
</script>

<style scoped>
	body.sidebar-right #main{
		float: left;
	}
	#main{
		width: 620px;
	}
	article{
		position: relative;
		border-bottom: 1px dashed #666;
		margin-bottom: -1px;
		padding: 30px 0;

		.article-inner{
			position: relative;
			height: 210px;
			overflow: hidden;

			.article-header{
				position: relative;
				margin-bottom: 15px;

				.article-title{
					margin-bottom: 5px;
					max-height: 112px;
					overflow: hidden;

					a{
						color: #fff;
						font-size: 24px;
						font-weight: bold;
					}
				}
			}
			.article-header, .article-body{
				margin-left: 240px;
			}
			.article-date{
				color: #808080;
				font-size: 12px;
			}
			.article-body{
				color: #ccc;
				font-size: 14px;
				line-height: 1.6;

				.article-body-inner{
					zoom: 1;
				}

				&::after{
					clear: both;
					content: ".";
					display: block;
					height: 0;
					visibility: hidden;
				}
			}
			.article-first-image {
				background-color: #333;
				display: table;
				position: absolute;
				top: 0;
				left: 0;
				height: 210px;
				width: 210px;

				a{
					background-color: #000;
					display: table-cell;
					text-align: center;
					vertical-align: middle;
				}

				img{
					overflow-clip-margin: content-box;
					width: 210px;
					border: 0;
					vertical-align: top;
					display: inline;
					overflow: clip;
				}
			}
		}

		&::after{
			clear: both;
			content: ".";
			display: block;
			height: 0;
			visibility: hidden;
		}

		a:link{
			color: #80aff6;
			text-decoration: none;
		}
	}
</style>
