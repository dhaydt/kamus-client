<template>
	<div class="sidePage">
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Istilah</h4>
			<ul v-for="kata in randomKata.istilah" :key="kata.id_glos">
				<li>
					<a href="#">{{ kata.judul_glos }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
				<img
					class="iklanLandscape"
					:src="iklan1"
					v-if="iklan1"
					alt="Slot Iklan"
				/>
			</div>
		</div>
		<div class="kartu-kata light-box p-4">
			<h4>Kamus KBBI</h4>
			<ul v-for="kata in randomKata.kbbi" :key="kata._id">
				<li>
					<a href="#">{{ kata.kata }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
				<img
					class="iklanLandscape"
					:src="iklan2"
					v-if="iklan2"
					alt="Slot Iklan"
				/>
			</div>
		</div>
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Eng-Ind</h4>
			<ul v-for="kata in randomKata.engIn" :key="kata.id">
				<li>
					<a href="#">{{ kata.judul_artikel }}</a>
				</li>
			</ul>
		</div>
		<div class="kartu-kata light-box p-4">
			<div class="cardIklan">
				<img
					class="iklanLandscape"
					:src="iklan3"
					v-if="iklan3"
					alt="Slot Iklan"
				/>
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
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan.sideAtas[0].images;
		this.iklan2 = getImg + this.dataIklan.sideTengah[0].images;
		this.iklan3 = getImg + this.dataIklan.sideBawah[0].images;
		this.randomKata = JSON.parse(localStorage.randomKata);
	},
};
</script>

<style lang="scss" scoped>
</style>