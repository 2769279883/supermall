<template>
	<div class="tabbar-item" @click="itemClick">
		<div v-if="!isActive">
			<slot  name="item-icon"></slot>
		</div>
		<div v-else>
			<slot  name="item-icon-active"></slot>
		</div>
		<div :style="activeStyle" :class="{active: isActive}">
			<slot  name="item-text"></slot>
		</div>
		 
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			activeColor: {
				type: String,
				default: 'red'
			}
		},
		data() {
			return {
				// isActive: false,
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1;
			},
			activeStyle() {
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path);
			}
		}
		
	}
</script>

<style>
	.tabbar-item {
		flex-grow: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tabbar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle; /* 去掉图片下面的3px */
		margin-bottom: 2px;
	}
	.active {
		color: red;
	}
</style>
