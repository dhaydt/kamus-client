<template>
	<div class="addNama">
		<div class="card">
			<b-alert
				:show="dismissCountDown"
				dismissible
				variant="success"
				@dismissed="dismissCountDown = 0"
				@dismiss-count-down="countDownChanged"
			>
				<p>{{ messages }}</p>
				<b-progress
					variant="warning"
					:max="dismissSecs"
					:value="dismissCountDown"
					height="4px"
				></b-progress>
			</b-alert>

			<div class="card">
				<div class="card-body">
					<h5 class="card-title">Tambah Kata Manual</h5>
					<form v-for="nama in artiNama" :key="nama.id" class="mt-4">
						<div class="container p-4">
							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="nama">Nama</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="text"
										class="form-control input-30"
										id="nama"
										v-model="nama.judul_nama"
									/>
								</div>
							</div>

							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="kelamin">Kelamin</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<select
										class="form-control input-30"
										required
										id="kelamin"
										v-model="nama.kelamin_nama"
									>
										<option value="">-- Pilih kelamin --</option>
										<option value="Laki - Laki">Laki - Laki</option>
										<option value="Perempuan">Perempuan</option>
									</select>
								</div>
							</div>

							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="asal">Asal nama</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										v-model="nama.asal_nama"
										class="form-control input-30"
										id="bidang"
									/>
								</div>
							</div>

							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="makna">Makna</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										v-model="nama.isi_nama"
										class="form-control input-30"
										id="makna"
									/>
								</div>
							</div>
						</div>
					</form>
					<div class="d-flex justify-content-around">
						<button type="button" @click="onSubmit" class="btn btn-primary">
							<div v-if="loading">
								<b-spinner small variant="primary"></b-spinner> Menyimpan...
							</div>
							<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
						</button>
					</div>
					<div class="d-flex justify-content-end">
						<button
							type="button"
							class="btn btn-outline-danger rounded-circle mr-2"
							@click="resetVuex"
							data-toggle="tooltip"
							data-placement="top"
							title="Tambah baris"
						>
							<i class="fa fa-trash"></i>
						</button>
						<button
							type="button"
							class="btn btn-success rounded-circle"
							@click="addArtiNamaRow"
							data-toggle="tooltip"
							data-placement="top"
							title="Tambah baris"
						>
							<i class="fa fa-plus"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
import axios from "axios";
import { BSpinner } from "bootstrap-vue";
import store from "../../../store/index";

export default {
	data() {
		return {
			postUrl: "",
			loading: "",
			selected: "",
			title: "Tambah Nama",
			dismissSecs: 5,
			dismissCountDown: 0,
			messages: "",
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.postUrl = mainUrl + "/postNama";
	},

	computed: {
		...mapMultiRowFields(["artiNama"]),
	},
	components: {
		BSpinner,
	},

	methods: {
		...mapMutations(["addArtiNamaRow"]),

		async onSubmit(e) {
			e.preventDefault();
			const checker = store.state.artiNama[0].judul_nama;
			if (checker == "" || store.state.artiNama[0].isi_nama == "") {
				alert("Isi semua data!!");
			} else {
				try {
					this.loading = true;
					const check = this.$store.state.artiNama;
					const resp = await axios
						.post(this.postUrl, {
							data: check,
						})
						.then(console.log(resp));
				} catch (err) {
					console.log(err);
				}
				this.loading = "";
				this.messages = "Nama tersimpan";
				this.showAlert();
				this.resetVuex();
				this.$root.$emit("getNama");
			}
		},
			resetVuex() {
			let state = this.$store;
			let newState = {
				records: [
					{
						_id: "",
						kata: "",
						keterangan: "",
						tipe: "",
					},
				],

				artiNama: [
					{
						id: "",
						judul_nama: "",
						kelamin_nama: null,
						asal_nama: "",
						isi_nama: "",
						perfix_nama: "",
					},
				],

				glosarium: [
					{
						id_glos: "",
						judul_glos: "",
						bid_glos: [],
						isi_glos: "",
					},
				],

				Indglosarium: [
					{
						id_glos: "",
						judul_eng_glos: "",
						judul_ind_glos: "",
						isi_eng_glos: "",
						isi_ind_glos: "",
						bid_glos: [],
					},
				],

				adv: [
					{
						id: "",
						title: "",
						image: "",
						detail: "",
					},
				],

				engIn: [
					{
						id: "",
						judul_artikel: "",
						isi_artikel: "",
					},
				],

				inEng: [
					{
						id: "",
						judul_artikel: "",
						isi_artikel: "",
					},
				],
			};

			state.replaceState(newState);
		},

		countDownChanged(dismissCountDown) {
			this.dismissCountDown = dismissCountDown;
		},
		showAlert() {
			this.dismissCountDown = this.dismissSecs;
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	box-shadow: none;
	border: none;
}
</style>