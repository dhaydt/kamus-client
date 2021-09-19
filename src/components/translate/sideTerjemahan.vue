<template>
	<div class="sidePage">
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Nama</h4>
			<ul v-for="kata in randomKata.nama" :key="kata.id">
				<li>
					<a href="#">{{ kata.judul_nama }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
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
		<div class="kartu-kata light-box p-4">
			<h4>Kamus KBBI</h4>
			<ul v-for="kata in randomKata.kbbi" :key="kata._id">
				<li>
					<a :href="find.kbbi + kata.kata">{{ kata.kata }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
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
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Eng-Ind</h4>
			<ul v-for="kata in randomKata.engIn" :key="kata.id">
				<li>
					<a :href="find.eng + kata.judul_artikel">{{ kata.judul_artikel }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
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
	</div>
</template>

<script>
export default {
	props: ["dataIklan"],
	data() {
		return {
			iklan1: "",
			iklan2: "",
			iklan3: "",
			imgData: [],
			randomKata: [],
			find: [],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan.sideAtas[0].images;
		this.iklan2 = getImg + this.dataIklan.sideTengah[0].images;
		this.iklan3 = getImg + this.dataIklan.sideBawah[0].images;
		this.randomKata = JSON.parse(localStorage.randomKata);
		this.find = JSON.parse(localStorage.findUrl);
	},
};
</script>

<style lang="scss" scoped>
</style>