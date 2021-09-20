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
								v-model="filter"
								lazy
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
					:filter="filter"
					primary-key="id_glos"
					:sort-desc.sync="sortDesc"
					:filter-included-fields="filterOn"
					@filtered="onFiltered"
				>
					<!-- @filtered="onFiltered" -->
					<template v-slot:cell(bid_glos)="data">
						<td
							class="no-border d-flex flex-column"
							v-for="ind in JSON.parse(data.item.bid_glos)"
							:key="ind"
						>
							{{ ind }}
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
											v-model="data.id_glos"
											class="form-control"
											id="id"
											readonly
											hidden
										/>
										<label for="kata" class="col-form-label"
											>Istilah Ingrris:</label
										>
										<input
											type="text"
											required
											v-model="data.judul_eng_glos"
											class="form-control input-30"
											id="kata"
										/>
										<label for="kata" class="col-form-label"
											>Istilah Indonesia:</label
										>
										<input
											type="text"
											required
											v-model="data.judul_ind_glos"
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
											readonly
										/>
										<b-form-checkbox-group
											v-model="data.bid_glos"
											:options="options"
											required
										></b-form-checkbox-group>
									</div>
									<div class="form-group">
										<label for="makna" class="col-form-label"
											>Makna Ingrris:</label
										>
										<ckeditor
											:editor="editor"
											v-model="data.isi_eng_glos"
											class="form-control"
											id="makna"
										/>
										<label for="makna" class="col-form-label"
											>Makna Indonesia:</label
										>
										<ckeditor
											:editor="editor"
											v-model="data.isi_ind_glos"
											class="form-control"
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
import { EllipsisLoader } from "vue-spinners-css";
import axios from "axios";
import Swal from "sweetalert2";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
			filterOn: ["judul_eng_glos", "judul_ind_glos"],
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

			editor: ClassicEditor,
			editorData: "",

			options: [
				{ text: "Matematika", value: "Matematika" },
				{ text: "Kimia", value: "Kimia" },
				{ text: "Fisika", value: "Fisika" },
				{ text: "Biologi", value: "Biologi" },
				{ text: "Komputer", value: "Komputer" },
			],

			data: {
				id_glos: "",
				judul_eng_glos: "",
				judul_ind_glos: "",
				bid_glos: [],
				isi_eng_glos: "",
				isi_ind_glos: "",
			},
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
		ckeditor: CKEditor.component,
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
		showModalEdit(val) {
			// this.statusmodal = true;
			// this.form.reset();
			window.$("#modalmuncul").modal("show");
			this.data.id_glos = val.id_glos;
			this.data.judul_eng_glos = val.judul_eng_glos;
			this.data.judul_ind_glos = val.judul_ind_glos;
			this.data.bid_glos = JSON.parse(val.bid_glos);
			this.data.isi_eng_glos = val.isi_eng_glos;
			this.data.isi_ind_glos = val.isi_ind_glos;
		},

		async updateData() {
			this.loading = true;
			const resp = await axios.put(this.getKamusUrl + "/" + this.data.id_glos, {
				judul_eng_glos: this.data.judul_eng_glos,
				judul_ind_glos: this.data.judul_ind_glos,
				bid_glos: this.data.bid_glos,
				isi_eng_glos: this.data.isi_eng_glos,
				isi_ind_glos: this.data.isi_ind_glos,
			});
			this.loading = false;
			const data = JSON.parse(resp.config.data);
			window.$("#modalmuncul").modal("hide");
			// console.log(data);
			Swal.fire({
				icon: "success",
				title: "Update Berhasil",
				text: "Kata " + data.judul_eng_glos + " berhasil diubah!!!",
			});
			this.getKamus();
			console.log(data.judul_eng_glos);
		},

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

		onFiltered(filteredItems) {
			this.loading = true;
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
			this.loading = false;
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