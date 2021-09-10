<template>
	<div class="addGloss">
		<div class="card" style="min-height: 70vh">
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
					<form v-for="gloss in glosarium" :key="gloss.id_glos">
						<div class="form-group">
							<label for="kata">Kata</label>
							<input
								type="text"
								class="form-control"
								id="kata"
								v-model="gloss.judul_glos"
								aria-describedby="emailHelp"
							/>
							<small id="emailHelp" class="form-text text-muted"
								>Masukan kata yang akan di tambahkan</small
							>
						</div>

						<div class="form-group">
							<label for="bidang">Bidang</label>
							<input
								v-model="gloss.bid_glos"
								class="form-control"
								id="bidang"
							/>
						</div>
						<div class="form-group">
							<label for="makna">Makna</label>
							<input v-model="gloss.isi_glos" class="form-control" id="makna" />
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
							@click="addGlosRow"
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
// import store from "../../../store/index";
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
		this.postUrl = mainUrl + "/postGlos";
	},

	computed: {
		...mapMultiRowFields(["glosarium"]),
	},
	components: {
		BSpinner,
	},

	methods: {
		...mapMutations(["addGlosRow"]),

		async onSubmit() {
			const checker = store.state.records[0].judul_glos;
			if (checker === "" || store.state.records[0].bid_glos === "") {
				alert("Isi semua data");
			} else {
				try {
					this.loading = true;
					const check = this.$store.state.glosarium;
					const resp = await axios
						.post(this.postUrl, {
							data: check,
						})
						.then(console.log(resp));
				} catch (err) {
					console.log(err);
				}
				this.messages = "Istilah tersimpan";
				this.loading = "";
				this.showAlert();

				let state = this.$store;
				let newState = {
					glosarium: [
						{
							id_glos: "",
							judul_glos: "",
							bid_glos: "",
							isi_glos: "",
						},
					],
				};

				state.replaceState(newState);
				this.$root.$emit("getGloss");
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
</style>