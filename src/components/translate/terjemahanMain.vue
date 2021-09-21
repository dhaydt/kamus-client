<template>
	<div class="kbbi-search mainMenu">
		<!-- ============================ Page Title Start================================== -->
		<div class="page-title search-form" style="padding: 4rem 0">
			<div class="container">
				<div class="row m-0 justify-content-left">
					<div class="col-lg-8 col-md-8">
						<div class="col-12">
							<div class="guide">
								Halaman ini khusus mencari arti kata di kamus Terjemahan. Jika
								ingin mencari makna di kamus lain, silahkan pindah halaman
								terlebih dahulu melalui menu di atas
							</div>
						</div>
						<form class="search-big-form shadows" @submit="onSubmit">
							<div class="row m-0">
								<div class="col-lg-5 col-md-5 col-sm-12 p-0">
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
								<div class="col-lg-5 col-md-5 col-sm-12 p-0">
									<select
										v-model="selected"
										required
										class="form-control bor-rad-0"
										id="kategori-kamus"
									>
										<option value="">Pilih Bahasa tujuan</option>
										<option value="engin">Eng-Ind</option>
										<option value="ineng">Ind-Eng</option>
									</select>
								</div>
								<div class="col-lg-2 col-md-2 col-sm-12 p-0">
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
							class="mt-4"
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
import axios from "axios";
import Main from "./mainTerjemahan.vue";
import Side from "./sideTerjemahan.vue";
export default {
	data() {
		return {
			keyword: "",
			selected: "",
			error: "",
			loading: false,
			dataIklan: [],
			showDismissibleAlert: false,
			mainUrl: "",
			urlReport: "",
			urlFindEng: "",
			urlFindInd: "",
		};
	},
	components: {
		Main,
		Side,
	},

	created() {
		this.mainUrl = localStorage.mainUrl;
		this.urlReport = this.mainUrl + "/report";
		this.urlFindEng = this.mainUrl + "/translateEng/";
		this.urlFindInd = this.mainUrl + "/translateInd/";
		this.dataIklan = JSON.parse(localStorage.dataIklan);
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			var bahasa = this.selected;
			this.loading = true;

			if (bahasa == "engin") {
				try {
					const resp = await axios.get(this.urlFindEng + this.keyword);
					const data = resp.data;
					const row = data.engin.length;

					if (row === 0) {
						this.loading = false;
						this.error = "Data terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;

						await axios.post(this.urlReport, {
							kata: this.keyword,
							bidang: "ENG - IND",
						});
					} else {
						window.location.href = "/cari/engInd/" + this.keyword;
					}
				} catch (err) {
					console.log(err);
				}
			} else {
				try {
					const resp = await axios.get(this.urlFindInd + this.keyword);
					const data = resp.data;
					const row = data.idEng.length;

					if (row === 0) {
						this.loading = false;
						this.error = "Data terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;

						await axios.post(this.urlReport, {
							kata: this.keyword,
							bidang: "IND - ENG",
						});
					} else {
						window.location.href = "/indEng/" + this.keyword;
					}
				} catch (err) {
					console.log(err);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.main-col {
	background-color: #fff;
}
</style>