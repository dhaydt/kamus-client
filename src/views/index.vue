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
							<nav id="navigation" class="navigation navigation-landscape">
								<div class="nav-header">
									<router-link class="nav-brand" to="/">
										<img
											class="logo"
											alt=""
											src="../assets/assets/img/logo-kbbi.png"
										/>
									</router-link>
									<div class="nav-toggle"></div>
								</div>
								<div class="nav-menus-wrapper">
									<ul class="nav-menu">
										<li>
											<router-link to="/"
												>Home<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li>
											<router-link to="/kbbi"
												>KBBI<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li>
											<router-link to="/artinama"
												>Arti Nama<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li>
											<router-link to="/glossarium"
												>Istilah<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li>
											<router-link to="/terjemahan"
												>Terjemahan<span class="submenu-indicator"></span
											></router-link>
										</li>
										<li class="ml-auto">
											<router-link to="/admin"
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
</style>
