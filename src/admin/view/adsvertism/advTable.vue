<template>
	<div class="advPage">
		<div class="row">
			<div class="col-12">
				<div
					class="
						page-title-box
						pt-2
						pb-0
						d-flex
						align-items-center
						justify-content-between
					"
				>
					<!-- <h4 class="mb-0">{{ title }}</h4> -->
					<b-breadcrumb :items="items" class="m-0"></b-breadcrumb>

					<div class="page-title-right"></div>
				</div>
			</div>
		</div>
		<b-card>
			<div class="card-title">
				<h4 class="mb-0">Advertism Management</h4>
			</div>
			<b-tabs content-class="mt-3" fill>
				<b-tab title="Kamus Utama" active>
					<div class="card-body pt-0">
						<div class="row justify-content-between">
							<div class="col-sm-12 col-md-6">
								<!-- Search -->
								<div
									id="tickets-table_filter"
									class="dataTables_filter text-md-left"
								>
									<label class="d-inline-flex align-items-center">
										Search:
										<b-form-input
											type="search"
											id="search"
											class="form-control form-control-sm ml-2"
										></b-form-input>
									</label>
								</div>
								<!-- End search -->
							</div>
							<div class="col-sm-12 col-md-6">
								<div
									id="tickets-table_length"
									class="dataTables_length text-md-right"
								>
									<label class="d-inline-flex align-items-center">
										Show&nbsp;
										<b-form-select
											v-model="perPage"
											size="sm"
											:options="pageOptions"
											class="row-page"
										></b-form-select
										><em style="color: #a4a6ab"> From {{ jumlahData }} data</em>
									</label>
								</div>

								<!-- Search -->
								<!-- <div class="col-sm-12 col-md-4">
					<div
						id="tickets-table_filter"
						class="dataTables_filter text-md-right"
					>
						<label class="d-inline-flex align-items-center">
							Search:
							<b-form-input
								type="search"
								class="form-control form-control-sm ml-2"
							></b-form-input>
						</label>
					</div>
				</div> -->
								<!-- End search -->
							</div>
						</div>
						<EllipsisLoader :loading="loading"></EllipsisLoader>
						<div class="table-responsive">
							<b-table
								:items="fileInfos"
								:fields="fields"
								responsive="sm"
								:per-page="perPage"
								class="text-left"
								:current-page="currentPage"
								:sort-by.sync="sortBy"
								:sort-desc.sync="sortDesc"
								:filter-included-fields="filterOn"
							>
								<template v-slot:cell(images)="data">
									<b-avatar
										:src="getImg + data.item.images"
										size="6rem"
									></b-avatar>
								</template>
								<template v-slot:cell(start_date)="data">
									<td class="no-border">{{ data.item.start_date | moment }}</td>
								</template>
								<template v-slot:cell(end_date)="data">
									<td class="no-border">{{ data.item.end_date | moment }}</td>
								</template>
								<template v-slot:cell(action)="data">
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
										@click="deleteKata(data.item.id)"
									>
										<i class="mdi mdi-trash-can font-size-18"></i>
									</a>
								</template>
							</b-table>
						</div>
						<div class="row">
							<div class="col">
								<div
									class="dataTables_paginate paging_simple_numbers float-right"
								>
									<ul class="pagination pagination-rounded mb-0">
										<!-- pagination -->
										<b-pagination
											v-model="currentPage"
											:total-rows="rows"
											:per-page="perPage"
										></b-pagination>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</b-tab>
				<b-tab title="Tambah Adv">
					<Tambah></Tambah>
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>

<script>
import { EllipsisLoader } from "vue-spinners-css";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import Tambah from "./addImage.vue";

export default {
	data() {
		return {
			getImgUrl: "",
			getAdvUrl: "",
			postAdvUrl: "",
			selectedFiles: undefined,
			currentFile: undefined,
			loading: false,
			progress: 0,
			message: "",
			fileInfos: [],
			jumlahData: null,
			dataKata: [],
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			formFields: {
				title: null,
				images: null,
				detail: null,
			},
			fields: [
				{ key: "id", label: "ID", sortable: true },
				{ key: "title", label: "Judul", sortable: true },
				{ key: "tipe", label: "Tipe", sortable: true },
				{ key: "posisi", label: "Posisi", sortable: true },
				{ key: "code", label: "Code", sortable: true },
				{ key: "images", label: "Gambar", sortable: true },
				{ key: "start_date", label: "Mulai", sortable: true },
				{ key: "end_date", label: "Berakhir", sortable: true },
				{ key: "action", label: "Action", sortable: true },
			],
			items: [
				{
					text: "Admin",
				},
				{
					text: "Advertism",
					active: true,
				},
			],
		};
	},

	components: {
		EllipsisLoader,
		Tambah,
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.getImg = mainUrl + "/images/client/";
		this.getAdvUrl = mainUrl + "/getAdv";
		this.postAdvUrl = mainUrl + "/postAdv";
		this.getData();
	},

	mounted() {
		this.totalRows = this.fileInfos.length;
		this.$root.$on("getImg", this.getData);
	},

	computed: {
		rows() {
			return this.fileInfos.length;
		},
	},

	methods: {
		async getData() {
			const img = await axios.get(this.getAdvUrl);
			console.log(img.data.data);
			this.jumlahData = img.data.data.length;
			this.fileInfos = img.data.data;
		},

		onFiltered(filteredItems) {
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},

		async deleteKata(id) {
			this.loading = true;
			console.log(id);
			try {
				await axios.delete(this.getAdvUrl + `/${id}`);
				this.getData();
				Swal.fire({
					icon: "info",
					title: "Advertism Deleted",
					text: "Successfully deleted Advertism!",
				});
				this.loading = false;
			} catch (err) {
				console.log(err);
			}
		},
	},

	filters: {
		moment: function (date) {
			return moment(date).format("Do MMMM YYYY");
		},
	},
};
</script>

<style lang="scss" scoped>
.no-border {
	border-top: none !important;
}

#search {
	height: 30px !important;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>