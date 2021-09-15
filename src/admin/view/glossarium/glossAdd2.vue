<template>
	<div class="glossAdd2">
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
					<h5 class="card-title">Tambah Istilah Indonesia</h5>
					<div class="container p-4">
						<form v-for="glosy in glosarium" :key="glosy.id_glos">
							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="kata">Kata</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="text"
										class="form-control input-30"
										id="kata"
										v-model="glosy.judul_glos"
									/>
								</div>
							</div>

							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="bid">Bidang</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<b-form-group label="" v-slot="{ ariaDescribedby }">
										<!-- <input type="text" v-model="glosy.bid_glos" readonly /> -->
										<b-form-checkbox-group
											:id="glosy.judul_glos"
											v-model="glosy.bid_glos"
											:options="options"
											required
											:aria-describedby="ariaDescribedby"
											:name="glosy.judul_glos"
										></b-form-checkbox-group>
									</b-form-group>
								</div>
							</div>
							<div class="form-group row justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="makna">Makna</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<ckeditor
										:editor="editor"
										v-model="glosy.isi_glos"
										class="form-control"
										id="makna"
									/>
								</div>
							</div>
						</form>
					</div>
					<div class="d-flex justify-content-around">
						<button type="button" @click="pushIstilah" class="btn btn-primary">
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
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
			editor: ClassicEditor,
			dismissCountDown: 0,
			messages: "",
			editorData:
				"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
			options: [
				{ text: "Matematika", value: "Matematika" },
				{ text: "Kimia", value: "Kimia" },
				{ text: "Fisika", value: "Fisika" },
				{ text: "Biologi", value: "Biologi" },
				{ text: "Komputer", value: "Komputer" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.postUrl = mainUrl + "/postGlos2";
	},

	computed: {
		...mapMultiRowFields(["glosarium"]),
	},
	components: {
		BSpinner,
		ckeditor: CKEditor.component,
	},

	methods: {
		...mapMutations(["addGlosRow"]),

		async pushIstilah() {
			const checker = store.state.glosarium[0].judul_glos;
			if (checker === "" || store.state.glosarium[0].isi_glos === "") {
				alert("Isi semua data!!");
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
				this.messages = "Istilah tersimpan!";
				this.loading = "";
				this.showAlert();

				let state = this.$store;
				let newState = {
					glosarium: [
						{
							judul_glos: "",
							bid_glos: [],
							isi_glos: "",
						},
					],
				};

				state.replaceState(newState);
				this.$root.$emit("getGloss22");
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
.card {
	box-shadow: none;
	border: none;
}
</style>