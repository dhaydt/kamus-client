<template>
	<div id="app">
		<div id="nav" v-if="!$route.meta.hideNavbar">
			<div>
				<b-navbar toggleable="lg" type="light" fixed="top">
					<b-navbar-brand to="/">Kamus KBBI</b-navbar-brand>

					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav>
							<b-nav-item to="/">Home</b-nav-item>
							<b-nav-item to="/kbbi">Kamus</b-nav-item>
							<b-nav-item to="/artinama">Arti Nama</b-nav-item>
							<b-nav-item to="/glossarium">Glossarium</b-nav-item>
							<b-nav-item-dropdown right>
								<!-- Using 'button-content' slot -->
								<template #button-content>
									<em>Translate</em>
									<span class="fas fa-caret-down ml-2"></span>
								</template>
								<b-dropdown-item to="/engin"
									>Ingris - Indonesia</b-dropdown-item
								>
								<b-dropdown-item to="/ineng"
									>Indonesia - Ingris</b-dropdown-item
								>
							</b-nav-item-dropdown>
						</b-navbar-nav>

						<!-- Right aligned nav items -->
						<b-navbar-nav class="ml-auto">
							<b-nav-item to="/admin"> Admin </b-nav-item>
							<b-nav-item-dropdown right>
								<!-- Using 'button-content' slot -->
								<template #button-content>
									<em>User</em>
									<span class="fas fa-caret-down ml-2"></span>
								</template>
								<b-dropdown-item to="#">Profile</b-dropdown-item>
								<b-dropdown-item to="#">Sign Out</b-dropdown-item>
							</b-nav-item-dropdown>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
			<!-- <router-link to="/">Home</router-link> | -->
		</div>
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>