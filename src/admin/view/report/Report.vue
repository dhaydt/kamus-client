<template>
	<div class="reportPage">
		<Header :title="title"></Header>
		<b-card>
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
						<template v-slot:cell(created_at)="data">
							<td class="no-border">{{ data.item.created_at | moment }}</td>
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
						<div class="dataTables_paginate paging_simple_numbers float-right">
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
		</b-card>
	</div>
</template>

<script>
import { EllipsisLoader } from "vue-spinners-css";
import Header from "../../components/page-header.vue";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";

export default {
	data() {
		return {
			getReportUrl: "",
			title: "Report Kata",
			loading: "",
			dataKata: [],
			jumlahData: null,
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "id", label: "ID", sortable: true },
				{ key: "kata", label: "Kata", sortable: true },
				{ key: "bidang", label: "Bidang", sortable: true },
				{ key: "created_at", label: "Tanggal report", sortable: true },
				{ key: "action" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.getReportUrl = mainUrl + "/getReport";
		this.getReport();
		this.loading = true;
	},

	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},

	components: {
		EllipsisLoader,
		Header,
	},

	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.dataKata.length;
		},
	},

	methods: {
		async getReport() {
			const report = await axios.get(this.getReportUrl);
			console.log(report.data);
			this.dataKata = report.data;
			this.loading = false;
			this.jumlahData = report.data.length;
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
				await axios.delete(this.getReportUrl + `/${id}`);
				this.getReport();
				Swal.fire({
					icon: "info",
					title: "Word Deleted",
					text: "Successfully deleted word!",
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