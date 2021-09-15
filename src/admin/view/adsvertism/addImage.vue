<template>
	<div class="addImage">
		<b-card class="addImg">
			<h5 class="card-title">Tambah Advertism</h5>
			<b-alert
				v-model="showDismissibleAlert"
				class="mt-2"
				variant="danger"
				dismissible
			>
				{{ error }}
			</b-alert>
			<div class="container p-4">
				<form @submit="submitForm">
					<div class="form-group row justify-content-center">
						<div class="col-lg-3 col-md-3 col-sm-12">
							<label for="name">Name</label>
						</div>

						<div class="col-lg-8 col-md-8 col-sm-12">
							<input
								v-model="formFields.title"
								type="text"
								required
								class="form-control input-30"
								id="name"
								placeholder="Nama iklan"
							/>
						</div>
					</div>
					<div class="form-group row justify-content-center">
						<div class="col-lg-3 col-md-3 col-sm-12">
							<label for="posisi">Posisi</label>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-12">
							<select
								class="form-control input-30"
								required
								id="posisi"
								v-model="formFields.posisi"
							>
								<option value="">-- Posisi --</option>
								<option value="atas_judul">Atas Judul</option>
								<option value="bawah_judul">Bawah Judul</option>
								<option value="atas_related">Atas Related</option>
								<option value="atas_lainnya">Atas Lainnya</option>
								<option value="atas_shared">Atas Shared</option>
								<option value="side_atas">Side Atas</option>
								<option value="side_tengah">Side Tengah</option>
								<option value="side_bawah">Side Bawah</option>
							</select>
						</div>
					</div>
					<div class="form-group row justify-content-center">
						<div class="col-lg-3 col-md-3 col-sm-12">
							<label for="tipe">Tipe</label>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-12">
							<select
								v-model="formFields.tipe"
								class="form-control input-30"
								required
								id="tipe"
							>
								<option value="" selected>-- Tipe --</option>
								<option value="image">Image</option>
								<option value="code">Code</option>
							</select>
						</div>
					</div>
					<div class="form-group" v-if="formFields.tipe == 'code'">
						<div class="code form-group row justify-content-center">
							<div class="col-lg-3 col-md-3 col-sm-12">
								<label for="code">Code</label>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-12">
								<textarea
									class="form-control"
									id="code"
									v-model="formFields.code"
									rows="4"
								></textarea>
							</div>
						</div>
					</div>

					<div class="form-group" v-if="formFields.tipe == 'image'">
						<div class="form-group d-flex row justify-content-center">
							<div class="col-lg-3 col-md-3 col-sm-12">
								<label for="images">Image</label>
							</div>
							<div class="col-lg-8 col-md-8 col-sm-12">
								<input
									type="file"
									v-on:change="handleFileUpload()"
									class="form-control-file"
									name="images"
									id="images"
								/>
							</div>
						</div>

						<div class="form-group d-flex row justify-content-center">
							<div class="col-lg-3 col-md-3 col-sm-12">
								<label for="url">URL</label>
							</div>

							<div class="col-lg-8 col-md-8 col-sm-12">
								<input
									v-model="formFields.url"
									type="text"
									required
									class="form-control input-30"
									id="url"
									placeholder="URL iklan"
								/>
							</div>
						</div>
					</div>

					<div class="start-date form-group row justify-content-center">
						<div class="col-lg-3 col-md-3 col-sm-12">
							<label for="start_date">Start date :</label>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-12">
							<b-form-datepicker
								id="start_date"
								v-model="formFields.start_date"
								class="mb-2"
							></b-form-datepicker>
						</div>
					</div>

					<div class="end-date form-group row justify-content-center">
						<div class="col-lg-3 col-md-3 col-sm-12">
							<label for="end_date">End date :</label>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-12">
							<b-form-datepicker
								id="end_date"
								v-model="formFields.end_date"
								class="mb-2"
							></b-form-datepicker>
						</div>
					</div>
					<div class="d-flex justify-content-center">
						<button type="submit" class="btn btn-primary mr-4 pr-4">
							<div v-if="loading">
								<b-spinner small variant="primary"></b-spinner> Menyimpan...
							</div>
							<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
						</button>
					</div>
				</form>
			</div>
		</b-card>
	</div>
</template>

<script>
import axios from "axios";
import { BSpinner } from "bootstrap-vue";
export default {
	data() {
		return {
			urlPostImg: "",
			loading: false,
			error: "",
			showDismissibleAlert: false,
			formFields: {
				title: null,
				posisi: "",
				tipe: "",
				code: null,
				url: "",
				images: null,
				start_date: null,
				end_date: null,
			},
			file: null,
			title: "Tambah Advertism",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Advertism",
				},
				{
					text: "Tambah Advertism",
					active: true,
				},
			],
		};
	},

	components: {
		BSpinner,
	},

	filter: {},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.urlPostImg = mainUrl + "/postAdv";
	},

	methods: {
		async submitForm(e) {
			e.preventDefault();
			this.loading = true;
			let formData = new FormData();

			formData.append("title", this.formFields.title);
			formData.append("posisi", this.formFields.posisi);
			formData.append("tipe", this.formFields.tipe);
			formData.append("code", this.formFields.code);
			formData.append("url", this.formFields.url);
			formData.append("end_date", this.formFields.end_date);
			formData.append("start_date", this.formFields.start_date);
			formData.append("images", this.formFields.images);

			await axios
				.post(this.urlPostImg, formData)
				.then((res) => {
					console.log(res);
					this.loading = false;
				})
				.catch((err) => {
					console.log(err);
				});
			this.formFields.title = "";
			this.formFields.images = "";
			this.formFields.posisi = "";
			this.formFields.tipe = "";
			this.formFields.code = "";
			this.formFields.url = "";
			this.formFields.start_date = "";
			this.formFields.end_date = "";
			this.loading = false;
			this.$root.$emit("getImg");
		},

		handleFileUpload() {
			this.formFields.images = event.target.files[0];
			console.log(event.target.files[0]);
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	box-shadow: none;
	border: none;
}

textarea.form-control {
	height: auto !important;
}
</style>