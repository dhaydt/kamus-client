<template>
	<div>
		<div class="card-body pt-0">
			<div class="row justify-content-between">
				<div class="col-sm-12 col-md-6">
					<!-- Search -->
					<div id="tickets-table_filter" class="dataTables_filter text-md-left">
						<label class="d-inline-flex align-items-center">
							Show&nbsp;
							<b-form-select
								v-model="perPage"
								size="sm"
								:options="pageOptions"
								class="row-page"
							></b-form-select
							><em style="color: #a4a6ab"> &nbsp;From {{ jumlahData }} data</em>
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
					:filter-included-fields="filterOn"
				>
					<!-- @filtered="onFiltered" -->
					<template v-slot:cell(bid_glos)="data">
						<td class="no-border">
							{{ JSON.parse(data.item.bid_glos)[0] }}
						</td>
					</template>
					<template v-slot:cell(isi_eng_glos)="data">
						<td class="no-border" v-html="data.item.isi_eng_glos"></td>
					</template>
					<template v-slot:cell(isi_ind_glos)="data">
						<td class="no-border" v-html="data.item.isi_ind_glos"></td>
					</template>

					<template v-slot:cell(view)="data">
						<td class="no-border" v-html="data.item.view / 2"></td>
					</template>

					<template v-slot:cell(action)="data" class="d-flex">
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
							@click="deleteKata(data.item.id_glos)"
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
	</div>
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import axios from "axios";
import Swal from "sweetalert2";
export default {
	data() {
		return {
			getKamusUrl: "",
			title: "KBBI Management",
			loading: false,
			dataHtml: [],
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
			fields: [
				{ key: "id_glos", sortable: true, label: "ID" },
				{ key: "judul_eng_glos", sortable: true, label: "Inggris" },
				{ key: "judul_ind_glos", sortable: true, label: "Indonesia" },
				{ key: "bid_glos", sortable: true, label: "Bidang" },
				{ key: "isi_eng_glos", sortable: true, label: "Makna Eng" },
				{ key: "isi_ind_glos", sortable: true, label: "Makna Ind" },
				{ key: "View", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},
	created() {
		const mainUrl = localStorage.mainUrl;
		this.getKamusUrl = mainUrl + "/glossariumCadangan2";
		this.getKamus();
		this.loading = true;
	},
	components: {
		EllipsisLoader,
	},
	computed: {
		/** Total no. of records */
		rows() {
			return this.dataKata.length;
		},
	},

	mounted() {
		// Set the initial number of items
		this.$root.$on("getGloss22", this.getKamus);
		this.totalRows = this.dataKata.length;
	},
	methods: {
		handleFilter(val) {
			clearTimeout(this.$_timeout);
			this.$_timeout = setTimeout(() => {
				this.criteria = val;
			}, 1500); // set this value to your preferred debounce timeout
		},

		async getKamus() {
			try {
				const response = await axios.get(this.getKamusUrl);
				const dataHtml = response.data;
				this.jumlahData = response.data.length;

				this.loading = false;
				this.dataKata = dataHtml;
			} catch (err) {
				console.log(err);
			}
		},

		// Delete Product
		async deleteKata(id) {
			this.loading = true;
			console.log(id);
			try {
				await axios.delete(this.getKamusUrl + `/${id}`);
				this.getKamus();
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
};
</script>

<style lang="scss">
.row-page {
	width: 100px;
}

.lds-ellipsis {
	position: absolute !important;
	margin-top: 30px;
	left: 45%;
}

.no-border {
	border-top: none !important;
}

#search {
	height: 30px !important;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>