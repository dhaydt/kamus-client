<template>
	<div class="addImage">
		<Header :title="title" :items="items"></Header>
		<b-card class="addImg">
			<form>
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
						<option>Pilih Posisi</option>
						<option value="atas">Atas</option>
						<option value="bawah">Bawah</option>
					</select>
				</div>
				<div class="form-group">
					<label for="tipe">Tipe</label>
					<select v-model="formFields.tipe" class="form-control" id="tipe">
						<option>Pilih Tipe Iklan</option>
						<option value="image">Image</option>
						<option value="code">Code</option>
					</select>
				</div>
				<div class="form-group" v-if="formFields.tipe == 'code'">
					<label for="code">Code</label>
					<textarea
						class="form-control"
						id="code"
						v-model="formFields.code"
						rows="3"
					></textarea>
				</div>
				<div class="d-flex justify-content-between">
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
					<button type="submit" class="btn btn-primary mr-4 pr-4" disabled>
						<!-- :disabled="!formFields.images" -->
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
			formFields: {
				title: null,
				posisi: null,
				tipe: null,
				code: null,
				images: null,
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

	created() {
		const mainUrl = localStorage.mainUrl;
		this.urlPostImg = mainUrl + "/postAdv";
	},

	methods: {
		async submitForm() {
			this.loading = true;
			let formData = new FormData();

			formData.append("title", this.formFields.title);
			formData.append("posisi", this.formFields.posisi);
			formData.append("tipe", this.formFields.tipe);
			formData.append("code", this.formFields.code);

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
			this.loading = false;
		},

		handleFileUpload() {
			this.formFields.images = event.target.files[0];
			console.log(this.formFields.images);
		},
	},
};
</script>

<style lang="scss" scoped>
</style>