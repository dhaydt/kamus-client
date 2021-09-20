<template>
	<!-- ============================ Landing Perkategori Section Start ==================================== -->
	<section class="min-sec">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-md-9">
					<div class="sec-heading">
						<h2>
							<span class="theme-cl-2">KamusKBBI.id</span> 5 kamus dalam 1
							website
						</h2>
						<p>Kamus KBBI, Eng-Ind, Ind-Eng, Istilah dan Arti Nama.</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<h4>Kamus KBBI</h4>
								<p>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>
							</div>
							<div class="mx-4 mt-5">
								<router-link to="/kbbi" class="btn btn-theme blue dark"
									>Detail</router-link
								>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<h4>Kamus Eng-Ind</h4>
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged.
								</p>
							</div>
							<div class="mx-4 mt-5">
								<router-link to="/terjemahan" class="btn btn-theme blue dark"
									>Detail</router-link
								>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<h4>Kamus Ind-Eng</h4>
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English.
									Many desktop publishing packages and web page editors now use
									...
								</p>
							</div>
							<div class="mx-4 mt-5">
								<router-link to="/terjemahan" class="btn btn-theme blue dark"
									>Detail</router-link
								>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<h4>Kamus Istilah</h4>
								<p>
									There are many variations of passages of Lorem Ipsum
									available, but the majority have suffered alteration in some
									form, by injected humour, or randomised words which don't look
									even slightly believable. If you are going to use a passage of
									Lorem Ipsum, you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>
							</div>
							<div class="mx-4 mt-5">
								<router-link to="/glossarium" class="btn btn-theme blue dark"
									>Detail</router-link
								>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<InFeedAdsense
							style="display: block"
							data-ad-client="ca-pub-9333981154484827"
							data-ad-slot="5683973304"
							data-ad-format="auto"
							data-full-width-responsive="true"
						></InFeedAdsense>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<h4>Kamus Artinama</h4>
								<p>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
									The point of using Lorem Ipsum is that it has a more-or-less
									normal distribution of letters, as opposed to using 'Content
									here, content here', making it look like readable English.
									Many desktop publishing packages and web page editors now use
									...
								</p>
							</div>
							<div class="mx-4 mt-5">
								<router-link to="/artinama" class="btn btn-theme blue dark"
									>Detail</router-link
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ============================ Landing PerKategori Section End ==================================== -->
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			backendUrl: "",
			getAdUrl: "/getAtasJudul",
			getBJ: "/getBawahJudul",
			getAR: "/getAtasRelated",
			getAL: "/getAtasLainnya",
			getAS: "/getAtasShared",
			getSA: "/getSideAtas",
			getST: "/getSideTengah",
			getSB: "/getSideBawah",
			iklan1: "",
		};
	},
	created() {
		this.backendUrl = localStorage.mainUrl;
		this.getIklan();
		this.randomKata();
	},

	mounted() {
		const getImg = this.backendUrl + "/images/client/";
		const dataIklan = JSON.parse(localStorage.dataIklan);
		this.iklan1 = getImg + dataIklan.atasJudul[0].images;
	},

	methods: {
		async getIklan() {
			const resAj = await axios.get(this.backendUrl + this.getAdUrl);
			const AJ = resAj.data;

			const resBj = await axios.get(this.backendUrl + this.getBJ);
			const BJ = resBj.data;

			const resAr = await axios.get(this.backendUrl + this.getAR);
			const AR = resAr.data;

			const resAl = await axios.get(this.backendUrl + this.getAL);
			const AL = resAl.data;

			const resAs = await axios.get(this.backendUrl + this.getAS);
			const AS = resAs.data;

			const resSa = await axios.get(this.backendUrl + this.getSA);
			const SA = resSa.data;
			const resSt = await axios.get(this.backendUrl + this.getST);
			const ST = resSt.data;
			const resSb = await axios.get(this.backendUrl + this.getSB);
			const SB = resSb.data;

			const dataIklan = {
				atasJudul: AJ,
				bawahJudul: BJ,
				atasRelated: AR,
				atasLainnya: AL,
				atasShared: AS,
				sideAtas: SA,
				sideTengah: ST,
				sideBawah: SB,
			};
			const share = JSON.stringify(dataIklan);
			localStorage.setItem("dataIklan", share);
			// this.iklanImage = this.backendUrl + this.urlImg + data;
			// this.getImageData();
		},

		async getImageData() {
			const resp = await axios.get(
				this.backendUrl + this.urlImageData + this.idImg
			);
			const data = resp.data.data[0];
			console.log(data.title);
			this.iklanImage = this.backendUrl + this.urlImg + data.images;
		},

		async randomKata() {
			const resp = await axios.get(this.backendUrl + "/random");
			localStorage.setItem("randomKata", JSON.stringify(resp.data));
		},
	},
};
</script>

<style lang="scss">
.iklanBox {
	max-width: 100%;
	height: auto;
}
</style>