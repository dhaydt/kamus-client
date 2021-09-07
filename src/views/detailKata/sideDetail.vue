<template>
	<div class="sideCol">
		<div class="kartu-kata light-box p-4">
			<h4>Kamus Istilah</h4>
			<ul v-for="kata in popIstilah.slice(0, 5)" :key="kata.id_glos">
				<li class="d-flex w-100 transform">
					<a href="#">{{ kata.judul_glos }} </a>
					<button type="button" class="ml-auto btn btn-primary p-1 m-0 viewer">
						{{ kata.view / 2 }}
					</button>
				</li>
			</ul>
		</div>
		<div class="cardIklan box-slice p-0">
			<img
				:src="iklan1"
				class="iklanLandscape"
				v-if="iklan1"
				alt="Slot Iklan"
			/>
		</div>
		<div class="kartu-kata light-box p-4">
			<h4>Kamus KBBI</h4>
			<ul v-for="kata in popKbbi.slice(0, 5)" :key="kata._id">
				<li class="d-flex w-100 transform">
					<a href="#">{{ kata.kata }} </a>
					<button type="button" class="ml-auto btn btn-primary p-1 m-0 viewer">
						{{ kata.view / 2 }}
					</button>
				</li>
			</ul>
		</div>
		<div class="cardIklan box-slice p-0">
			<img
				:src="iklan2"
				class="iklanLandscape"
				v-if="iklan2"
				alt="Slot Iklan"
			/>
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
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan[2].images;
		this.iklan2 = getImg + this.dataIklan[3].images;
		this.popKbbi = JSON.parse(localStorage.popKbbi);
		this.popIstilah = JSON.parse(localStorage.popIstilah);
	},
};
</script>

<style lang="scss">
.transform {
	text-transform: capitalize;
}
.viewer {
	border-radius: 50%;
}
</style>