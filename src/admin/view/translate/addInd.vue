<template>
	<div class="addGloss">
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

			<div class="card no-border">
				<div class="card-body">
					<h5 class="card-title">Tambah Terjemahan Indonesia - Inggris</h5>
					<form v-for="kata in inEng" :key="kata.id">
						<div class="container p-4">
							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="kata">Kata :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="text"
										v-model="kata.judul_artikel"
										class="form-control"
										id="kata"
										placeholder="Masukan kata"
									/>
								</div>
							</div>
							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="makna">Terjemahan :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<textarea
										type="text"
										v-model="kata.isi_artikel"
										class="form-control"
										id="makna"
										placeholder="Masukan terjemahan kata"
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
							class="btn btn-success rounded-circle"
							@click="addInEng"
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
import { BSpinner } from "bootstrap-vue";
import store from "../../../store/index";
import { mapMultiRowFields } from "vuex-map-fields";
import axios from "axios";

export default {
	data() {
		return {
			postUrl: "",
			loading: "",
			selected: null,
			dismissSecs: 5,
			dismissCountDown: 0,
			messages: "",
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.postUrl = mainUrl + "/postInd";
	},

	computed: {
		...mapMultiRowFields(["inEng"]),
	},
	components: {
		BSpinner,
	},

	methods: {
		...mapMutations(["addInEng"]),

		async onSubmit() {
			const checker = store.state.inEng[0].judul_artikel;
			if (checker === "" || store.state.inEng[0].isi_artikel === "") {
				alert("Isi semua data!!");
			} else {
				try {
					this.loading = true;
					const check = this.$store.state.inEng;
					const resp = await axios
						.post(this.postUrl, {
							data: check,
						})
						.then(console.log(resp));
				} catch (err) {
					console.log(err);
				}
				this.messages = "Kata tersimpan!";
				this.loading = "";
				this.showAlert();

				let state = this.$store;
				let newState = {
					inEng: [
						{
							id: "",
							judul_artikel: "",
							isi_artikel: "",
						},
					],
				};

				state.replaceState(newState);
				this.$root.$emit("getKamus");
			}
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
.no-border {
	border: none;
}

.card {
	box-shadow: none;
}
</style>