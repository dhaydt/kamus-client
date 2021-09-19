<template>
	<div class="box-detail">
		<div class="cardIklan box-slice p-0">
			<a href="javascript:void(0)" target="_blank" @click="goTo">
				<img
					:src="iklan1"
					class="iklanLandscape"
					v-if="iklan1"
					alt="Slot Iklan"
				/>
			</a>
		</div>
		<div class="box-slice">
			<div class="box-detail-single">
				<h2>Kamus Istilah</h2>
				<div class="ad-container">
					<InFeedAdsense
						data-ad-client="ca-pub-9333981154484827"
						data-ad-slot="5537158012"
						data-ad-format="auto"
						data-full-width-responsive="true"
					></InFeedAdsense>
				</div>
				<p>
					Aplikasi Kamus Besar Bahasa Indonesia (KBBI) ini merupakan KBBI Daring
					(Dalam Jaringan / Online tidak resmi) yang dibuat untuk memudahkan
					pencarian, penggunaan dan pembacaan arti kata (lema/sub lema). Berbeda
					dengan beberapa situs web (website) sejenis, kami berusaha memberikan
					berbagai fitur lebih, seperti kecepatan akses, tampilan dengan
					berbagai warna pembeda untuk jenis kata, tampilan yang pas untuk
					segala perambah web baik komputer desktop, laptop maupun telepon
					pintar dan sebagainya. Fitur-fitur selengkapnya bisa dibaca dibagian
					Fitur KBBI Daring.
				</p>

				<p>
					Database Utama KBBI Daring ini masih mengacu pada KBBI Daring Edisi
					III, sehingga isi (kata dan arti) tersebut merupakan Hak Cipta Badan
					Pengembangan dan Pembinaan Bahasa, Kemdikbud (dahulu Pusat Bahasa).
					Diluar data utama, kami berusaha menambah kata-kata baru yang akan
					diberi keterangan tambahan dibagian akhir arti atau definisi dengan
					"Definisi Eksternal". Semoga semakin menambah khazanah referensi
					pendidikan di Indonesia dan bisa memberikan manfaat yang luas.
					Aplikasi ini lebih bersifat sebagai arsip saja, agar pranala/tautan
					(link) yang mengarah ke situs ini tetap tersedia. Untuk mencari kata
					dari KBBI edisi V (terbaru), silakan merujuk ke website resmi di
					<a href="kbbi.kemdikbud.go.id">kbbi.kemdikbud.go.id</a>
				</p>

				<h3>Fitur KBBI Daring</h3>
				<ul>
					<li>Pencarian satu kata atau banyak kata sekaligus</li>
					<li>Tampilan yang sederhana dan ringan untuk kemudahan penggunaan</li>
					<li>
						Proses pengambilan data yang sangat cepat, pengguna tidak perlu
						memuat ulang (reload/refresh) jendela atau laman web (website) untuk
						mencari kata berikutnya
					</li>
					<li>
						Arti kata ditampilkan dengan warna yang memudahkan mencari lema
						maupun sub lema. Berikut beberapa penjelasannya:
					</li>
					<ol>
						<li>
							Jenis kata atau keterangan istilah semisal n (nomina), v (verba)
							dengan warna merah muda (pink) dengan garis bawah titik-titik.
							Arahkan mouse untuk melihat keterangannya (belum semua ada
							keterangannya)
						</li>
						<li>
							Arti ke-1, 2, 3 dan seterusnya ditandai dengan huruf tebal dengan
							latar lingkaran
						</li>
						<li>Contoh penggunaan lema/sub-lema ditandai dengan warna biru</li>
						<li>Contoh dalam peribahasa ditandai dengan warna oranye</li>
						<li>
							Ketika diklik hasil dari daftar kata "Memuat", hasil yang sesuai
							dengan kata pencarian akan ditandai dengan latar warna kuning
						</li>
					</ol>
					<li>
						Pranala (Pretty Permalink/Link) yang indah dan mudah diingat untuk
						definisi kata, misalnya :
					</li>
					<ol>
						<li>
							Kata 'rumah' akan mempunyai pranala (link) di
							https://kbbi.web.id/rumah
						</li>
						<li>
							Kata 'pintar' akan mempunyai pranala (link) di
							https://kbbi.web.id/pintar
						</li>
						<li>
							Kata 'komputer' akan mempunyai pranala (link) di
							https://kbbi.web.id/komputer
						</li>
					</ol>

					<li>
						Sehingga diharapkan pranala (link) tersebut dapat digunakan sebagai
						referensi dalam penulisan, baik di dalam jaringan maupun di luar
						jaringan.
					</li>
					<li>
						Aplikasi dikembangkan dengan konsep Responsive Design, artinya
						tampilan situs web (website) KBBI ini akan cocok di berbagai media,
						misalnya smartphone ( Tablet pc, iPad, iPhone, Tab), termasuk
						komputer dan netbook/laptop. Tampilan web akan menyesuaikan dengan
						ukuran layar yang digunakan.
					</li>
					<li>Tambahan kata-kata baru diluar KBBI edisi III</li>
					<li>
						Penulisan singkatan di bagian definisi seperti misalnya: yg, dng,
						dl, tt, dp, dr dan lainnya ditulis lengkap, tidak seperti yang
						terdapat di KBBI PusatBahasa.
					</li>
				</ul>
			</div>

			<div class="box-detail-single">
				<div class="cardIklan">
					<InFeedAdsense
						data-ad-client="ca-pub-9333981154484827"
						data-ad-slot="5537158012"
						data-ad-format="auto"
						data-full-width-responsive="true"
					></InFeedAdsense>
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
									url="https://kamuskbbi.id/glossarium"
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
									url="https://kamuskbbi.id/glossarium"
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
	props: ["dataIklan"],
	data() {
		return {
			iklan1: "",
			iklan2: "",
			url1: "",
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		const getImg = mainUrl + "/images/client/";
		this.iklan1 = getImg + this.dataIklan.atasJudul[0].images;
		this.url1 = this.dataIklan.atasJudul[0].url;
		this.iklan2 = getImg + this.dataIklan.atasShared[0].images;
	},
	methods: {
		goTo() {
			window.open(this.url1, "_blank");
		},
	},
};
</script>
<style lang="scss" scoped>
.bg-white {
	min-height: 80vh;
}
</style>