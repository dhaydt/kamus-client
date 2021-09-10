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
									<button
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
									</button>
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
</style>
