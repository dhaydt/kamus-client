<template>
	<div class="addGloss">
		<b-tabs content-class="mt-3">
			<b-tab title="Istilah lama">
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
							<h5 class="card-title">Tambah Istilah Lama</h5>
							<div class="container p-4">
								<form v-for="gloss in glosarium" :key="gloss.id_glos">
									<div class="form-group row justify-content-center">
										<div
											class="
												col-lg-3 col-md-3 col-sm-12
												d-flex
												align-items-center
											"
										>
											<label for="kata">Kata</label>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-12">
											<input
												type="text"
												class="form-control input-30"
												id="kata"
												v-model="gloss.judul_glos"
											/>
										</div>
									</div>

									<div class="form-group row justify-content-center">
										<div
											class="
												col-lg-3 col-md-3 col-sm-12
												d-flex
												align-items-center
											"
										>
											<label for="bidang">Bidang</label>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-12">
											<b-form-group label="" v-slot="{ ariaDescribedby }">
												<b-form-checkbox-group
													:id="gloss.judul_glos"
													v-model="gloss.bid_glos"
													:options="options"
													:aria-describedby="ariaDescribedby"
													name="gloss.judul_glos"
												></b-form-checkbox-group>
											</b-form-group>
										</div>
									</div>
									<div class="form-group row justify-content-center">
										<div
											class="
												col-lg-3 col-md-3 col-sm-12
												d-flex
												align-items-center
											"
										>
											<label for="makna">Makna</label>
										</div>
										<div class="col-lg-8 col-md-8 col-sm-12">
											<ckeditor
												:editor="editor"
												v-model="gloss.isi_glos"
												class="form-control"
												id="makna"
											/>
										</div>
									</div>
								</form>
							</div>
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
									class="btn btn-outline-danger rounded-circle mr-2"
									@click="resetVuex"
									data-toggle="tooltip"
									data-placement="left"
									title="Reset"
								>
									<i class="fa fa-trash"></i>
								</button>
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
					</div></div
			></b-tab>
			<b-tab title="Istilah baru">
				<Add></Add>
			</b-tab>
		</b-tabs>
	</div>
</template>


<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Add from "./glossAdd2.vue";
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
		this.postUrl = mainUrl + "/postGlos";
	},

	computed: {
		...mapMultiRowFields(["glosarium"]),
	},
	components: {
		BSpinner,
		ckeditor: CKEditor.component,
		Add,
	},

	methods: {
		...mapMutations(["addGlosRow"]),

		async onSubmit() {
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
				this.resetVuex();
				this.$root.$emit("getGloss");
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