<template>
	<div class="artiNama">
		<Artikata></Artikata>
	</div>
</template>

<script>
import Artikata from "../components/artinama/mainNama.vue";
export default {
	metaInfo() {
		return {
			title: "KBBI | Arti Nama",
		};
	},
	components: {
		Artikata,
	},
};
</script>

<style lang="scss" scoped>
.artiNama {
	background-color: #eef1f8 !important;
}
</style>