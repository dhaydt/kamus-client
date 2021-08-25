<template>
	<div class="sidePage">
		<div class="row">
			<div class="card w-100 m-2">
				<div class="card-body">
					<h4 class="card-title">Istilah populer</h4>
					<p class="card-title-desc">Istilah populer berdasarkan pencarian</p>

					<b-list-group>
						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Cras justo odio
							<b-badge variant="primary" pill>14</b-badge>
						</b-list-group-item>

						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Dapibus ac facilisis in
							<b-badge variant="primary" pill>2</b-badge>
						</b-list-group-item>

						<b-list-group-item
							class="d-flex justify-content-between align-items-center"
						>
							Morbi leo risus
							<b-badge variant="primary" pill>1</b-badge>
						</b-list-group-item>
					</b-list-group>
				</div>
			</div>

			<div class="adv w-100 mt-4 pt-4">
				<b-container>
					<b-card
						title="Kolom iklan"
						img-src="https://image.shutterstock.com/image-photo/online-advertising-600w-256946860.jpg"
						img-alt="Image"
						img-top
						tag="article"
						class="m-1 w-100"
					>
						<b-card-text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</b-card-text>

						<b-button href="#" variant="primary">Pesan Sekarang</b-button>
					</b-card>
				</b-container>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
</style>