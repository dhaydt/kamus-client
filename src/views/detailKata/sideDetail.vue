<template>
	<div class="sideKata">
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Istilah Populer</h4>
			<ul v-for="kata in popIstilah.slice(0, 5)" :key="kata.id_glos">
				<li class="d-flex w-100 transform">
					<a :href="find.istilah + kata.judul_glos">{{ kata.judul_glos }} </a>
					<span class="badge badge-primary ml-auto viewer">{{
						kata.view / 2
					}}</span>
				</li>
			</ul>
		</div>
		<div class="cardIklan box-slice p-0">
			<InFeedAdsense
				class="adsbygoogle"
				style="display: block"
				data-ad-client="ca-pub-9333981154484827"
				data-ad-slot="5683973304"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></InFeedAdsense>
		</div>
		<div class="kartu-kata light-box p-4">
			<h4>Kamus KBBI Populer</h4>
			<ul v-for="kata in popKbbi.slice(0, 5)" :key="kata._id">
				<li class="d-flex w-100 transform">
					<a :href="find.kbbi + kata.kata">{{ kata.kata }} </a>
					<span class="badge badge-primary ml-auto viewer">{{
						kata.view / 2
					}}</span>
				</li>
			</ul>
		</div>
		<div class="cardIklan box-slice p-0">
			<InFeedAdsense
				class="adsbygoogle"
				style="display: block"
				data-ad-client="ca-pub-9333981154484827"
				data-ad-slot="5683973304"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></InFeedAdsense>
		</div>
	</div>
</template>

<script>
export default {
	props: ["dataKata", "dataIklan"],
	data() {
		return {
			iklan1: "",
			iklan2: "",
			popKbbi: [],
			popIstilah: [],
			find: [],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan.sideAtas[0].images;
		this.iklan2 = getImg + this.dataIklan.sideTengah[0].images;
		this.popKbbi = JSON.parse(localStorage.popKbbi);
		this.popIstilah = JSON.parse(localStorage.popIstilah);
		this.find = JSON.parse(localStorage.findUrl);
	},
};
</script>

<style lang="scss">
.transform {
	text-transform: capitalize;
}
.badge.viewer {
	font-size: 12px;
	font-weight: 900;
	color: white;
	padding: 5px;
}
</style>