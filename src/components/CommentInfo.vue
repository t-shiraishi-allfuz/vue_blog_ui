<template>
	<ul class="comment-info">
		<li class="comment-author">{{ comment.name }}</li>
		<li class="comment-date">{{ moment(comment.date) }}</li>
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
</template>

<script>
	import moment from "moment";
	import ImageReply from "@/assets/icon_reply.png";
	import ImageLike from "@/assets/icon_like.png";
	import ImageLikeOn from "@/assets/icon_like_on.png";

	export default {
		name: "CommentInfo",
		props: {
			comment: {
				type: Object,
				required: true,
			}
		},
		data() {
			return {
				iconReply: ImageReply,
				iconLike: ImageLike,
				iconLikeOn: ImageLikeOn
			}
		},
		methods: {
			moment(date) {
				return moment(date).format("YYYY年MM月DD日 HH:mm")
			}
		}
	};
</script>

<style scoped>
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
</style>
