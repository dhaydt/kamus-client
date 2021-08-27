<template>
	<div class="advPage">
		<h1>advertisme</h1>
		<div v-if="currentFile" class="progress">
			<div
				class="progress-bar progress-bar-info progress-bar-striped"
				role="progressbar"
				:aria-valuenow="progress"
				aria-valuemin="0"
				aria-valuemax="100"
				:style="{ width: progress + '%' }"
			>
				{{ progress }}%
			</div>
		</div>

		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="title">Titile Advertism</label>
				<input
					type="text"
					name="title"
					class="form-control"
					required
					id="title"
					v-model="formFields.title"
				/>
			</div>
			<div class="form-group">
				<label for="detail">Detail Advertism</label>
				<input
					type="text"
					name="detail"
					class="form-control"
					required
					id="detail"
					v-model="formFields.detail"
				/>
			</div>
			<label class="btn btn-default">
				<input
					type="file"
					ref="file"
					required
					@change="selectFile"
					name="images"
					id="images"
				/>
			</label>

			<button class="btn btn-success" :disabled="!selectedFiles" type="submit">
				Upload
			</button>
		</form>
		<div class="alert alert-light" role="alert">{{ message }}</div>

		<div class="card">
			<div class="card-header">List of Files</div>
			<ul class="list-group list-group-flush">
				<b-table
					:items="fileInfos"
					:fields="fields"
					responsive="sm"
					:sort-by.sync="sortBy"
				>
					<template v-slot:cell(images)="data">
						<b-avatar :src="getImg + data.item.images" size="6rem"></b-avatar>
					</template>
					<template v-slot:cell(action)>
						<a
							href="javascript:void(0);"
							class="mr-3 text-primary"
							v-b-tooltip.hover
							data-toggle="tooltip"
							title="Edit"
						>
							<i class="mdi mdi-pencil font-size-18"></i>
						</a>
						<a
							href="javascript:void(0);"
							class="text-danger"
							v-b-tooltip.hover
							title="Delete"
						>
							<i class="mdi mdi-trash-can font-size-18"></i>
						</a>
					</template>
				</b-table>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from "axios";
// import UploadService from "./upload";
export default {
	data() {
		return {
			selectedFiles: undefined,
			currentFile: undefined,
			progress: 0,
			getImg: `http://localhost:3002/images/client/`,
			message: "",
			fileInfos: [],
			formFields: {
				title: null,
				images: null,
				detail: null,
			},
			sortBy: "ID",
			fields: [
				{ key: "id", label: "ID", sortable: true },
				{ key: "images", label: "Gambar", sortable: true },
				{ key: "title", label: "Judul", sortable: true },
				{ key: "details", label: "Keterangan", sortable: true },
				{ key: "action", label: "Action", sortable: true },
			],
		};
	},

	watch: {},

	created() {
		this.getData();
		// UploadService.getFiles().then((response) => {
		// 	this.fileInfos = response.data;
		// });
	},

	methods: {
		async getData() {
			const img = await axios.get("http://localhost:3002/getAdv");
			console.log(img.data.data);
			this.fileInfos = img.data.data;
		},
		submitForm() {
			this.progress = 0;
			let formData = new FormData();

			formData.append("detail", this.formFields.detail);
			formData.append("title", this.formFields.title);
			formData.append("images", this.formFields.images);

			axios
				.post("http://localhost:3002/postAdv", formData)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
			this.getData();
		},
		// upload() {
		// 	this.progress = 0;

		// 	this.currentFile = this.selectedFiles.item(0);
		// 	UploadService.upload(this.currentFile, (event) => {
		// 		this.progress = Math.round((100 * event.loaded) / event.total);
		// 	})
		// 		.then((response) => {
		// 			this.message = response.data.message;
		// 			return UploadService.getFiles();
		// 		})
		// 		.then((files) => {
		// 			this.fileInfos = files.data;
		// 		})
		// 		.catch(() => {
		// 			this.progress = 0;
		// 			this.message = "Could not upload the file!";
		// 			this.currentFile = undefined;
		// 		});

		// 	this.selectedFiles = undefined;
		// },
		selectFile(event) {
			this.selectedFiles = this.$refs.file.files;
			this.formFields.images = event.target.files[0];
		},
	},
};
</script>

<style lang="scss" scoped>
</style>