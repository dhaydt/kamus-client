<template>
	<div class="addKata">
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
				<form v-for="record in records" :key="record.id">
					<div class="container p-4">
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
									v-model="record.kata"
								/>
							</div>
						</div>
						<div class="form-group row justify-content-center">
							<div
								class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
							>
								<label for="tipe">Tipe</label>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-12">
								<select
									class="form-control input-30"
									required
									id="tipe"
									v-model="record.tipe"
								>
									<option value="">-- Tipe --</option>
									<option value="KBBI">KBBI</option>
									<option value="Tesaurus">Tesaurus</option>
								</select>
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
									v-model="record.keterangan"
									class="form-control"
									id="makna"
								/>
							</div>
						</div>
					</div>
				</form>
				<div class="d-flex justify-content-around">
					<button type="button" @click="submit" class="btn btn-primary">
						<div v-if="loading">
							<b-spinner small variant="primary"></b-spinner> Menyimpan...
						</div>
						<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
					</button>
				</div>
				<div class="d-flex justify-content-end">
					<button
						class="btn btn-success rounded-circle"
						@click="addRecordsRow"
						data-toggle="tooltip"
						data-placement="left"
						title="Tambah Baris"
					>
						<i class="fa fa-plus"></i>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import PageHeader from "../../components/page-header.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { BSpinner } from "bootstrap-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import store from "../../../store/index";
import axios from "axios";
import { mapMutations } from "vuex";
import { mapMultiRowFields } from "vuex-map-fields";
export default {
	data() {
		return {
			postUrl: "",
			loading: "",
			dismissSecs: 5,
			dismissCountDown: 0,
			messages: "",
			record: {
				tipe: "",
			},
			editor: ClassicEditor,
			editorData:
				"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.postUrl = mainUrl + "/postKamus";
	},
	components: {
		// PageHeader,
		BSpinner,
		ckeditor: CKEditor.component,
	},
	computed: {
		...mapMultiRowFields(["records"]),
	},
	methods: {
		...mapMutations(["addRecordsRow"]),

		async submit() {
			const check = store.state.records[0].kata;
			if (check === "" || store.state.records[0].keterangan === "") {
				alert("Isi semua data");
			} else {
				try {
					this.loading = true;
					const resp = await axios
						.post(this.postUrl, {
							data: store.state.records,
						})
						.then(console.log(resp));
				} catch (err) {
					console.log(err);
				}
				this.messages = "Kata tersimpan";
				this.loading = "";
				this.showAlert();
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
<style lang="scss">
.ck {
	border: 1px solid #ced4da;
}

.ck-editor__main {
	margin-bottom: 20px;
	border-radius: 10px;
}
</style>
<style lang="scss" scoped>
.card {
	box-shadow: none;
	border: none;
}
</style>
