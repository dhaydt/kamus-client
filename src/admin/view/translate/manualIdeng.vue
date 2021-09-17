<template>
	<div>
		<div class="card-body pt-0">
			<div class="row justify-content-between">
				<div class="col-sm-12 col-md-6">
					<!-- Search -->
					<div id="tickets-table_filter" class="dataTables_filter text-md-left">
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
							data-target="#exampleModal"
							v-b-tooltip.hover
							data-toggle="tooltip"
							title="Edit"
							@click="showModalEdit(data.item)"
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
				<div
					class="modal fade"
					id="modalmuncul"
					tabindex="-1"
					aria-labelledby="modalmuncul1"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="modalmuncul1">Ubah Kata</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-group">
										<input
											type="text"
											v-model="data.id"
											class="form-control"
											id="_id"
											readonly
											hidden
										/>
										<label for="kata" class="col-form-label">Kata:</label>
										<input
											type="text"
											v-model="data.judul_artikel"
											class="form-control input-30"
											id="kata"
										/>
										<label for="makna" class="col-form-label"
											>Terjemahan :</label
										>
										<input
											type="text"
											v-model="data.isi_artikel"
											class="form-control input-30"
											id="makna"
										/>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-danger"
									data-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									@click="updateData"
									class="btn btn-primary"
								>
									<div v-if="loading">
										<b-spinner small variant="primary"></b-spinner> Menyimpan...
									</div>
									<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { EllipsisLoader } from "vue-spinners-css";
import Swal from "sweetalert2";
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
				{ key: "id", sortable: true, label: "ID" },
				{ key: "judul_artikel", sortable: true, label: "Kata" },
				{ key: "isi_artikel", sortable: true, label: "Makna" },
				{ key: "view", sortable: true, label: "View" },
				{ key: "action" },
			],

			data: {
				id: "",
				judul_artikel: "",
				isi_artikel: "",
			},
		};
	},

	components: {
		EllipsisLoader,
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
		this.getUrl = mainUrl + "/kamusEngCad";
		this.getEngin();
		this.loading = true;
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.dataKata.length;
		this.$root.$on("getKamus", this.getEngin);
	},
	methods: {
		showModalEdit(val) {
			// this.statusmodal = true;
			// this.form.reset();
			window.$("#modalmuncul").modal("show");
			this.data.id = val.id;
			this.data.judul_artikel = val.judul_artikel;
			this.data.isi_artikel = val.isi_artikel;
		},

		async updateData() {
			this.loading = true;
			const resp = await axios.put(this.getUrl + "/" + this.data.id, {
				judul_artikel: this.data.judul_artikel,
				isi_artikel: this.data.isi_artikel,
			});
			this.loading = false;
			const data = JSON.parse(resp.config.data);
			window.$("#modalmuncul").modal("hide");
			Swal.fire({
				icon: "success",
				title: "Update Berhasil",
				text: "Kata " + data.judul_artikel + " berhasil diubah!!!",
			});
			this.getEngin();
			console.log(data.judul_artikel);
		},
		/**
		 * Search the table data with search input
		 */
		async getEngin() {
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
			console.log(id);
			try {
				await axios.delete(this.getUrl + `/${id}`);
				this.getEngin();
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
.no-border {
	border-top: none !important;
}

input {
	height: 30px;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>