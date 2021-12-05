<template>
	<div id="tabbar">
		<div class="tabbar-item">首页</div>
		<div class="tabbar-item">分类</div>
		<div class="tabbar-item">购物车</div>
		<div class="tabbar-item">我的</div>	  
	</div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style>
	#tabbar {
		display: flex;
		background-color: #f6f6f6;
		
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		
		box-shadow: 0 -1px 1px rgba(100,100,100,.1);
	}
	.tabbar-item {
		flex-grow: 1;
		text-align: center;
		height: 49px;
	}
</style>
