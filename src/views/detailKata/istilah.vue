<template>
	<div class="box-detail">
		<div class="cardIklan box-slice p-0">
			<img
				:src="iklan4"
				class="iklanLandscape"
				v-if="iklan4"
				alt="Slot Iklan"
			/>
		</div>
		<div class="box-slice">
			<div class="box-detail-single">
				<h1>Arti Kata {{ kata }}</h1>
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
				Arti Istilah {{ kata }}, maksud, definisi, pengertian dan makna kata
				terkait dengan arti istilah {{ kata }}.
			</p>

			<h2>Arti Istilah {{ kata }}</h2>

			<p v-for="kata in dataKata.istilah" :key="kata.id_glos">
				<strong class="txt-trans">{{ kata.judul_glos }}</strong
				>: <span v-html="kata.isi_glos"></span>
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
</template>

<script>
export default {
	props: ["dataKata", "kata", "dataIklan"],
	data() {
		return {
			iklan1: "",
			iklan2: "",
			iklan3: "",
			iklan4: "",
			data: [],
			fields: [
				{ key: "judul_artikel", label: "Inggris" },
				{ key: "isi_artikel", label: "Indonesia" },
			],
			random: [
				{ key: "judul_artikel", label: "Indonesia" },
				{ key: "isi_artikel", label: "Inggris" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan[2].images;
		this.iklan2 = getImg + this.dataIklan[3].images;
		this.iklan3 = getImg + this.dataIklan[4].images;
		this.iklan4 = getImg + this.dataIklan[5].images;
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
	text-transform: capitalize !important;
}

.makna {
	font-size: 20px;
}
</style>