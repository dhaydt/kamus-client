<template>
	<div class="sideCol">
		<b-card-group deck class="mt-4">
			<b-card class="text-left">
				<div class="kbbiPop mb-4 pb-2">
					<h6 class="mb-0 text-left section-label mb-4 text-bold">
						Kamus KBBI Populer
					</h6>
					<b-list-group>
						<b-list-group-item>Cras justo odio</b-list-group-item>
						<b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
						<b-list-group-item>Morbi leo risus</b-list-group-item>
						<b-list-group-item>Porta ac consectetur ac</b-list-group-item>
						<b-list-group-item>Vestibulum at eros</b-list-group-item>
					</b-list-group>
				</div>

				<div class="istilah-pop mt-4">
					<h6 class="mb-0 text-left section-label mb-4">
						Kamus Istilah Populer
					</h6>
					<b-list-group>
						<b-list-group-item>Cras justo odio</b-list-group-item>
						<b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
						<b-list-group-item>Morbi leo risus</b-list-group-item>
						<b-list-group-item>Porta ac consectetur ac</b-list-group-item>
						<b-list-group-item>Vestibulum at eros</b-list-group-item>
					</b-list-group>
				</div>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			kata: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.kbbiPop {
	border-bottom: 2px solid grey;

	h6 {
		font-weight: 900;
	}
}

.istilah-pop {
	h6 {
		font-weight: 900;
	}
}
</style>