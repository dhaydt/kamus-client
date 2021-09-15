<template>
	<div class="userAdmin">
		<!-- start page title -->
		<Header :title="title"></Header>
		<b-card>
			<b-tabs content-class="mt-3" fill>
				<b-tab title="Daftar Admin" active>
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
								:filter-included-fields="filterOn"
							>
								<!-- @filtered="onFiltered" -->
								<template v-slot:cell(registered_at)="data">
									<td style="border-top: none">
										{{ data.item.registered_at | moment }}
									</td>
								</template>

								<template v-slot:cell(last_login)="data">
									<td style="border-top: none">
										{{ data.item.last_login | moment }}
									</td>
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
				<b-tab title="Tambah Admin">
					<Tambah></Tambah>
				</b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import Tambah from "./addUser.vue";
import Header from "../../components/page-header.vue";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";

export default {
	data() {
		return {
			getKamusUrl: "",
			loading: false,
			text: "",
			title: "User Management",
			dataHtml: [],
			jumlahData: null,
			dataKata: [],
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "Terdaftar",
			sortDesc: false,
			fields: [
				// { key: "id", sortable: true, label: "ID" },
				{ key: "username", sortable: true, label: "Nama" },
				{ key: "email", sortable: true, label: "E-Mail" },
				{ key: "registered_at", sortable: true, label: "Terdaftar" },
				{ key: "last_login", sortable: true, label: "Terakhir Login" },
				{ key: "action" },
			],
		};
	},
	created() {
		const mainUrl = localStorage.mainUrl;
		this.getKamusUrl = mainUrl + "/getUser";
		this.getKamus();
		this.loading = true;
	},
	components: {
		EllipsisLoader,
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
		this.$root.$on("getUser", this.getKamus);
		this.totalRows = this.dataKata.length;
	},
	methods: {
		handleFilter(val) {
			clearTimeout(this.$_timeout);
			this.$_timeout = setTimeout(() => {
				this.criteria = val;
			}, 150); // set this value to your preferred debounce timeout
		},

		async getKamus() {
			try {
				const response = await axios.get(this.getKamusUrl);
				this.loading = false;
				this.dataKata = response.data;
				this.jumlahData = response.data.length;
				console.log(this.dataKata);
			} catch (err) {
				console.log(err);
			}
		},

		// Delete Product
		async deleteKata(id) {
			console.log(id);
			try {
				await axios.delete(this.getKamusUrl + `/${id}`);
				this.getKamus();
				Swal.fire({
					icon: "info",
					title: "Word Deleted",
					text: "Successfully deleted word!",
				});
				this.getKamus();
			} catch (err) {
				console.log(err);
			}
		},
	},
	filters: {
		moment: function (date) {
			return moment(date).format("dd, MM, YYYY, h:mm");
		},
	},
};
</script>

<style lang="scss" scoped>
.row-page {
	width: 100px;
}

input {
	height: 40px;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>