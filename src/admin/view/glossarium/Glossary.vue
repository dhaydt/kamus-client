<template>
	<div>
		<Header :title="title"></Header>
		<b-card>
			<b-tabs content-class="mt-3" fill>
				<b-tab title="Istilah Utama" active>
					<div class="card-body pt-0">
						<div class="row justify-content-between">
							<div class="col-sm-12 col-md-6">
								<!-- Search -->
								<div
									id="tickets-table_filter"
									class="dataTables_filter text-md-left"
								>
									<label class="d-inline-flex align-items-center">
										Show&nbsp;
										<b-form-select
											v-model="perPage"
											size="sm"
											:options="pageOptions"
											class="row-page"
										></b-form-select
										><em style="color: #a4a6ab">
											&nbsp;From {{ jumlahData }} data</em
										>
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
										Search:
										<b-form-input
											type="search"
											id="search"
											class="form-control form-control-sm ml-2"
										></b-form-input>
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
									<td v-html="data.item.view / 2"></td>
								</template>
								<template v-slot:cell(action)="data">
									<a
										href="javascript:void(0);"
										class="text-danger"
										v-b-tooltip.hover
										title="Delete"
										@click="deleteKata(data.item.id_glos)"
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
				<b-tab title="Istilah Tambahan">
					<Manual></Manual>
				</b-tab>
				<b-tab title="Tambah Kata">
					<Tambah></Tambah>
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import Header from "../../components/page-header.vue";
import axios from "axios";
import Swal from "sweetalert2";
import Manual from "./manualGlosari.vue";
import Tambah from "./glossAdd.vue";

export default {
	components: {
		EllipsisLoader,
		Tambah,
		Manual,
		Header,
	},
	data() {
		return {
			getUrl: "",
			title: "Istilah Management",
			dataKata: [],
			jumlahData: null,
			loading: "",
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "id_glos", sortable: true, label: "ID" },
				{ key: "judul_glos", sortable: true, label: "Istilah" },
				{ key: "bid_glos", sortable: true, label: "Bidang" },
				{ key: "isi_glos", sortable: true, label: "Makna" },
				{ key: "view", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},
	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.dataKata.length;
		},
	},
	created() {
		const mainUrl = localStorage.mainUrl;
		this.getUrl = mainUrl + "/glossarium";
		this.getGloss();
		this.loading = true;
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},
	methods: {
		/**
		 * Search the table data with search input
		 */
		async getGloss() {
			try {
				const response = await axios.get(this.getUrl);
				this.dataKata = response.data;
				this.jumlahData = response.data.length;
				this.loading = false;
			} catch (err) {
				console.log(err);
			}
		},

		onFiltered(filteredItems) {
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},

		// Delete Product
		async deleteKata(id) {
			this.loading = true;
			console.log(id);
			try {
				await axios.delete(this.getUrl + `/${id}`);
				this.getGloss();
				Swal.fire({
					icon: "info",
					title: "Istilah Deleted",
					text: "Successfully deleted Istilah!",
				});
				this.loading = false;
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>
<style lang="scss" scoped>
</style>