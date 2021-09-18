<template>
	<div>
		<Header :title="title"></Header>
		<b-card>
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
											v-model="filter"
											filter-debounce="200"
											lazy
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
								primary-key="_id"
								:filter-included-fields="filterOn"
								@filtered="onFiltered"
							>
								<!-- @filtered="onFiltered" -->
								<template v-slot:cell(keterangan)="data">
									<td class="no-border" v-html="data.item.keterangan"></td>
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
										@click="deleteKata(data.item._id)"
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
				<b-tab title="Kamus Tambahan">
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
import Manual from "./manualKbbi.vue";
import Tambah from "./addMultiple.vue";
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
			filterOn: ["kata"],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "_id", sortable: true, label: "ID" },
				{ key: "kata", sortable: true, label: "Kata" },
				{ key: "keterangan", sortable: true, label: "Makna" },
				{ key: "View", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},
	created() {
		const mainUrl = localStorage.mainUrl;
		this.getKamusUrl = mainUrl + "/kamus";
		this.getKamus();
		this.loading = true;
	},
	components: {
		EllipsisLoader,
		Manual,
		Tambah,
		Header,
	},
	computed: {
		/** Total no. of records */
		rows() {
			return this.dataKata.length;
		},
	},

	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
	},
	methods: {
		handleFilter(val) {
			clearTimeout(this.$_timeout);
			this.$_timeout = setTimeout(() => {
				this.criteria = val;
			}, 3000); // set this value to your preferred debounce timeout
		},

		onFiltered(filteredItems) {
			this.loading = true;
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
			this.loading = false;
		},

		async getKamus() {
			try {
				const response = await axios.get(this.getKamusUrl);
				this.dataHtml = response.data;
				this.jumlahData = response.data.length;
				String.prototype.escapeSpecialChars = function () {
					return (
						this.replace(/&lt;\/b&gt;/g, "</b>")
							/* eslint-disable */
							.replace(/&lt;b&gt;/g, "<b>")
							.replace(/&lt;\/sup&gt;/g, "</sup>")
							.replace(/&lt;sup&gt;/g, "<sup>")
							.replace(/&lt;\/i&gt;/g, "</i>")
							.replace(/&lt;i&gt;/g, "<i>")
							.replace(/&lt;br&gt;/g, "<br>")
							.replace(/\\b/g, "\\b")
							.replace(/\\f/g, "\\f")
					);
				};

				var myJSONString = JSON.stringify(this.dataHtml);
				var myEscapedJSONString = myJSONString.escapeSpecialChars();
				this.loading = false;
				this.dataKata = JSON.parse(myEscapedJSONString);
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