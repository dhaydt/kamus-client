<template>
	<div class="kbbi">
		<Kbbi />
	</div>
</template>

<script>
// import Main from "@/components/kbbi/Main.vue";
import Kbbi from "../components/kbbi/Search.vue";

export default {
	metaInfo() {
		return {
			title: "Kamus KBBI Terjemahan Istilah dan Artinama - KamusKBBI.id",
		};
	},
	components: {
		// Main,
		Kbbi,
	},
};
</script>

<style lang="scss" scoped>
.kbbi {
	background-color: #eef1f8 !important;
}
</style>