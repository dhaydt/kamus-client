<template>
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
				<div id="tickets-table_length" class="dataTables_length text-md-right">
					<label class="d-inline-flex align-items-center">
						Search:
						<b-form-input
							type="search"
							id="search"
							v-model="search"
							@keydown.enter="findKata"
							class="form-control form-control-sm ml-2"
							placeholder="Tekan enter untuk mencari"
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
				primary-key="_id"
				:filter-included-fields="filterOn"
			>
				<!-- @filtered="onFiltered" -->
				<template v-slot:cell(keterangan)="data">
					<td v-html="data.item.keterangan" class="no-border"></td>
				</template>

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
						@click="deleteKata(data.item._id)"
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
			<!-- Modal -->
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
										v-model="data._id"
										class="form-control"
										id="_id"
										readonly
										hidden
									/>
									<label for="kata" class="col-form-label">Kata:</label>
									<input
										type="text"
										v-model="data.kata"
										class="form-control input-30"
										id="kata"
									/>
								</div>
								<div class="form-group">
									<label for="tipe" class="col-form-label">Tipe:</label>
									<select
										class="form-control input-30"
										required
										id="tipe"
										v-model="data.tipe"
									>
										<option value="KBBI">KBBI</option>
										<option value="Tesaurus">Tesaurus</option>
									</select>
								</div>
								<div class="form-group">
									<label for="makna" class="col-form-label">Makna:</label>
									<ckeditor
										:editor="editor"
										v-model="data.keterangan"
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
	</div>
</template>

<script>
// import $ from "jquery";
import axios from "axios";
import { EllipsisLoader } from "vue-spinners-css";
import { BSpinner } from "bootstrap-vue";
import Swal from "sweetalert2";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
	data() {
		return {
			getKamusUrl: "",
			loading: false,
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
			filter: "",
			filterOn: ["kata"],
			sortBy: "ID",
			sortDesc: false,
			fields: [
				{ key: "_id", sortable: true, label: "ID" },
				{ key: "kata", sortable: true, label: "Kata" },
				{ key: "keterangan", sortable: false, label: "Makna" },
				{ key: "tipe", sortable: true, label: "Tipe" },
				{ key: "View", sortable: true, label: "View" },
				{ key: "action" },
			],

			editor: ClassicEditor,
			editorData:
				"<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
			data: {
				_id: "",
				kata: "",
				keterangan: "",
				tipe: "",
			},
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.getKamusUrl = mainUrl + "/kamusCadangan";
		this.getKamus();
		this.findUrl = mainUrl + "/filKbbiManual/";
		this.loading = true;
	},
	components: {
		EllipsisLoader,
		ckeditor: CKEditor.component,
		BSpinner,
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
		this.$root.$on("getKamus", this.getKamus);
	},
	methods: {
		async findKata() {
			this.loading = true;
			try {
				const response = await axios.get(this.findUrl + this.search);
				this.dataHtml = response.data;
				this.jumlahData = response.data.length;

				if (this.jumlahData === 0) {
					this.error = "Data tidak ditemukan!";
					this.showDismissibleAlert = true;
					this.loading = false;

					console.log("row", this.jumlahData);
				} else {
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
				}
			} catch (err) {
				console.log(err);
			}
		},

		showModalEdit(val) {
			// this.statusmodal = true;
			// this.form.reset();
			window.$("#modalmuncul").modal("show");
			this.data._id = val._id;
			this.data.kata = val.kata;
			this.data.tipe = val.tipe;
			this.data.keterangan = val.keterangan;
		},
		handleFilter(val) {
			clearTimeout(this.$_timeout);
			this.$_timeout = setTimeout(() => {
				this.criteria = val;
			}, 350000); // set this value to your preferred debounce timeout
		},

		onFiltered(filteredItems) {
			this.loading = true;
			// Trigger pagination to upkata the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
			this.loading = false;
		},

		async updateData() {
			this.loading = true;
			const resp = await axios.put(this.getKamusUrl + "/" + this.data._id, {
				kata: this.data.kata,
				tipe: this.data.tipe,
				keterangan: this.data.keterangan,
			});
			this.loading = false;
			const data = JSON.parse(resp.config.data);
			window.$("#modalmuncul").modal("hide");
			Swal.fire({
				icon: "success",
				title: "Update Berhasil",
				text: "Kata " + data.kata + " berhasil diubah!!!",
			});
			this.getKamus();
			console.log(data.kata);
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

<style lang="scss" scoped>
</style>