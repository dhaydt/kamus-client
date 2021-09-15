<template>
	<div>
		<b-tabs content-class="mt-3">
			<b-tab title="Istilah Inggris">
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
									><em style="color: #a4a6ab"> From {{ jumlahData }} data</em>
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
							<template v-slot:cell(isi_glos)="data">
								<td
									class="no-border"
									v-html="JSON.parse(JSON.stringify(data.item.isi_glos))"
								></td>
							</template>

							<template v-slot:cell(Bidang)="data">
								<td>{{ JSON.parse(data.item.bid_glos) }}</td>
							</template>

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
			<b-tab title="Istilah Indonesia"><Manual2></Manual2></b-tab>
		</b-tabs>
	</div>
</template>

<script>
import axios from "axios";
import { EllipsisLoader } from "vue-spinners-css";
import Swal from "sweetalert2";
import Manual2 from "./manualGlos2.vue";
export default {
	data() {
		return {
			getUrl: "",
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
				{ key: "bahasa", sortable: true, label: "Bahasa" },
				{ key: "isi_glos", sortable: true, label: "Makna" },
				{ key: "view", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},

	components: {
		EllipsisLoader,
		Manual2,
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
		this.getUrl = mainUrl + "/glossariumCadangan";
		this.getGloss();
		this.loading = true;
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
		this.$root.$on("getGloss", this.getGloss);
	},
	methods: {
		/**
		 * Search the table data with search input
		 */
		async getGloss() {
			try {
				const response = await axios.get(this.getUrl);
				const dataHtml = response.data;
				this.jumlahData = response.data.length;

				String.prototype.escapeSpecialChars = function () {
					return this.replace(/\\n/g, "\\n")
						.replace(/\\'/g, "\\'")
						.replace(/\\"/g, '\\"')
						.replace(/\\&/g, "\\&")
						.replace(/\\r/g, "\\r")
						.replace(/\\t/g, "\\t");
				};

				var myJSONString = JSON.stringify(dataHtml);
				var myEscapedJSONString = myJSONString.escapeSpecialChars();
				this.loading = false;
				this.dataKata = JSON.parse(myEscapedJSONString);
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