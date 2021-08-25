<template>
	<div class="main-col">
		<div class="row mb-5">
			<div class="col-lg-12 mx-auto">
				<div class="bg-white p-5 rounded shadow">
					<!-- Custom rounded search bars with input group -->
					<!-- <form action=""> -->
					<p>Cari di Glossarium kami</p>

					<div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
						<div class="input-group">
							<input
								type="search"
								id="searchBar"
								required
								placeholder="Masukkan istilah yang anda cari..."
								aria-describedby="button-addon1"
								class="form-control border-0 bg-light"
							/>
							<div class="input-group-append">
								<button
									id="button-addon1"
									@click="cari"
									class="btn btn-link text-primary mt-1"
								>
									<i class="fa fa-search"></i>
								</button>
							</div>
						</div>
					</div>
					<!-- </form> -->
					<!-- End -->
					<div id="mainBody" class="container text-center">
						<EllipsisLoader :loading="loading"></EllipsisLoader>
						<!-- <input id="checker" @isLoading="isLoading" type="text" /> -->
						<div id="results"></div>
					</div>
					<footer class="text-center"></footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// import axios from "axios";
import { EllipsisLoader } from "vue-spinners-css";
global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
	data() {
		return {
			kata: [],
			checker: "",
			loading: false,
		};
	},

	components: {
		EllipsisLoader,
	},

	methods: {
		cari() {
			this.loading = !this.loading;
		},
		isLoading(e) {
			console.log("work", e);
		},
	},

	watch: {
		kata: function () {
			console.log("work", this.kata);
		},

		// loading: function () {
		// 	console.log("loading");
		// },
	},

	mounted() {
		$(document).ready(function () {
			var keyword = "";
			var resultArea = $("#results");
			var searchBar = $("#searchBar");
			var searchButton = $("#button-addon1");
			var searchUrl = "http://localhost:3002/findGlos/";
			var displayResults = function () {
				$.ajax({
					url: searchUrl + keyword,
					dataType: "json",
					data: {
						action: "query",
						format: "json",
					},
					success: function (results) {
						// var results = results;
						// console.log("res", json);
						String.prototype.jsonEncode = function () {
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

						var getString = JSON.stringify(results);
						var tranform = getString.jsonEncode();

						var words = JSON.parse(tranform);
						$.map(words, function (word) {
							var elem1 = $("<div>");
							elem1.attr("target", "shadow card");
							var elem2 = $("<li>");
							elem2.append($(`<h3>`).text(word.judul_glos));

							elem2.append(
								$("<p>").html(
									"<em> Bidang &nbsp; : &nbsp;  </em>" + word.bid_glos
								)
							);
							elem2.append(
								$("<p>").html(
									`<em> Makna &nbsp; : &nbsp; </em>` + word.isi_glos
								)
							);
							elem1.append(elem2);
							resultArea.append(elem1);
						});
						var check = jQuery.isEmptyObject(words);
						// this.kata = words;
						// $("EllipsisLoader").__vue__.isLoading();

						if (check === true) {
							$("footer").append("Data Not Found");
							// this.loading = false;
						} else {
							$("footer").append("----->>END<-----");
						}
					},
				});
			};
			searchButton.click(function () {
				keyword = searchBar.val();
				resultArea.empty();
				$("footer").empty();
				displayResults();
				// $("#searchBox").animate({ "padding-top": "0" }, 600);
				// $(".container-fluid").animate({ height: "30vh" }, 600);
			});

			searchBar.keypress(function (e) {
				if (e.keyCode == 13) $(searchButton).click();
			});
		});
	},
};
</script>

<style>
#results li {
	letter-spacing: 0;
	padding: 10px 30px;
	list-style: none;
	min-height: 200px;
	background: #fff;
	/* border-bottom: 1px solid red; */
	margin: -20px auto;
	text-align: left;
	-webkit-transition: box-shadow 0.2s ease-out 0.2s;
	-moz-transition: box-shadow 0.2s ease-out 0.2s;
	-o-transition: box-shadow 0.2s ease-out 0.2s;
	transition: box-shadow 0.2s ease-out 0.2s;
	/* word-spacing: 2px; */
}

#results li > h3 {
	text-transform: capitalize;
	margin-top: 0;
	color: #e35865;
	line-height: 2;
}

#results li > p {
	color: #666;
	margin-left: 20px;
	margin-bottom: 5px;
	line-height: 2;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main-col {
	background: #fff;
	letter-spacing: 2px;
	min-height: 101vh;
}

a:hover,
a:active {
	text-decoration: none;
}

input[type="text"],
select {
	outline: none;
}

.col-xs-1 {
	padding: 0;
}

h1 {
	// font-family: "Arvo", sans-serif;
	color: #6e737b;
}

.header .container-fluid {
	margin: 0;
	background-color: #bcc0c7;
	box-shadow: 0 0px 3px 3px rgba(0, 0, 0, 0.4);
	height: 100vh;
	min-height: 150px;
}

.container {
	max-width: 720px;
	margin: auto;
	padding: 0 50px;
}

ul {
	padding: 0;
}

input {
	border-radius: 20%;
}
#searchBox {
	padding-top: 40vh;
}

button {
	background: none;
	border: none;
}

// .form {
// 	padding: 10px 0;
// 	padding-right: 15px;
// 	border: 3px solid #6e737b;
// 	border-radius: 50px;
// }

.form.col-xs-12 {
	padding-left: 0;
}

.glyphicon {
	color: #e35865;
	font-size: 20px;
	line-height: 25px;
}

.fa-search {
	cursor: pointer;
	vertical-align: super;
	margin-right: 10px;
}

.fa-search:hover {
}

.bar {
	vertical-align: super;
	font-weight: 700;
	font-size: 22px;
	// font-family: "Montserrat", sans-serif;
}

li:hover {
	box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);
}

::-webkit-input-placeholder {
	color: #bbb;
	opacity: 1;
}

:-moz-placeholder {
	/* Firefox 18- */
	color: #bbb;
	opacity: 1;
}

::-moz-placeholder {
	/* Firefox 19+ */
	color: #bbb;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #bbb;
	opacity: 1;
}

/*********media query starts ***********/

@media screen and (max-width: 420px) {
	#searchBar,
	.glyphicon {
		font-size: 16px;
	}

	h1 {
		font-size: 28px;
	}
}

/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.form-control:focus {
	box-shadow: none;
}

.form-control-underlined {
	border-width: 0;
	border-bottom-width: 1px;
	border-radius: 0;
	padding-left: 0;
}

/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*
*/

.form-control::placeholder {
	font-size: 0.95rem;
	color: #aaa;
	font-style: italic;
}
</style>
