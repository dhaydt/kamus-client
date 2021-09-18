<template>
	<div class="box-detail">
		<div class="cardIklan box-slice p-0">
			<img :src="iklan" class="iklanLandscape" v-if="iklan" alt="Slot Iklan" />
		</div>
		<div class="box-slice">
			<div class="box-detail-single">
				<h1>Arti Kata {{ kata }} KBBI Kamus Bahasa Indonesia</h1>
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
				Terjemahan kata {{ kata }}, maksud, definisi, pengertian dan makna kata
				terkait dengan arti kata {{ kata }}.
			</p>

			<h2>Terjemahan Kata {{ kata }}</h2>

			<p v-for="kata in dataKata.engin" :key="kata.id">
				<strong class="txt-trans">{{ kata.judul_artikel }}</strong
				>: <span v-html="kata.isi_artikel"></span>
			</p>

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
							<a href="javascript:void(0)" class="share fb">
								<ShareNetwork
									network="facebook"
									url="https://kamuskbbi.id"
									title="Kamus KBBI Terjemahan Istilah dan Artinama - KamusKBBI.id"
									description="Kamus Besar Bahasa Indonesia (KBBI), terjemahan (Eng-Ind/Ind-Eng), makna kata istilah asing (Glosarium) dan artinama dari berbagai negara."
									tag="a"
								>
									<span class="text-white"
										><i class="fa fa-facebook"></i></span></ShareNetwork
							></a>
						</li>
						<li>
							<a href="#" class="share tw">
								<ShareNetwork
									network="twitter"
									url="https://kamuskbbi.id"
									title="Kamus KBBI Terjemahan Istilah dan Artinama - KamusKBBI.id"
									description="Kamus Besar Bahasa Indonesia (KBBI), terjemahan (Eng-Ind/Ind-Eng), makna kata istilah asing (Glosarium) dan artinama dari berbagai negara."
									twitter-user="kamuskbbiID"
								>
									<span class="text-white"
										><i class="fa fa-twitter"></i></span></ShareNetwork
							></a>
						</li>
					</ul>
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
				{ key: "judul_glos", label: "Istilah" },
				{ key: "isi_glos", label: "Makna" },
			],
			random: [
				{ key: "judul_nama", label: "Nama" },
				{ key: "isi_nama", label: "Makna" },
			],
		};
	},

	mounted() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan = getImg + this.dataIklan.atasJudul[0].images;
		this.iklan1 = getImg + this.dataIklan.bawahJudul[0].images;
		this.iklan2 = getImg + this.dataIklan.atasRelated[0].images;
		this.iklan3 = getImg + this.dataIklan.atasLainnya[0].images;
		this.iklan4 = getImg + this.dataIklan.atasShared[0].images;
	},
};
</script>

<style lang="scss" scoped>
.section-label {
	font-weight: 600;
	em {
		text-transform: capitalize;
		font-weight: 900;
	}
}

.share {
	display: flex;
}
.shares {
	display: flex;
	align-items: center;
}
.fab {
	font-size: 40px;
	margin: 0 5px 0 10px;
}

.fb {
	color: #3a3ae0;
}
.twit {
	color: #5b67fb;
}
.ig {
	color: #e00b0b;
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