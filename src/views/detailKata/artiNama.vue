<template>
	<div class="artiNama">
		<div class="box-detail">
			<div class="box-slice">
				<div class="box-detail-single">
					<h1>Arti Nama {{ kata }} KBBI Kamus Bahasa Indonesia</h1>
				</div>
				<div class="cardIklan box-slice p-0">
					<img
						:src="iklan1"
						class="iklanLandscape"
						v-if="iklan1"
						alt="Slot Iklan"
					/>
				</div>
				<p>
					Arti nama {{ kata }}, maksud, definisi, pengertian dan makna kata
					terkait dengan arti nama {{ kata }}.
				</p>

				<h2>Arti Nama {{ kata }}</h2>

				<div v-for="kata in dataKata.nama" :key="kata.id">
					<p>
						<strong>{{ kata.judul_nama }}</strong
						>: {{ kata.isi_nama }},
						<span
							><em>{{ kata.kelamin_nama }}</em></span
						>
					</p>
					<p><strong>Asal nama</strong>: {{ kata.asal_nama }},</p>
				</div>
				<div class="cardIklan box-slice p-0">
					<img
						:src="iklan2"
						class="iklanLandscape"
						v-if="iklan2"
						alt="Slot Iklan"
					/>
				</div>

				<div class="box-detail-single">
					<h3>Related Word</h3>
					<b-table
						:items="dataKata.related"
						:fields="fields"
						striped
						hover
						head-variant="dark"
						responsive="sm"
						class="text-left mt-2"
					>
					</b-table>
					<div class="cardIklan box-slice p-0">
						<img
							:src="iklan3"
							class="iklanLandscape"
							v-if="iklan3"
							alt="Slot Iklan"
						/>
					</div>
				</div>

				<div class="box-detail-single">
					<h3>Arti Kata Lainnya</h3>
					<div class="box-detail-single">
						<b-table
							:items="dataKata.random"
							:fields="random"
							striped
							hover
							head-variant="dark"
							responsive="sm"
							class="text-left mt-2"
						>
						</b-table>
						<div class="cardIklan box-slice p-0">
							<img
								:src="iklan4"
								class="iklanLandscape"
								v-if="iklan4"
								alt="Slot Iklan"
							/>
						</div>
					</div>
				</div>
				<div class="box-detail-single flexeo">
					<div class="box-detail-single-flex">
						<ul class="shares-makna">
							<li>Bagikan Makna</li>
							<li>
								<a href="#" class="share fb"><i class="fa fa-facebook"></i></a>
							</li>
							<li>
								<a href="#" class="share tw"><i class="fa fa-twitter"></i></a>
							</li>
							<li>
								<a href="#" class="share gp"><i class="fa fa-google"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["dataKata", "kata", "dataIklan"],
	data() {
		return {
			iklan: "",
			iklan1: "",
			iklan2: "",
			iklan3: "",
			iklan4: "",
			fields: [
				{ key: "judul_artikel", label: "Kata" },
				{ key: "isi_artikel", label: "Makna" },
			],
			random: [
				{ key: "judul_nama", label: "Nama" },
				{ key: "isi_nama", label: "Makna" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan[7].images;
		this.iklan2 = getImg + this.dataIklan[4].images;
		this.iklan3 = getImg + this.dataIklan[2].images;
		this.iklan4 = getImg + this.dataIklan[0].images;
		this.iklan = getImg + this.dataIklan[5].images;
	},
};
</script>

<style lang="scss" scoped>
</style>