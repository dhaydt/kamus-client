<template>
	<!-- ============================ Hero Banner  Start================================== -->
	<div class="hero-banner full jumbo-banner">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-7 col-md-8">
					<!--<router-link to="#" class="header-promo light w-inline-block"><div class="label bg-success">NEW</div><div class="header-promo-text">Klioeo is now UK-Wide</div></router-link>-->
					<h1>
						Temukan <span class="text-info">arti kata</span> & makna kata
						disini!
					</h1>
					<p class="lead">Masukkan kata yang kamu cari disini.</p>

					<form @submit="onSubmit">
						<div class="row m-0">
							<div class="col-lg-5 col-md-5 col-sm-12 p-0">
								<input
									v-model="keyword"
									id="keyword"
									required
									type="text"
									class="form-control search-slt"
									placeholder="Kata"
								/>
							</div>
							<div class="col-lg-5 col-md-5 col-sm-12 p-0">
								<select
									v-model="selected"
									required
									class="form-control search-slt"
									id="kategori-kamus"
								>
									<option value="">Pilih Kategori</option>
									<option value="kbbi">KBBI</option>
									<option value="engin">Eng-Ind</option>
									<option value="ineng">Ind-Eng</option>
									<option value="istilah">Istilah</option>
									<option value="artiNama">Arti Nama</option>
								</select>
							</div>
							<div class="col-lg-2 col-md-2 col-sm-12 p-0">
								<button type="submit" class="btn btn-danger wrn-btn">
									<div v-if="loading">
										<b-spinner small type="grow"></b-spinner>
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
					<div class="featured-category dark">
						<ul>
							<li>Browse Category:</li>
							<li>
								<router-link
									to="/kbbi"
									data-toggle="tooltip"
									data-original-title="KBBI"
									>KBBI</router-link
								>
							</li>
							<li>
								<router-link
									to="/terjemahan"
									data-toggle="tooltip"
									data-original-title="Eng-Ind"
									>Eng-Ind</router-link
								>
							</li>
							<li>
								<router-link
									to="/terjemahan"
									data-toggle="tooltip"
									data-original-title="Ind-Eng"
									>Ind-Eng</router-link
								>
							</li>
							<li>
								<router-link
									to="/glossarium"
									data-toggle="tooltip"
									data-original-title="Istilah"
									>Istilah</router-link
								>
							</li>
							<li>
								<router-link
									to="/artinama"
									data-toggle="tooltip"
									data-original-title="Arti Nama"
									>Arti Nama</router-link
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-lg-5 col-md-4">
					<img
						src="assets/img/a-2.png"
						alt="kamus-kbbi-eng-ind"
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
	</div>
	<!-- ============================ Hero Banner End ================================== -->
</template>

<script>
import { BSpinner } from "bootstrap-vue";
import axios from "axios";
export default {
	data() {
		return {
			backendUrl: "",
			reportUrl: "/report",
			selected: "",
			loading: false,
			keyword: "",
			error: "",
			showDismissibleAlert: false,
			findUrl: {
				kbbi: "/find/",
				glos: "/findGlos/",
				nama: "/findNama/",
				eng: "/translateEng/",
				ind: "/translateInd/",
			},
		};
	},

	created() {
		// localStorage.popIstilah.clear();
		// localStorage.popKbbi.clear();
		this.mainUrl = localStorage.mainUrl;
		console.log(this.mainUrl);
	},

	components: {
		BSpinner,
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			var kamus = this.selected;
			this.showDismissibleAlert = false;
			this.loading = true;
			const backend = this.mainUrl;

			if (kamus === "kbbi") {
				console.log("cari di kbbi");
				try {
					const resp = await axios.get(
						backend + this.findUrl.kbbi + this.keyword
					);
					const kbbi = resp.data;
					// console.log("data", kbbi);

					const row = kbbi.kbbi.length;

					if (row === 0) {
						this.error = "Data tidak ada di kamus kami!";
						this.showDismissibleAlert = true;
						this.loading = false;

						console.log("row", row);
						await axios.post(backend + this.reportUrl, {
							kata: this.keyword,
							bidang: "KBBI",
						});
					} else {
						// console.log("data found");
						window.location.href = "/cari/kbbi/" + this.keyword;
					}
				} catch (err) {
					console.log("kbbi", err);
				}
			} else if (kamus === "istilah") {
				try {
					const resp = await axios.get(
						backend + this.findUrl.glos + this.keyword
					);
					const glos = resp.data;
					const row = glos.istilah.length;

					if (row === 0) {
						this.error = "Data Istilah tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(backend + this.reportUrl, {
							kata: this.keyword,
							bidang: "Istilah",
						});
					} else {
						window.location.href = "/cari/glosarium/" + this.keyword;
					}
				} catch (err) {
					console.log("istilah", err);
				}
			} else if (kamus === "artiNama") {
				console.log("cari di nama");
				try {
					const resp = await axios.get(
						backend + this.findUrl.nama + this.keyword
					);
					const nama = resp.data;
					const row = nama.nama.length;

					if (row === 0) {
						this.error = "Data Nama tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(backend + this.reportUrl, {
							kata: this.keyword,
							bidang: "Arti Nama",
						});
					} else {
						window.location.href = "/cari/artiNama/" + this.keyword;
					}
				} catch (err) {
					console.log("nama", err);
				}
			} else if (kamus === "engin") {
				try {
					const resp = await axios.get(
						backend + this.findUrl.eng + this.keyword
					);
					const nama = resp.data;
					const row = nama.engin.length;

					if (row === 0) {
						this.error = "Data Terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(backend + this.reportUrl, {
							kata: this.keyword,
							bidang: "ENG - IND",
						});
					} else {
						window.location.href = "/cari/engInd/" + this.keyword;
					}
				} catch (err) {
					console.log("EngIn", err);
				}
			} else {
				try {
					const resp = await axios.get(
						backend + this.findUrl.ind + this.keyword
					);
					const nama = resp.data;
					const row = nama.idEng.length;

					if (row === 0) {
						this.error = "Data Terjemahan tidak ditemukan";
						this.showDismissibleAlert = true;
						this.loading = false;

						await axios.post(backend + this.reportUrl, {
							kata: this.keyword,
							bidang: "IND - ENG",
						});
					} else {
						window.location.href = "/cari/indEng/" + this.keyword;
					}
				} catch (err) {
					console.log("inEng", err);
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.hero-banner {
	background: #f4f9fd;
}
h1 {
	font-family: Mulish, "sans-serif" !important;
}
</style>