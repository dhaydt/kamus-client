<template>
	<div class="kbbiDetail">
		<b-container>
			<b-row class="justify-content-center">
				<b-col lg="8" md="8" sm="12">
					<b-card-group v-if="bidang === 'kbbi'" deck class="mt-4">
						<b-card class="text-left"> banner iklan </b-card>
					</b-card-group>

					<b-card-group v-if="bidang === 'kbbi'" deck class="mt-4">
						<b-card class="text-left">
							<h6
								class="
									mb-0
									text-left
									section-label
									d-none d-lg-block d-xl-block
								"
							>
								Hasil pencarian Kamus untuk kata <em>{{ kata }}</em>
							</h6>
							<div class="practical-alert">
								{{ "Makna kata " + kata }}
							</div>
							<div class="text-left" v-for="kata in dataKata" :key="kata._id">
								<b-card class="capital">
									<h1 class="card-title">{{ kata.kata }}</h1>
									<b-card-text>
										<p class="makna" v-html="kata.keterangan"></p>
									</b-card-text>
								</b-card>
							</div>
						</b-card>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'glosarium'">
						<b-card class="text-left">
							<h6 class="mb-0 text-left section-label">
								Hasil pencarian Glosarium untuk kata <em>{{ kata }}</em>
							</h6>
							<div class="practical-alert">
								{{ "Makna kata " + kata }}
							</div>
							<div
								class="text-left"
								v-for="kata in dataKata"
								:key="kata.id_glos"
							>
								<b-card class="capital">
									<h1 class="card-title">{{ kata.judul_glos }}</h1>
									<b-card-text>
										<p class="makna ml-4">
											Bidang : <em>{{ kata.bid_glos }}</em>
										</p>
									</b-card-text>
									<p class="pl-4 ml-4">Makna : {{ kata.isi_glos }}</p>
								</b-card>
							</div>
						</b-card>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'artiNama'">
						<b-card class="text-left">
							<h6 class="mb-0 text-left section-label">
								Hasil pencarian Arti Nama untuk kata <em>{{ kata }}</em>
							</h6>
							<div class="practical-alert">
								{{ "Makna nama " + kata }}
							</div>
							<div class="text-left" v-for="kata in dataKata" :key="kata.id">
								<b-card class="capital">
									<h1 class="card-title">{{ kata.judul_nama }}</h1>
									<b-card-text>
										<p class="makna ml-4">
											Asal : <em>{{ kata.asal_nama }}</em>
										</p>
									</b-card-text>
									<p class="pl-4 ml-4">Makna : {{ kata.isi_nama }}</p>
									<p class="pl-4 ml-4">Kelamin : {{ kata.kelamin_nama }}</p>
								</b-card>
							</div>
						</b-card>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'engInd'">
						<b-card class="text-left">
							<h6 class="mb-0 text-left section-label">
								Hasil Terjemahan untuk kata <em>{{ kata }}</em>
							</h6>
							<div class="practical-alert">
								{{ "Makna nama " + kata }}
							</div>
							<div class="text-left" v-for="kata in dataKata" :key="kata.id">
								<b-card class="capital">
									<h1 class="card-title">{{ kata.judul_artikel }}</h1>
									<b-card-text>
										<p class="makna ml-4">
											<em>{{ kata.isi_artikel }}</em>
										</p>
									</b-card-text>
								</b-card>
							</div>
						</b-card>
					</b-card-group>

					<b-card-group deck class="mt-4" v-if="bidang === 'indEng'">
						<b-card class="text-left">
							<h6 class="mb-0 text-left section-label">
								Hasil pencarian Terjemahan untuk kata <em>{{ kata }}</em>
							</h6>
							<div class="practical-alert">
								{{ "Makna nama " + kata }}
							</div>
							<div class="text-left" v-for="kata in dataKata" :key="kata.id">
								<b-card class="capital">
									<h1 class="card-title">{{ kata.judul_artikel }}</h1>
									<b-card-text>
										<p class="makna ml-4">
											<em>{{ kata.isi_artikel }}</em>
										</p>
									</b-card-text>
								</b-card>
							</div>
						</b-card>
					</b-card-group>
				</b-col>
				<b-col lg="4" md="4" sm="8">
					<Side></Side>
				</b-col>
			</b-row>
		</b-container>
		<div id="mainBody" class="container text-center">
			<!-- <EllipsisLoader :loading="loading"></EllipsisLoader> -->
			<ul id="results"></ul>
		</div>
		<footer class="mt-4"></footer>
	</div>
</template>

<script>
import Side from "./sideDetail.vue";
import axios from "axios";
export default {
	data() {
		return {
			kata: "",
			bidang: "",
			dataKata: [],
			findUrl: {
				kbbi: "http://localhost:3002/find/",
				glos: "http://localhost:3002/findGlos/",
				nama: "http://localhost:3002/findNama/",
				eng: "http://localhost:3002/translateEng/",
				ind: "http://localhost:3002/translateInd/",
			},
		};
	},

	created() {
		console.log(this.$route.params.kata);
		this.kata = this.$route.params.kata;
		this.bidang = this.$route.params.bidang;
		this.cariKata();
	},

	components: {
		Side,
	},

	methods: {
		async cariKata() {
			try {
				if (this.bidang === "kbbi") {
					const res = await axios.get(this.findUrl.kbbi + this.kata);
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
					const res = await axios.get(this.findUrl.glos + this.kata);
					this.dataKata = res.data;
					// console.log(this.dataKata);
				} else if (this.bidang === "artiNama") {
					const res = await axios.get(this.findUrl.nama + this.kata);
					this.dataKata = res.data;
				} else if (this.bidang === "engInd") {
					const res = await axios.get(this.findUrl.eng + this.kata);
					this.dataKata = res.data;
				} else if (this.bidang === "indEng") {
					const res = await axios.get(this.findUrl.ind + this.kata);
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
	clear: both;
	font-size: 12px;
	font-weight: 700;
	line-height: 1;
	text-transform: uppercase;
	font-family: Arial, sans-serif;
	letter-spacing: 0.1em;
	margin: 18px 0 18px;
	margin-left: -6px;
	display: inline-block;
	color: #fff;
	background-color: #07c;
	padding: 6px 10px;
	position: relative;
}

.section-label:after {
	content: "";
	display: block;
	width: 0;
	height: 0;
	border: 0 solid transparent;
	border-top-color: #004a80;
	border-width: 7px 0 0 9px;
	position: absolute;
	top: 100%;
	left: 0;
}

body.languages .section-label:after {
	border-top-color: #004a80;
}

@media (min-width: 975px) {
	.section-label {
		left: -29px;
		padding-left: 29px;
		padding-right: 15px;
		border-bottom: 0 none;
		margin-left: 0;
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