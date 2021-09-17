<template>
	<div>
		<b-tabs content-class="mt-3">
			<b-tab title="Istilah Lama">
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
								<td class="no-border" v-html="data.item.isi_glos"></td>
							</template>

							<template v-slot:cell(bid_glos)="data">
								<td class="no-border">
									{{ JSON.parse(data.item.bid_glos)[0] }}
								</td>
							</template>

							<template v-slot:cell(view)="data">
								<td v-html="data.item.view / 2"></td>
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
			<b-tab title="Istilah Baru"><Manual2></Manual2></b-tab>
		</b-tabs>
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
									v-model="data.id_glos"
									class="form-control"
									id="id"
									readonly
									hidden
								/>
								<label for="kata" class="col-form-label">Istilah:</label>
								<input
									type="text"
									required
									v-model="data.judul_glos"
									class="form-control input-30"
									id="kata"
								/>
								<label for="kata" class="col-form-label">Bahasa:</label>
								<input
									type="text"
									required
									v-model="data.bahasa"
									class="form-control input-30"
									id="kata"
								/>
							</div>
							<div class="form-group">
								<label for="kata" class="col-form-label">Bidang:</label>
								<input
									type="text"
									required
									v-model="data.bid_glos"
									class="form-control input-30"
									id="kata"
								/>
							</div>
							<div class="form-group">
								<label for="makna" class="col-form-label">Makna:</label>
								<ckeditor
									:editor="editor"
									v-model="data.isi_glos"
									class="form-control"
									id="makna"
								/>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-danger" data-dismiss="modal">
							Close
						</button>
						<button type="button" @click="updateData" class="btn btn-primary">
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
</template>

<script>
import axios from "axios";
import { EllipsisLoader } from "vue-spinners-css";
import Swal from "sweetalert2";
import Manual2 from "./manualGlos2.vue";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
			editor: ClassicEditor,
			editorData:
				"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",

			options: [
				{ text: "Matematika", value: "Matematika" },
				{ text: "Kimia", value: "Kimia" },
				{ text: "Fisika", value: "Fisika" },
				{ text: "Biologi", value: "Biologi" },
				{ text: "Komputer", value: "Komputer" },
			],

			data: {
				id_glos: "",
				judul_glos: "",
				bid_glos: [],
				bahasa: "",
				isi_glos: "",
			},
		};
	},

	components: {
		EllipsisLoader,
		Manual2,
		ckeditor: CKEditor.component,
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
		showModalEdit(val) {
			// this.statusmodal = true;
			// this.form.reset();
			window.$("#modalmuncul").modal("show");
			this.data.id_glos = val.id_glos;
			this.data.judul_glos = val.judul_glos;
			this.data.bid_glos = val.bid_glos;
			this.data.bahasa = val.bahasa;
			this.data.isi_glos = val.isi_glos;
		},

		async updateData() {
			this.loading = true;
			const resp = await axios.put(this.getUrl + "/" + this.data.id_glos, {
				judul_glos: this.data.judul_glos,
				bid_glos: this.data.bid_glos,
				isi_glos: this.data.isi_glos,
				bahasa: this.data.bahasa,
			});
			this.loading = false;
			const data = JSON.parse(resp.config.data);
			window.$("#modalmuncul").modal("hide");
			Swal.fire({
				icon: "success",
				title: "Update Berhasil",
				text: "Kata " + data.judul_glos + " berhasil diubah!!!",
			});
			this.getGloss();
			console.log(data.id_glos);
		},
		/**
		 * Search the table data with search input
		 */
		async getGloss() {
			try {
				const response = await axios.get(this.getUrl);
				const dataHtml = response.data;
				this.jumlahData = response.data.length;

				this.loading = false;
				this.dataKata = dataHtml;
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