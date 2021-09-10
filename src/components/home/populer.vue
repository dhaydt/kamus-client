<template>
	<!-- ============================ Kata Popular Section Start ==================================== -->
	<section class="gray-light">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7 col-md-9">
					<div class="sec-heading">
						<h2>Kata yang Sering <span class="theme-cl-2">Dicari</span></h2>
						<p>
							Setiap hari 5-6k pengunjung mencari makna kata di web
							kamuskbbi.id. Berikut kata yang sering mereka cari dikelompokkan
							sesuai kategorinya.
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="">
								<h4 class="mx-4 mb-4">Kamus KBBI</h4>
								<div class="random-kata">
									<ul class="btn-rainbow">
										<li v-for="kata in popKbbi" :key="kata._id">
											<router-link to="#" class="random-kata-list">{{
												kata.kata
											}}</router-link>
										</li>
									</ul>
								</div>
								<div class="mx-4 mt-4">
									<router-link to="/kbbi" class="btn btn-theme blue dark"
										>Detail</router-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="">
								<h4 class="ml-4 mb-4">Kamus Eng-Ind</h4>
								<div class="random-kata">
									<ul class="btn-rainbow">
										<li v-for="kata in popEngIn" :key="kata.id">
											<a href="#" class="random-kata-list style-5">{{
												kata.judul_artikel
											}}</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="mx-4 mt-4">
								<a href="/terjemahan" class="btn btn-theme blue dark">Detail</a>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="">
								<h4 class="ml-4 mb-4">Kamus Ind-Eng</h4>
								<div class="random-kata">
									<ul class="btn-rainbow">
										<li v-for="kata in popInEng" :key="kata.id">
											<a href="#" class="random-kata-list style-5">{{
												kata.judul_artikel
											}}</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="mx-4 mt-4">
								<a href="/terjemahan" class="btn btn-theme blue dark">Detail</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="mx-4">
								<img class="iklanBox" :src="iklan2" alt="" />
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="">
								<h4 class="ml-4 mb-4">Kamus Istilah</h4>
								<div class="random-kata">
									<ul class="btn-rainbow">
										<li v-for="kata in popIstilah" :key="kata.id">
											<a href="#" class="random-kata-list style-5">{{
												kata.judul_glos
											}}</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="mx-4 mt-4">
								<a href="/istilah" class="btn btn-theme blue dark">Detail</a>
							</div>
						</div>
					</div>
				</div>
				<!-- Single Item -->
				<div class="col-lg-4 col-md-6 col-sm-12">
					<div class="box-kamus">
						<div class="">
							<div class="">
								<h4 class="ml-4 mb-4">Kamus ArtiNama</h4>
								<div class="random-kata">
									<ul class="btn-rainbow">
										<li v-for="kata in popNama" :key="kata.id">
											<a href="#" class="random-kata-list style-5">{{
												kata.judul_nama
											}}</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="mx-4 mt-4">
								<a href="/artinama" class="btn btn-theme blue dark">Detail</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ============================ Kata Popular Section End ==================================== -->
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			mainUrl: "",
			urlPopKbbi: "/kamus/pop",
			urlPopIstilah: "/istilah/pop",
			urlPopNama: "/nama/pop",
			urlPopEngIn: "/engin/pop",
			urlPopInEng: "/ineng/pop",
			iklan2: "",
			dataImage: [],
			popKbbi: [],
			popIstilah: [],
			popNama: [],
			popEngIn: [],
			popInEng: [],
		};
	},

	created() {
		this.mainUrl = localStorage.mainUrl;
		this.getPopKbbi();
		this.getPopNama();
		this.getPopIstilah();
		this.getPopEngIn();
		this.getPopInEng();
	},

	mounted() {
		const getImg = this.mainUrl + "/images/client/";
		const dataIklan = JSON.parse(localStorage.getIklan);
		this.iklan1 = getImg + dataIklan[1].images;
	},

	methods: {
		async getPopKbbi() {
			const resp = await axios.get(this.mainUrl + this.urlPopKbbi);
			this.popKbbi = resp.data;
			localStorage.setItem("popKbbi", JSON.stringify(this.popKbbi));
		},
		async getPopNama() {
			const resp = await axios.get(this.mainUrl + this.urlPopNama);
			this.popNama = resp.data;
		},
		async getPopEngIn() {
			const resp = await axios.get(this.mainUrl + this.urlPopEngIn);
			this.popEngIn = resp.data;
		},
		async getPopInEng() {
			const resp = await axios.get(this.mainUrl + this.urlPopInEng);
			this.popInEng = resp.data;
		},
		async getPopIstilah() {
			const resp = await axios.get(this.mainUrl + this.urlPopIstilah);
			this.popIstilah = resp.data;
			localStorage.setItem("popIstilah", JSON.stringify(this.popIstilah));
		},
	},
};
</script>

<style lang="scss" scoped>
div.random-kata > ul > li:nth-child(1) > a {
	background: #e8f9ee;
	color: #1ac556;
}
div.random-kata > ul > li:nth-child(2) > a {
	background: #ffebf3;
	color: #ff63a5;
}
div.random-kata > ul > li:nth-child(3) > a {
	background: #fef6e0;
	color: #f4bd0e;
}
div.random-kata > ul > li:nth-child(4) > a {
	background: #e6f7fc;
	color: #09b2e4;
}
div.random-kata > ul > li:nth-child(5) > a {
	background: #ffebf3;
	color: #ff63a5;
}
div.random-kata > ul > li:nth-child(6) > a {
	background: #ffeee8;
	color: #ff5722;
}
div.random-kata > ul > li:nth-child(7) > a {
	background: #fef6e0;
	color: #f4bd0e;
}
div.random-kata > ul > li:nth-child(8) > a {
	background: #ffeee8;
	color: #ff5722;
}
div.random-kata > ul > li:nth-child(9) > a {
	background: #e6f7fc;
	color: #09b2e4;
}
div.random-kata > ul > li:nth-child(10) > a {
	background: #e8f9ee;
	color: #1ac556;
}
</style>