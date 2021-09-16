<template>
	<div class="mainMenu mainGlos">
		<div class="page-title search-form" style="padding: 4rem 0">
			<div class="container">
				<div class="row m-0 justify-content-left">
					<div class="col-lg-8 col-md-8">
						<div class="col-12">
							<h1 class="text-white">Tentang Kami</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- ============================ Page Title End ================================== -->
		<section class="gray-light">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-12 col-sm-12">
						<Main :dataIklan="dataIklan"></Main>
					</div>
					<div class="col-lg-4 col-md-12 col-sm-12">
						<Side :dataIklan="dataIklan"></Side>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Main from "./mainPage.vue";
import Side from "./sidePage.vue";
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
		Side,
	},

	created() {
		this.mainUrl = localStorage.mainUrl;
		this.dataIklan = JSON.parse(localStorage.dataIklan);
	},
};
</script>

<style lang="scss" scoped>
</style>

