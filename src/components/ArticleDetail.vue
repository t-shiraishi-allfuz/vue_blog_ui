<template>
	<div id="main" class="column">
		<div id="main-inner">
			<article class="article">
				<header class="article-header">
					<h1 class="article-title">{{ article.title }}</h1>
					<p class="article-date">{{ article.date }}</p>
				</header>
				<div class="article-body">
					<div class="article-body-inner">
						{{ article.content }}
					</div>
				</div>
				<footer class="article-footer">
					<div class="article-social-btn">
						<button type="button">
							いいね！
							<span id="clap-count">46</span>
						</button>
					</div>
				</footer>
				<div id="article-options">
					<section id="comments">
						<h1 class="article-option-title">コメント</h1>
						<div class="article-option" v-for="comment in comments" :key="comment.id">
							<ol id="ld_blog_article_comment_entries">
								<li class="comment-set v2 odd">
									<ul class="comment-info">
										<li class="comment-author">{{ comment.name }}</li>
										<li class="comment-date">{{ comment.date }}</li>
										<li class="comment-rating"></li>
										<li class="comment-body">{{ comment.comment }}</li>
										<li class="comment-reaction">
											<div class="comment-reply">
												<img class="icon-reply" :src="iconReply">
											</div>
											<div class="comment-like">
												<img class="icon-like" :src="iconLike">
											</div>
											<div class="comment-like-count-2">
												<span class="count-like">{{ comment.like }}</span>
											</div>
										</li>
									</ul>
								</li>
								<template v-if="comment.reply.length">
									<li v-for="reply in comment.reply" :key="reply.id">
										<ul class="comment-reply-list">
											<li class="comment-set v2 even reply">
												<ul class="comment-info">
													<li class="comment-author">{{ reply.name }}</li>
													<li class="comment-date">{{ reply.date }}</li>
													<li class="comment-rating"></li>
													<li class="comment-body">{{ reply.comment }}</li>
													<li class="comment-reaction">
														<div class="comment-reply">
															<img class="icon-reply" :src="iconReply">
														</div>
														<div class="comment-like">
															<img class="icon-like" :src="iconLike">
														</div>
														<div class="comment-like-count-2">
															<span class="count-like">{{ reply.like }}</span>
														</div>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</template>
							</ol>
						</div>
					</section>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
	import ImageReply from "@/assets/icon_reply.png";
	import ImageLike from "@/assets/icon_like.png";
	import ImageLikeOn from "@/assets/icon_like_on.png";

	let article = { id: 1, title: "記事1", content: "これは記事1です", like: 46, date: "2024年5月20日 00:00" };
	let comments = [
		{id: 1, comment: "コメントです。", name: "ニックネーム", like: 0, date: "2024年5月20日 10:00", reply: [
			{id: 1, comment: "返信です。", name: "ニックネーム", like: 0, date: "2024年5月20日 12:00"}
		]}
	];

	export default {
		name: "ArticleDetail",
		data() {
			return {
				article: article,
				comments: comments,
				iconReply: ImageReply,
				iconLike: ImageLike,
				iconLikeOn: ImageLikeOn
			}
		}
	};
</script>

<style scoped>
	#main{
		width: 620px;
		float: left;
	}
	article{
		position: relative;
		border: 0;
		padding: 0;
		margin-bottom: 0;

		.article-header{
			position: relative;
			border-bottom: 1px dashed #666;
			margin-left: 0;
			margin-bottom: 15px;
			padding-bottom: 20px;

			.article-title{
				margin-bottom: 5px;
				max-height: none;
				overflow: hidden;

				h1{
					font-size: 100%;
					font-weight: normal;
				}

				a{
					color: #fff;
					font-size: 24px;
					font-weight: bold;
				}
			}
		}
		.article-date{
			color: #808080;
			font-size: 12px;
		}
		.article-body{
			color: #ccc;
			margin-left: 0;
			font-size: 14px;
			line-height: 1.6;

			.article-body-inner{
				zoom: 1;
			}
		}
		.article-footer{
			border-bottom: 1px dashed #666;
			clear: both;
		}
		.article-social-btn{
			position: relative;
			top: 1px;
			border-bottom: 1px dashed #666;

			button{
				height: 22px;
				margin: 16px 0;
			}
		}
	}
	#article-options{
		.article-option-title{
			font-weight: bold;
			font-size: 16px;
			letter-spacing: 1px;
		}
		div.article-option ol{
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li{
			list-style: none;
		}
		.comment-set.v2:first-child{
			border-top: none;
		}
		.comment-set.v2:last-child{
			.comment-info{
				padding-bottom: 12px;
				border-bottom: none;
			}
		}
		.comment-set.v2{
			border-bottom: 1px solid #F3F3F3;
			padding: 0 32px;

			.comment-info{
				position: relative;
				margin: 0;
				padding: 24px 0;
				font-size: 12px;

				.comment-author{
					font-weight: bold;
					padding-right: 8px;
					display: inline-block;
					max-width: calc(100% - 10em);
				}
				.comment-date{
					position: absolute;
					display: inline-block;
					right: 0;
					border: none;
				}
				.comment-rating{
					padding: 8px 0;
				}
				.comment-body{
					margin-left: 16px;
					padding: 8px 0;
					color: #c7c7c7;
					line-height: 1.5;
				}
				.comment-reaction{
					margin-top: 10px;
					text-align: right;
					vertical-align: middle;
					display: list-item;

					.comment-reply{
						display: inline-block;
						margin-right: 16px;
						font-size: 16px;
						vertical-align: middle;
						cursor: pointer;

						img{
							width: 30%;
						}
					}
					.comment-like{
						position: relative;
						display: inline-block;
						margin-right: 4px;
						vertical-align: middle;
						cursor: pointer;

						img{
							width: 30%;
						}
					}
					.comment-like-count-2{
						display: inline-block;
						vertical-align: middle;
						color: #ff8fb0;
					}
				}
			}

			.reply{
				border: none;
				padding-left: 32px;
			}
		}
		.comment-reply-list{
			margin: 12px 0 12px 32px;
			border-left: solid 1px #ccc;
			padding: 0;
		}
		.icon-comment-v2{
			font-family: 'icon-comment-v2' !important;
			speak: none;
			font-style: normal;
			font-weight: normal;
			font-variant: normal;
			text-transform: none;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
		}
	}
</style>
