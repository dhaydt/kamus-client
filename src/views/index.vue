<template>
	<body class="blue-skin">
		<!-- ============================================================== -->
		<!-- Main wrapper - style you can find in pages.scss -->
		<!-- ============================================================== -->
		<div id="main-wrapper">
			<!-- ============================================================== -->
			<!-- Top header  -->
			<!-- ============================================================== -->
			<!-- Start Navigation -->
			<div class="header header-transparent dark-text">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<nav
								id="navigation"
								class="navigation navigation-landscape navbar-expand-lg"
							>
								<div class="nav-header">
									<router-link class="nav-brand" to="/">
										<img
											class="logo"
											alt=""
											src="../assets/assets/img/logo-kbbi.png"
										/>
									</router-link>
									<!-- <button
										class="navbar-toggler txt-black ml-auto"
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span class="navbar-toggler-icon" style="color: black"
											><i class="ri-menu-line align-middle"></i
										></span>
									</button> -->
									<div class="d-flex d-md-flex d-lg-none align-items-center">
										<b-button
											v-b-toggle.my-sidebar
											variant="white"
											class="ml-auto"
											><span class="navbar-toggler-icon" style="color: black"
												><i class="ri-menu-line align-middle"></i></span
										></b-button>
									</div>
									<b-sidebar
										id="my-sidebar"
										title="Kamus Kbbi.id"
										bg-variant="dark"
										text-variant="white"
									>
										<div class="px-3 py-2">
											<router-link to="/" class="nav-link text-white"
												>Home<span class="submenu-indicator"></span
											></router-link>
											<router-link to="/kbbi" class="nav-link text-white"
												>KBBI<span class="submenu-indicator"></span
											></router-link>
											<router-link to="/terjemahan" class="nav-link text-white"
												>Terjemahan<span class="submenu-indicator"></span
											></router-link>
											<router-link to="/glossarum" class="nav-link text-white"
												>Istilah<span class="submenu-indicator"></span
											></router-link>
											<router-link to="/artinama" class="nav-link text-white"
												>Arti Nama<span class="submenu-indicator"></span
											></router-link>
											<router-link to="/admin" class="nav-link text-white"
												>Admin<span class="submenu-indicator"></span
											></router-link>
										</div>
									</b-sidebar>
								</div>
								<div
									class="nav-menus-wrapper collapse navbar-collapse"
									id="navbarSupportedContent"
								>
									<ul class="nav-menu navbar-nav">
										<li class="nav-item">
											<router-link to="/" class="nav-link txt-black"
												>Home<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="nav-item">
											<router-link to="/kbbi" class="nav-link txt-black"
												>KBBI<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="nav-item">
											<router-link to="/artinama" class="nav-link txt-black"
												>Arti Nama<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="nav-item">
											<router-link to="/glossarium" class="nav-link txt-black"
												>Istilah<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="nav-item">
											<router-link to="/terjemahan" class="nav-link txt-black"
												>Terjemahan<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="ml-auto nav-item">
											<router-link to="/admin" class="nav-link txt-black"
												>Admin<span class="submenu-indicator"></span
											></router-link>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
			<!-- End Navigation -->
			<div class="clearfix"></div>
			<!-- ================== TOP Header End ============================= -->

			<router-view />
			<Footer></Footer>
		</div>
	</body>
</template>
<script>
import Footer from "../components/partials/Footer.vue";
export default {
	components: {
		Footer,
	},
};
</script>
<style lang="scss">
@import "../assets/frontend/main.css";
.txt-trans {
	text-transform: capitalize;
}

.bor-rad-0 {
	border-radius: 0 !important;
}

@media (max-width: 992px) {
	.nav-link.txt-black {
		color: black;
	}

	.nav-header {
		width: 100%;
		justify-content: space-between;
		display: flex;
	}

	li.nav-item {
		margin-left: 0 !important;
		.nav-link {
			padding: 15px;
		}
	}

	.mainMenu {
		padding-top: 0;
	}
}

.nav-header #my-sidebar {
	background-color: #1f2338 !important;
}

div .nav-link {
	border-top: solid 1px #2d324c;
	font-weight: 700;
}

#my-sidebar > div > div > a:nth-child(6) {
	border-bottom: solid 1px #2d324c;
}

#my-sidebar > header > button {
	background-color: #3653da;
	border-radius: 50%;
	padding: 5px;
	svg {
		color: white !important;
		font-weight: 700;
	}
}
</style>
