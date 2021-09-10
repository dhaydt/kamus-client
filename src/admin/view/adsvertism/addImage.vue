<template>
	<div class="addImage">
		<Header :title="title" :items="items"></Header>
		<b-card class="addImg">
			<b-alert
				v-model="showDismissibleAlert"
				class="mt-2"
				variant="danger"
				dismissible
			>
				{{ error }}
			</b-alert>
			<form @submit="submitForm">
				<div class="form-group">
					<label for="name">Name</label>
					<input
						v-model="formFields.title"
						type="text"
						required
						class="form-control"
						id="name"
						placeholder="Nama iklan"
					/>
				</div>
				<div class="form-group">
					<label for="posisi">Posisi</label>
					<select
						class="form-control"
						required
						id="posisi"
						v-model="formFields.posisi"
					>
						<option value="">-- Posisi --</option>
						<option value="atas">Atas</option>
						<option value="bawah">Bawah</option>
					</select>
				</div>
				<div class="form-group">
					<label for="tipe">Tipe</label>
					<select
						v-model="formFields.tipe"
						class="form-control"
						required
						id="tipe"
					>
						<option value="" selected>-- Tipe --</option>
						<option value="image">Image</option>
						<option value="code">Code</option>
					</select>
				</div>
				<div class="form-group" v-if="formFields.tipe == 'code'">
					<div class="code form-group">
						<label for="code">Code</label>
						<textarea
							class="form-control"
							id="code"
							v-model="formFields.code"
							rows="3"
						></textarea>
					</div>
					<div class="start-date form-group">
						<label for="start_date">Start date :</label>
						<b-form-datepicker
							id="start_date"
							v-model="formFields.start_date"
							class="mb-2"
						></b-form-datepicker>
					</div>

					<div class="end-date form-group">
						<label for="end_date">End date :</label>
						<b-form-datepicker
							id="end_date"
							v-model="formFields.end_date"
							class="mb-2"
						></b-form-datepicker>
					</div>
				</div>

				<div class="d-flex justify-content-center">
					<div class="form-group d-flex" v-if="formFields.tipe == 'image'">
						<label for="images">Image</label>
						<input
							type="file"
							v-on:change="handleFileUpload()"
							class="form-control-file ml-4"
							name="images"
							id="images"
						/>
					</div>
					<button type="submit" class="btn btn-primary mr-4 pr-4">
						<div v-if="loading">
							<b-spinner small variant="primary"></b-spinner> Menyimpan...
						</div>
						<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
					</button>
				</div>
			</form>
		</b-card>
	</div>
</template>

<script>
import axios from "axios";
import { BSpinner } from "bootstrap-vue";
import Header from "../../components/page-header.vue";
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
		Header,
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
			this.formFields.start_date = "";
			this.formFields.end_date = "";
			this.loading = false;
		},

		handleFileUpload() {
			this.formFields.images = event.target.files[0];
			console.log(event.target.files[0]);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>