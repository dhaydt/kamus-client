<template>
	<div class="dashboard">
		<div id="preloader">
			<div id="status">
				<div class="spinner">
					<i class="ri-loader-line spin-icon"></i>
				</div>
			</div>
		</div>

		<!-- Begin page -->
		<div id="layout-wrapper">
			<Topbar />
			<SideBar :is-condensed="isMenuCondensed" type="dark" width="fluid" />
			<!-- ============================================================== -->
			<!-- Start right Content here -->
			<!-- ============================================================== -->
			<div class="main-content">
				<div class="page-content p-3">
					<div class="container-fluid" style="min-height: 80vh">
						<router-view></router-view>
					</div>
				</div>
				<Footer />
			</div>
			<Rightsidebar />
		</div>
	</div>
</template>

<script>
import router from "@/router";
// import { layoutComputed } from "@/state/helpers";

import Topbar from "./components/topbar";
import SideBar from "./components/side-bar";
import Rightsidebar from "./components/right-sidebar";
import Footer from "./components/footer";

export default {
	components: { Topbar, SideBar, Rightsidebar, Footer },
	data() {
		return {
			isMenuCondensed: false,
		};
	},
	created: () => {
		document.body.removeAttribute("data-layout", "horizontal");
		document.body.removeAttribute("data-topbar", "dark");
		document.body.setAttribute("data-sidebar", "dark");
	},
	computed: {
		// ...layoutComputed,
	},
	methods: {
		toggleMenu() {
			document.body.classList.toggle("sidebar-enable");

			if (window.screen.width >= 992) {
				// eslint-disable-next-line no-unused-vars
				router.afterEach((routeTo, routeFrom) => {
					document.body.classList.remove("sidebar-enable");
					document.body.classList.remove("vertical-collpsed");
				});
				document.body.classList.toggle("vertical-collpsed");
			} else {
				// eslint-disable-next-line no-unused-vars
				router.afterEach((routeTo, routeFrom) => {
					document.body.classList.remove("sidebar-enable");
				});
				document.body.classList.remove("vertical-collpsed");
			}
			this.isMenuCondensed = !this.isMenuCondensed;
		},
		toggleRightSidebar() {
			document.body.classList.toggle("right-bar-enabled");
		},
		hideRightSidebar() {
			document.body.classList.remove("right-bar-enabled");
		},
	},
	mounted() {
		document.body.classList.remove("auth-body-bg");
		if (this.loader === true) {
			document.getElementById("preloader").style.display = "block";
			document.getElementById("status").style.display = "block";

			setTimeout(function () {
				document.getElementById("preloader").style.display = "none";
				document.getElementById("status").style.display = "none";
			}, 2500);
		} else {
			document.getElementById("preloader").style.display = "none";
			document.getElementById("status").style.display = "none";
		}
	},
};
</script>
<style lang="scss" scoped>
.dashboard {
	background-color: #eef1f8 !important;
}
.main-content {
	margin-top: 60px;
}
</style>

<style>
.row-page {
	width: 100px;
}

.lds-ellipsis {
	position: absolute !important;
	margin-top: 30px;
	left: 45%;
}

.notif {
	position: absolute !important;
	margin-top: 60px !important;
	left: 25%;
	z-index: 5;
	width: 50%;
}

#sidebar-menu .has-arrow:after {
	content: "";
	font-family: "Material Design Icons";
	display: block;
	float: right;
	transition: transform 0.2s;
	font-size: 1rem;
}
#sidebar-menu .mm-active > .has-arrow:after {
	transform: rotate(-135deg);
}

#search,
.input-30 {
	height: 30px !important;
	padding: 5px 10px;
	max-height: 45px !important;
}
</style>