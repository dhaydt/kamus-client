<template>
	<header id="page-topbar" style="position: fixed; z-index: 2">
		<div class="navbar-header">
			<div class="d-flex">
				<!-- LOGO -->
				<div class="navbar-brand-box">
					<router-link to="/" class="logo logo-dark">
						<span class="logo-sm">
							<img src="@/assets/images/logo-sm-dark.png" alt height="22" />
						</span>
						<span class="logo-lg">
							<img src="@/assets/images/logo-dark.png" alt height="20" />
						</span>
					</router-link>

					<router-link to="/" class="logo logo-light">
						<span class="logo-sm">
							<img src="@/assets/assets/img/icon-kbbi.png" alt height="22" />
						</span>
						<span class="logo-lg">
							<img src="@/assets/assets/img/logo-kbbi.png" alt height="28" />
						</span>
					</router-link>
				</div>

				<button
					@click="toggleMenu"
					type="button"
					class="btn btn-sm px-3 font-size-24 header-item waves-effect"
					id="vertical-menu-btn"
				>
					<i class="ri-menu-2-line align-middle" style="color: black"></i>
				</button>
			</div>

			<div class="d-flex">
				<div class="dropdown d-inline-block d-lg-none ml-2">
					<button
						type="button"
						class="btn header-item noti-icon waves-effect"
						id="page-header-search-dropdown"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<i class="ri-search-line"></i>
					</button>
					<div
						class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
						aria-labelledby="page-header-search-dropdown"
					>
						<form class="p-3">
							<div class="form-group m-0">
								<div class="input-group">
									<input
										type="text"
										class="form-control"
										placeholder="Search ..."
									/>
									<div class="input-group-append">
										<button class="btn btn-primary" type="submit">
											<i class="ri-search-line"></i>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>

				<div class="dropdown d-none d-lg-inline-block ml-1">
					<button
						type="button"
						class="btn header-item noti-icon waves-effect"
						@click="initFullScreen"
					>
						<i class="ri-fullscreen-line"></i>
					</button>
				</div>

				<b-dropdown
					right
					variant="white"
					toggle-class="header-item"
					class="d-inline-block user-dropdown"
				>
					<template v-slot:button-content>
						<b-avatar
							style="color: grey; background-color: transparent"
						></b-avatar>
						<span class="d-none d-xl-inline-block ml-1 mx-2 txt-black">{{
							user.username
						}}</span>
						<i
							class="mdi mdi-chevron-down d-none d-xl-inline-block txt-black"
						></i>
					</template>
					<!-- item-->
					<a class="dropdown-item" href="#">
						<i class="ri-user-line align-middle mr-1"></i>
						Profile
					</a>
					<div class="dropdown-divider"></div>
					<a type="button" class="dropdown-item text-danger" @click="logout">
						<i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
						Logout
					</a>
				</b-dropdown>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			user: {},
		};
	},

	created() {
		this.user = JSON.parse(localStorage.getItem("user"));
		console.log(this.user.username);
	},
	methods: {
		logout() {
			localStorage.removeItem("user");
			localStorage.removeItem("jwt");
			this.$router.push("/");
		},
		toggleMenu() {
			this.$parent.toggleMenu();
		},
		initFullScreen() {
			document.body.classList.toggle("fullscreen-enable");
			if (
				!document.fullscreenElement &&
				/* alternative standard method */ !document.mozFullScreenElement &&
				!document.webkitFullscreenElement
			) {
				// current working methods
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(
						Element.ALLOW_KEYBOARD_INPUT
					);
				}
			} else {
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
		},
		toggleRightSidebar() {
			this.$parent.toggleRightSidebar();
		},
	},
};
</script>



<style lang="scss" scoped>
.notify-item {
	.active {
		color: #16181b;
		background-color: #f8f9fa;
	}
}

.txt-black {
	color: black;
	text-transform: capitalize;
}
</style>