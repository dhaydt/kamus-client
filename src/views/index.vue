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
@import url("https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import "../assets/assets/css/plugins.css";
@import "../assets/assets/css/styles.css";
body {
	color: rgb(19, 19, 19);
	font-size: 15px;
	font-family: Mulish, sans-serif !important;
	overflow-x: hidden;
	font-weight: 400;
	line-height: 1.7;
	background: rgb(255, 255, 255);
	margin: 0px;
}

.mainMenu {
	padding-top: 80px;
	background-color: #fff;
}

.guide {
	color: #fff;
	margin-bottom: 1.2rem;
}

// .pre-container {
// 	background-color: #f6f7f9;
// 	padding-top: 70px;
// }

.iklanLandscape {
	width: 100%;
	max-height: 100px;
}

.cardIklan .card-body {
	padding: 0;
}
</style>
