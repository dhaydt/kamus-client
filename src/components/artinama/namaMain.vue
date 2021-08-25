<template>
	<div class="mainNama">
		<div class="row mb-5">
			<div class="col-lg-12 mx-auto">
				<div class="bg-white p-5 rounded shadow">
					<!-- Custom rounded search bars with input group -->
					<!-- <form action=""> -->
					<p>Cari di Database nama kami</p>
					<div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
						<div class="input-group">
							<input
								type="search"
								id="searchBar"
								v-model="cari"
								placeholder="Masukkan istilah yang anda cari..."
								aria-describedby="button-addon1"
								class="form-control border-0 bg-light"
							/>
							<div class="input-group-append">
								<button
									id="button-addon1"
									class="btn btn-link text-primary mt-1"
									@click="findName"
								>
									<i class="fa fa-search"></i>
								</button>
							</div>
						</div>
					</div>
					<!-- </form> -->
					<!-- End -->
					<div id="mainBody" class="container text-center">
						<ul id="results"></ul>
					</div>
					<footer class="text-center"></footer>
				</div>
			</div>
		</div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Random Nama</h4>
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div id="tickets-table_length" class="dataTables_length">
							<label class="d-inline-flex align-items-center">
								Show&nbsp;
								<b-form-select
									v-model="perPage"
									size="sm"
									:options="pageOptions"
								></b-form-select
								>&nbsp;entries
							</label>
						</div>
					</div>
					<!-- Search -->
					<div class="col-sm-12 col-md-6">
						<div
							id="tickets-table_filter"
							class="dataTables_filter text-md-right"
						>
							<label class="d-inline-flex align-items-center">
								Search:
								<b-form-input
									v-model="filter"
									type="search"
									placeholder="Search..."
									class="form-control form-control-sm ml-2"
								></b-form-input>
							</label>
						</div>
					</div>
					<!-- End search -->
				</div>
				<!-- Table -->
				<div class="table-responsive mb-0">
					<b-table
						:items="tableData"
						:fields="fields"
						responsive="sm"
						:per-page="perPage"
						:current-page="currentPage"
						:sort-by.sync="sortBy"
						:sort-desc.sync="sortDesc"
						:filter="filter"
						:filter-included-fields="filterOn"
						@filtered="onFiltered"
					></b-table>
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
	</div>
</template>

<script>
import axios from "axios";
import jQuery from "jquery";

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

/**
 * Advanced table component
 */
export default {
	page: {
		title: "Advanced Table",
		meta: [{ name: "description", content: "ariNamw" }],
	},
	components: {},
	data() {
		return {
			tableData: [],
			cari: "",
			loading: "",
			hasil: "",
			title: "Advanced Table",
			url: "http://localhost:3002/findNama/",
			items: [
				{
					text: "Tables",
					href: "/",
				},
				{
					text: "Advanced",
					active: true,
				},
			],
			totalRows: 1,
			currentPage: 1,
			perPage: 10,
			pageOptions: [10, 25, 50, 100],
			filter: null,
			filterOn: [],
			sortBy: "age",
			sortDesc: false,
			fields: [
				{ key: "judul_nama", label: "Nama", sortable: true },
				{ key: "kelamin_nama", label: "Kelamin", sortable: true },
				{ key: "asal_nama", label: "Asal", sortable: true },
				{ key: "isi_nama", label: "Arti Nama", sortable: true },
				{ key: "perfix_nama", label: "Prefix Nama", sortable: true },
			],
		};
	},
	created() {
		this.getNama();
	},
	computed: {
		/**
		 * Total no. of records
		 */
		rows() {
			return this.tableData.length;
		},
	},
	mounted() {
		// Set the initial number of items
		this.totalRows = this.items.length;
	},
	methods: {
		async getNama() {
			const response = await axios.get("http://localhost:3002/nama");
			// console.log("name", response);
			this.tableData = response.data;
		},
		/**
		 * Search the table data with search input
		 */
		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length;
			this.currentPage = 1;
		},

		async findName() {
			this.loading == true;

			const resp = await axios.get(this.url + this.cari);

			this.hasil = resp.data;

			const data = this.hasil;

			$(document).ready(function () {
				$("#results").empty();
				loadData();

				function loadData() {
					$.map(data, function (data) {
						var elem1 = $("<a>");
						elem1.attr("target", "_blank");
						var elem2 = $("<li>");
						elem2.append(
							$(`<h3>`).text(data ? data.judul_nama : "Word Not Found")
						);

						elem2.append($(`<p>`).html(`<em> Makna : </em>` + data.isi_nama));
						elem2.append($(`<p>`).html(`<em> Asal : </em>` + data.asal_nama));
						elem2.append(
							$(`<p>`).html(`<em> Kelamin : </em>` + data.kelamin_nama)
						);
						elem2.append(
							$(`<p>`).html(`<em> Prefix : </em>` + data.perfix_nama)
						);
						elem1.append(elem2);
						$("#results").append(elem1);
						console.log("cari artinama", data);
					});

					var check = jQuery.isEmptyObject(data);
					if (check === true) {
						$("footer").append("Data tidak ditemukan!!!");
					} else {
						$("footer").append("|----- End data -----|");
					}
				}
			});
			this.loading = "";
		},
	},
};
</script>
