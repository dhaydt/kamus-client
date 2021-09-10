<template>
	<div class="detailKata mainMenu">
		<!-- ============================ Page Title Start================================== -->
		<div class="page-title search-form" style="padding: 4rem 0">
			<div class="container">
				<div class="row m-0 justify-content-left">
					<div class="col-lg-8 col-md-8">
						<div class="col-12">
							<div class="guide">
								Halaman ini khusus mencari arti kata di kamus {{ cariDi }}. Jika
								ingin mencari makna di kamus lain, silahkan pindah halaman
								terlebih dahulu melalui menu di atas
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
					<div class="col-lg-8 col-md-12 col-sm-12" style="padding: 0 15px">
						<div v-if="bidang === 'kbbi'">
							<Kbbi
								:dataKata="dataKata"
								:kata="kata"
								:dataIklan="dataIklan"
							></Kbbi>
						</div>

						<div v-if="bidang === 'glosarium'">
							<Istilah
								:dataIklan="dataIklan"
								:dataKata="dataKata"
								:kata="kata"
							></Istilah>
						</div>

						<div v-if="bidang === 'artiNama'">
							<ArtiNama
								:dataIklan="dataIklan"
								:dataKata="dataKata"
								:kata="kata"
							></ArtiNama>
						</div>

						<div v-if="bidang === 'engInd'">
							<EngIn
								:dataIklan="dataIklan"
								:dataKata="dataKata"
								:kata="kata"
							></EngIn>
						</div>

						<div v-if="bidang === 'indEng'">
							<InEng
								:dataIklan="dataIklan"
								:dataKata="dataKata"
								:kata="kata"
							></InEng>
						</div>
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
import Side from "./sideDetail.vue";
import axios from "axios";
import Kbbi from "./kbbi.vue";
import Istilah from "./istilah.vue";
import ArtiNama from "./artiNama.vue";
import EngIn from "./engIn.vue";
import InEng from "./inEng.vue";
export default {
	data() {
		return {
			kata: "",
			bidang: "",
			dataKata: [],
			keyword: "",
			error: "",
			loading: false,
			showDismissibleAlert: false,
			dataIklan: [],
			mainUrl: "",
			iklan: "",
			cariDi: "",
			findUrl: {
				kbbi: "/find/",
				glos: "/findGlos/",
				nama: "/findNama/",
				eng: "/translateEng/",
				ind: "/translateInd/",
			},
		};
	},
	metaInfo() {
		return {
			title:
				`Arti kata ` + this.kata + ` Menurut Kamus Besar Bahasa Indonesia KBBI`,
		};
	},

	created() {
		this.dataIklan = JSON.parse(localStorage.dataIklan);
		this.mainUrl = localStorage.mainUrl;
		const getImg = this.mainUrl + "/images/client/";
		this.iklan = getImg + this.dataIklan[1].images;
		console.log(this.$route.params.kata);
		this.kata = this.$route.params.kata;
		this.bidang = this.$route.params.bidang;
		this.cariKata();
		this.dimana();
	},

	components: {
		Side,
		Kbbi,
		Istilah,
		ArtiNama,
		EngIn,
		InEng,
	},

	methods: {
		dimana() {
			var kamus = this.bidang;
			if (kamus == "kbbi") {
				this.cariDi = "KBBI";
			} else if (kamus == "glosarium") {
				this.cariDi = "Istiilah";
			} else if (kamus == "artiNama") {
				this.cariDi = "Arti Nama";
			} else if (kamus == "engin") {
				this.cariDi = "Eng - Ind";
			} else {
				this.cariDi = "Ind - Eng";
			}
		},
		async onSubmit(e) {
			e.preventDefault();
			var kamus = this.bidang;
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
						// window.location.href = "/cari/kbbi/" + this.keyword;
						history.pushState(null, null, "/cari/kbbi/" + this.keyword);
						this.kata = this.keyword;
						this.bidang = "kbbi";
						this.cariKata();
						this.loading = false;
					}
				} catch (err) {
					console.log("kbbi", err);
				}
			} else if (kamus === "glosarium") {
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
						// window.location.href = "/cari/glosarium/" + this.keyword;
						history.pushState(null, null, "/cari/glosarium/" + this.keyword);
						this.kata = this.keyword;
						this.bidang = "glosarium";
						this.cariKata();
						this.loading = false;
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
						// window.location.href = "/cari/artiNama/" + this.keyword;
						history.pushState(null, null, "/cari/artiNama/" + this.keyword);
						this.kata = this.keyword;
						this.bidang = "artiNama";
						this.cariKata();
						this.loading = false;
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
						// window.location.href = "/cari/engInd/" + this.keyword;
						history.pushState(null, null, "/cari/engInd/" + this.keyword);
						this.kata = this.keyword;
						this.bidang = "engInd";
						this.cariKata();
						this.loading = false;
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
						// window.location.href = "/cari/indEng/" + this.keyword;
						history.pushState(null, null, "/cari/indEng/" + this.keyword);
						this.kata = this.keyword;
						this.bidang = "indEng";
						this.cariKata();
						this.loading = false;
					}
				} catch (err) {
					console.log("inEng", err);
				}
			}
		},
		async cariKata() {
			try {
				if (this.bidang === "kbbi") {
					const res = await axios.get(
						this.mainUrl + this.findUrl.kbbi + this.kata
					);
					const data = res.data;

					String.prototype.jsonEncode = function () {
						return (
							this.replace(/&lt;\/b&gt;/g, "</b>")
								/* eslint-disable */
								.replace(/&lt;b&gt;/g, "<b>")
								.replace(/&lt;\/sup&gt;/g, "</sup>")
								.replace(/&lt;sup&gt;/g, "<sup>")
								.replace(/&lt;\/i&gt;/g, "</i>")
								.replace(/&lt;i&gt;/g, "<i>")
								.replace(/&lt;br&gt;/g, "<br>")
								.replace(/\\b/g, "\\b")
								.replace(/\\f/g, "\\f")
						);
					};
					var getString = JSON.stringify(data);
					var transform = getString.jsonEncode();
					this.dataKata = JSON.parse(transform);
				} else if (this.bidang === "glosarium") {
					const res = await axios.get(
						this.mainUrl + this.findUrl.glos + this.kata
					);
					this.dataKata = res.data;
					// console.log(this.dataKata);
				} else if (this.bidang === "artiNama") {
					const res = await axios.get(
						this.mainUrl + this.findUrl.nama + this.kata
					);
					this.dataKata = res.data;
				} else if (this.bidang === "engInd") {
					const res = await axios.get(
						this.mainUrl + this.findUrl.eng + this.kata
					);
					this.dataKata = res.data;
				} else if (this.bidang === "indEng") {
					const res = await axios.get(
						this.mainUrl + this.findUrl.ind + this.kata
					);
					this.dataKata = res.data;
					console.log(this.dataKata);
				}
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.kbbiDetail {
	background-color: #eef1f8;
	min-height: 90vh;
}

.section-label {
	font-weight: 600;
	em {
		text-transform: capitalize;
		font-weight: 900;
	}
}

footer.synonym-copyright,
.practical-alert {
	font-size: 14px;
	line-height: 1.4;
	color: gray;
	text-transform: capitalize;
}
.card-title {
	font-size: 28px;
	text-transform: capitalize;
}

.makna {
	font-size: 20px;
}
</style>