<template>
	<div class="mainMenu mainGlos">
		<div class="page-title search-form" style="padding: 4rem 0">
			<div class="container">
				<div class="row m-0 justify-content-left">
					<h2 class="text-white">Hubungi Kami</h2>
				</div>
			</div>
		</div>
		<!-- ============================ Page Title End ================================== -->
		<section class="gray-light">
			<div class="container overlio-top">
				<div class="row m-0">
					<Main :dataIklan="dataIklan"></Main>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Main from "./mainPage.vue";
export default {
	data() {
		return {
			keyword: "",
			error: "",
			loading: false,
			dataIklan: [],
			showDismissibleAlert: false,
			mainUrl: "",
			urlReport: "",
			urlFind: "",
		};
	},
	components: {
		Main,
	},

	created() {
		this.mainUrl = localStorage.mainUrl;
		this.dataIklan = JSON.parse(localStorage.dataIklan);
	},
};
</script>

<style lang="scss" scoped>
</style>

