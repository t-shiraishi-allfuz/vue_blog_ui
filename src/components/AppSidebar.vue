<template>
	<aside id="sidebar">
		<div class="sidewrapper">
			<AppCalendar />
		</div>
		<div class="sidewrapper">
			<div class="sidetitle">カテゴリー</div>
			<div class="side">
				<select id="category" name="category">
					<option value="all">全て</option>
					<option value="category1">カテゴリー1</option>
					<option value="category2">カテゴリー2</option>
				</select>
			</div>
		</div>
	</aside>
</template>

<script>
	import AppCalendar from './AppCalendar.vue';

	export default {
		name: 'AppSidebar',
		components: {
			AppCalendar
		},
	};
</script>

<style scoped>
	#sidebar{
		width: 240px;
		float: right;
	}
	.sidewrapper{
		position: relative;
		padding: 20px 0;
		font-size: 13px;
		overflow: hidden;

		.sidetitle{
			border-bottom: 2px solid #ccc;
			color: #ccc;
			font-size: 14px;
			font-weight: bold;
			line-height: 1.2;
			margin-bottom: 16px;
			padding: 6px 0;
		}
		.side{
			text-align: center;
		}
		li{
			list-style: none;
		}
	}
</style>
