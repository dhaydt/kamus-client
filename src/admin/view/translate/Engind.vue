<template>
	<div>
		<!-- start page title -->
		<Header :title="title"></Header>
		<!-- end page title -->
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
											v-model="search"
											id="search"
											@keydown.enter="findKata"
											placeholder="Tekan enter untuk mencari"
											class="form-control form-control-sm ml-2"
										></b-form-input>
									</label>
								</div>
							</div>
						</div>
						<b-alert
							v-model="showDismissibleAlert"
							class="mt-2 notif"
							variant="danger"
							dismissible
						>
							{{ error }}
						</b-alert>
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
								primary-key="id"
								:filter-included-fields="filterOn"
							>
								<template v-slot:cell(view)="data">
									<td class="no-border" v-html="data.item.view / 2"></td>
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
										@click="deleteKata(data.item.id)"
										title="Delete"
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
				<b-tab title="Tambah Kata"><Tambah></Tambah></b-tab>
			</b-tabs>
		</b-card>
	</div>
</template>
<script>
import { EllipsisLoader } from "vue-spinners-css";
import Header from "../../components/page-header.vue";
import axios from "axios";
import Tambah from "./addEng.vue";
import Manual from "./manualEngin.vue";
import Swal from "sweetalert2";

export default {
	data() {
		return {
			title: "Inggris - Indonesia",
			getEngUrl: "",
			loading: "",
			dataKata: [],
			jumlahData: null,
			error: "",
			showDismissibleAlert: false,
			search: "",
			findUrl: "",
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: ["judul_artikel"],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "id", sortable: true, label: "ID" },
				{ key: "judul_artikel", sortable: true, label: "Inggris" },
				{ key: "isi_artikel", sortable: true, label: "Indonesia" },
				{ key: "view", sortable: true, label: "View" },
				{ key: "action" },
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.getEngUrl = mainUrl + "/kamusInd/";
		this.findUrl = mainUrl + "/filEng/";
		this.loading = true;
		this.getEng();
	},

	mounted() {
		// Set the initial number of items
		this.$root.$on("getKata", this.getEng);
		this.totalRows = this.dataKata.length;
	},

	components: {
		EllipsisLoader,
		Tambah,
		Manual,
		Header,
	},

	computed: {
		/** Total no. of records*/
		rows() {
			return this.dataKata.length;
		},
	},

	methods: {
		async findKata() {
			this.loading = true;
			try {
				const response = await axios.get(this.findUrl + this.search);
				// this.dataHtml = response.data;
				this.jumlahData = response.data.length;

				if (this.jumlahData === 0) {
					this.error = "Data tidak ditemukan!";
					this.showDismissibleAlert = true;
					this.loading = false;

					console.log("row", this.jumlahData);
				} else {
					this.loading = false;
					this.dataKata = response.data;
				}
			} catch (err) {
				console.log(err);
			}
		},
		async getEng() {
			const resp = await axios.get(this.getEngUrl);
			this.dataKata = resp.data;
			this.loading = false;
			const row = resp.data.length;
			this.jumlahData = row;
			console.log(this.jumlahData);
		},
		onFiltered(filteredItems) {
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},

		// Delete Product
		async deleteKata(id) {
			console.log(id);
			try {
				await axios.delete(this.getEngUrl + `${id}`);
				this.getEng();
				Swal.fire({
					icon: "info",
					title: "Kata Deleted",
					text: "Successfully deleted Kata!",
				});
			} catch (err) {
				console.log(err);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.row-page {
	width: 100px;
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