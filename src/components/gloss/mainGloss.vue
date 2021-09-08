<template>
	<div class="mainMenu mainGlos">
		<div class="page-title search-form" style="padding: 4rem 0">
			<div class="container">
				<div class="row m-0 justify-content-left">
					<div class="col-lg-8 col-md-8">
						<div class="col-12">
							<div class="guide">
								Halaman ini khusus mencari arti kata di kamus KBBI. Jika ingin
								mencari makna di kamus lain, silahkan pindah halaman terlebih
								dahulu melalui menu di atas
							</div>
						</div>
						<form class="search-big-form shadows" @submit="onSubmit">
							<div class="row m-0">
								<div class="col-lg-9 col-md-9 col-sm-9 p-0">
									<div class="form-group">
										<input
											type="text"
											class="form-control l-radius b-0 b-r"
											placeholder="Kata"
											v-model="keyword"
											required
										/>
									</div>
								</div>
								<div class="col-lg-3 col-md-3 col-sm-3 p-0">
									<button
										type="submit"
										class="btn theme-bg r-radius full-width"
									>
										<div v-if="loading">
											<b-spinner small variant="primary"></b-spinner>
										</div>
										<span v-if="!loading">Cari</span>
									</button>
								</div>
							</div>
						</form>
						<b-alert
							v-model="showDismissibleAlert"
							class="mt-2"
							variant="danger"
							dismissible
						>
							{{ error }}
						</b-alert>
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
import Main from "./glossMain.vue";
import Side from "./glosSide.vue";
import axios from "axios";
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
		this.urlReport = this.mainUrl + "/report";
		this.urlFind = this.mainUrl + "/findGlos/";
		this.dataIklan = JSON.parse(localStorage.dataIklan);
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			this.showDismissibleAlert = false;
			this.loading = true;
			try {
				const resp = await axios.get(this.urlFind + this.keyword);
				const data = resp.data;
				const row = data.istilah.length;

				if (row === 0) {
					this.error = "Data tidak ditemukan!";
					this.showDismissibleAlert = true;
					this.loading = false;

					await axios.post(this.urlReport, {
						kata: this.keyword,
						bidang: "Istilah",
					});
				} else {
					window.location.href = "/cari/glosarium/" + this.keyword;
				}
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
</style>

