<template>
	<div>
		<h1>this is a vue app</h1>
		<div>i counted for {{counter}} times.</div>
		<div class="fromData">from data: {{data}}</div>
		<jsx-component></jsx-component>
	</div>
</template>
<script lang="vjsx">
	const something = require('./data.js');
	const JsxComponent = require('./JsxComponent.vue');
	module.exports = {
		name: 'app',
		data() {
			return {
				counter: 0,
				data: something.data
			}
		},
		created() {
			setInterval(() => {
				this.counter += 1;
			}, 1e3)
		},
		components: {
			JsxComponent: require('vue').extend(JsxComponent)
		}
	}
</script>

<style scoped>
	.fromData {
		font-weight: bold;
		color: #374832;
	}
</style>