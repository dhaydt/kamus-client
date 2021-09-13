<template>
	<div>
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
				<h4 class="mb-0">Terjemahan Indonesia - Inggris</h4>
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
								:items="dataKata"
								:fields="fields"
								responsive="sm"
								:per-page="perPage"
								class="text-left"
								:current-page="currentPage"
								:sort-by.sync="sortBy"
								:sort-desc.sync="sortDesc"
								:filter="filter"
								:filter-included-fields="filterOn"
								@filtered="onFiltered"
							>
								<template v-slot:cell(view)="data">
									<td v-html="data.item.view / 2" class="no-border"></td>
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
				<b-tab title="Kamus Tambahan"><Manual></Manual></b-tab>
				<b-tab title="Tambah Kamus"><Tambah></Tambah></b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import axios from "axios";
import Swal from "sweetalert2";
import Tambah from "./addInd.vue";
import Manual from "./manualIdeng.vue";

export default {
	data() {
		return {
			items: [
				{
					text: "Admin",
				},
				{
					text: "Translate",
				},
				{
					text: "IND - ENG",
					active: true,
				},
			],
			dataKata: [],
			getIndUrl: "",
			jumlahData: null,
			loading: false,
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "id", sortable: true, label: "ID" },
				{ key: "judul_artikel", sortable: true, label: "Indonesia" },
				{ key: "isi_artikel", sortable: true, label: "Inggris" },
				{ key: "view", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.getIndUrl = mainUrl + "/kamusEng/";
		this.getKata();
	},

	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},

	components: {
		EllipsisLoader,
		Tambah,
		Manual,
	},
	computed: {
		/** Total no. of records*/
		rows() {
			return this.dataKata.length;
		},
	},

	methods: {
		async getKata() {
			this.loading = true;
			try {
				const response = await axios.get(this.getIndUrl);
				this.dataKata = response.data;
				this.jumlahData = response.data.length;
				// console.log("kata", this.dataKata);
			} catch (err) {
				console.log(err);
			}
			this.loading = false;
		},

		// Delete Product
		async deleteKata(id) {
			console.log(id);
			try {
				await axios.delete(this.getIndUrl + `${id}`);
				this.getKata();
				Swal.fire({
					icon: "info",
					title: "Kata Deleted",
					text: "Successfully deleted Kata!",
				});
			} catch (err) {
				console.log(err);
			}
		},

		onFiltered(filteredItems) {
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},
	},
};
</script>
<style lang="scss" scoped>
.row-page {
	width: 100px;
}

.lds-ellipsis {
	position: absolute;
	margin-top: 50px;
}

.no-border {
	border-top: none !important;
}

input {
	height: 30px;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>