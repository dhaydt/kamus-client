<template>
	<div class="populer mt-5 pt-5">
		<b-container>
			<b-row class="justify-content-center">
				<b-col>
					<div class="heading">
						<h2>Kata yang sering <span class="head">Dicari</span></h2>
						<p>
							Setiap hari 5-6k pengunjung mencari makna kata di web
							kamuskbbi.id. Berikut kata yang sering mereka cari dikelompokkan
							sesuai kategorinya.
						</p>
					</div>
					<div class="content mt-4 pt-4">
						<b-container>
							<b-card-group deck>
								<b-row class="w-100 justify-content-center">
									<b-col
										md="6"
										lg="4"
										sm="12"
										class="mb-4"
										v-for="menu in menus"
										:key="menu.id"
									>
										<b-card
											:img-src="menu.img"
											style="max-height: 60vh; min-height: 60vh"
										>
											<div class="title">
												<h4 class="text-left title-card">{{ menu.title }}</h4>
											</div>
											<div class="content-card mt-4">
												<div>
													<b-badge
														pill
														to="#"
														variant="success"
														class="bad p-2 m-2"
														>Success</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="info"
														class="p-2 m-2 bad"
														>Info</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="danger"
														class="p-2 m-2 bad"
														>Danger</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="primary"
														class="p-2 m-2 bad"
														>Primary</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="warning"
														class="p-2 m-2 bad"
														>Warning</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="secondary"
														class="p-2 m-2 bad"
														>Secondary</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="success"
														class="bad p-2 m-2"
														>Success</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="danger"
														class="bad p-2 m-2"
														>Danger</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="warning"
														class="bad p-2 m-2"
														>Warning</b-badge
													>
													<b-badge
														pill
														to="#"
														variant="info"
														class="bad p-2 m-2"
														>Info</b-badge
													>
												</div>
											</div>
											<b-button
												style="bottom: 10px; position: absolute; width: 90%"
												class="d-block ml-auto"
												href="#"
												variant="primary"
												>Detail</b-button
											>
										</b-card>
									</b-col>
								</b-row>
							</b-card-group>
						</b-container>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menus: [
				{
					id: 1,
					title: "KBBI",
				},
				{
					id: 2,
					title: "English - Ind",
				},
				{
					id: 3,
					title: "Indonesia - Eng",
				},
				{
					id: 4,
					title: "Iklan",
				},
				{
					id: 5,
					title: "Arti Nama",
				},
				{
					id: 6,
					title: "Istilah",
				},
			],
		};
	},

	created() {},
};
</script>

<style lang="scss" scoped>
.populer {
	background-color: #f6f7f9;
}

.head {
	color: #0b85ec;
	font-weight: 600;
}

.title h4 {
	font-weight: 900;
	text-transform: capitalize;
}

.bad {
	font-size: 14px;
}
</style>