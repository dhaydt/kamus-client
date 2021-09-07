<template>
	<div id="app">
		<router-view />
	</div>
</template>
<script>
export default {
	data() {
		return {
			mainUrl: "http://localhost:3002",
		};
	},
	mounted() {
		localStorage.setItem("mainUrl", this.mainUrl);
	},
};
</script>
<style lang="scss">
#app {
	font-family: Mulish, sans-serif !important;
}
</style>
