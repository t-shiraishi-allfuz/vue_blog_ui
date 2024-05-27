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
						<ol id="ld_blog_article_comment_entries">
							<div class="comment" v-for="comment in comments" :key="comment.id">
								<li class="comment-set-v2 odd">
									<CommentInfo :comment="comment" />
								</li>
								<li>
									<ul class="comment-reply-list" v-if="comment.reply.length">
										<li class="comment-set-v2 even reply" v-for="reply in comment.reply" :key="reply.id">
											<CommentInfo :comment="reply" />
										</li>
									</ul>
								</li>
							</div>
						</ol>
						<div id="comment-form-outer">
							<div class="article-option comment-form-v2">
								<form @submit.prevent="submitComment">
									<fieldset>
										<dl class="comment-form-author">
											<dt>
												<label for="comment-form-author" class="comment-author-label">名前</label>
											</dt>
											<dd id="comment-author-form">
												<input type="text" class="text comment-form-v2-author" id="comment-form-author" name="author" placeholder="名前" v-model="newComment.author">
											</dd>
										</dl>
										<dl class="comment-form-body">
											<dt>
												<label for="comment-form-textarea" class="comment-body-label">コメント</label>
											</dt>
											<dd>
												<textarea id="comment-form-textarea" class="comment-form-v2-body" name="body" v-model="newComment.body"></textarea>
												<div id="comment-form-tools" class="comment-form-tools">
													<div class="comment-form-sumibit">
														<span class="submit">
															<button type="submit" >投稿する</button>
														</span>
													</div>
												</div>
											</dd>
										</dl>
									</fieldset>
								</form>
							</div>
						</div>
					</section>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
	import CommentInfo from "./CommentInfo.vue";

	let article = { id: 1, title: "記事1", content: "これは記事1です", like: 46, date: "2024/5/20 00:00" };
	let comments = [
		{id: 1, comment: "コメントです。", name: "ニックネーム", like: 0, date: "2024/5/20 10:00", reply: [
			{id: 1, comment: "返信です。", name: "ニックネーム", like: 0, date: "2024/5/20 12:00"}
		]}
	];

	export default {
		name: "ArticleDetail",
		components: {
			CommentInfo
		},
		data() {
			return {
				article: article,
				comments: comments,
				newComment: {
					author: '',
					body: ''
				}
			}
		},
		methods: {
			submitComment() {
				if (this.newComment.author && this.newComment.body) {
					this.comments.push({
						id: this.comments.length + 1,
						comment: this.newComment.body,
						name: this.newComment.author,
						date: new Date().toLocaleString(),
						like: 0,
						reply: [],
					})
					this.newComment.author = '';
					this.newComment.body = '';
				}
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
		ol{
			list-style: none;
			margin: 0;
			padding: 0;
		}
		li{
			list-style: none;
		}
		.comment:first-child{
			border-top: none;
		}
		.comment:last-child{
			.comment-info{
				padding-bottom: 12px;
				border-bottom: none;
			}
		}
		.comment-set-v2{
			border-top: 1px solid #F3F3F3;
			border-bottom: 1px solid #F3F3F3;
			padding: 0 32px;

			.comment-info{
				position: relative;
				margin: 0;
				padding: 24px 0;
				font-size: 12px;
				list-style: none;

				li{
					list-style: none;
				}
			}
		}
	}
	.comment-reply-list{
		margin: 12px 0 12px 32px;
		border-left: solid 1px #ccc;
		padding: 0;

		.comment-set-v2{
			border: none !important;
			padding-left: 32px !important;
		}
	}
	#comment-form-outer{
		font-size: 12px;
		margin: 2em 0 4em;

		fieldset{
			border: 0;
		}

		dl{
			overflow: hidden;
		}

		dt{
			width: 10%;
			color: #777;
			float: left;
			text-align: right;
			line-height: 30px;
		}

		.comment-form-v2 {
			dl{
				padding: 0;
				margin: 12px 10%;
			}
			dd{
				margin: 0;
			}
			.comment-author-label{
				display: none;
			}

			input.text.comment-form-v2-author{
				width: 100%;
				height: 50%;
				border: 1px solid #ddd;
				border-radius: 3px;
				padding: 1em;
				box-sizing: border-box;
			}
			.comment-form-body{
				position: relative;
				overflow: visible;
			}
			.comment-body-label{
				display: none;
			}
			textarea.comment-form-v2-body{
				width: 100%;
				height: 171px;
				border: 1px solid #ddd;
				border-radius: 3px;
				margin-bottom: 12px;
				padding: 1em 2em 1em 1em;
				box-sizing: border-box;
			}
			.comment-form-tools{
				background: none;
				border: none;
				height: auto;
				border-radius: 0 0 3px 3px;
				font-size: 12px;

				.comment-form-sumibit{
					margin-top: 12px;
					width: 100%;
					box-sizing: border-box;

					.submit{
						margin: 2px;
						float: none;

						button{
							width: 100%;
							height: 60px;
							box-sizing: border-box;
							background: #38C638;
							text-shadow: none;
							color: #fff;
							font-size: 15px;
							border: none;
							line-height: 1;
						}
					}
				}
			}
		}
		#comment-author-form{
			line-height: 30px;
		}
	}
</style>
