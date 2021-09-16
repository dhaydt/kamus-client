<template>
	<div>
		<section class="pt-0">
			<div class="overlio-top">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-12">
						<div class="contact_side overlio-top">
							<div class="ct_cmp_social">
								<ul>
									<li>
										<a href="#"><i class="fa fa-facebook"></i></a>
									</li>
									<li>
										<a href="#"><i class="fa fa-google-plus"></i></a>
									</li>
									<li>
										<a href="#"><i class="fa fa-twitter"></i></a>
									</li>
									<li>
										<a href="#"><i class="fa fa-linkedin"></i></a>
									</li>
								</ul>
							</div>
							<div class="ct_cmp_caption">
								<h4 class="mb-0">Get in Touch.</h4>
								<p>Get in touch via mail, call and direct address.</p>
							</div>
							<div class="ct_cmp_address">
								<div class="ct_cmp_single">
									<div class="ct_cmp_single_icon">
										<i class="fa fa-map-marker"></i>
									</div>
									<div class="ct_cmp_brief">
										<h5>Reach Us:</h5>
										<span>Surabaya Indonesia</span>
									</div>
								</div>
								<div class="ct_cmp_single">
									<div class="ct_cmp_single_icon">
										<i class="fa fa-envelope"></i>
									</div>
									<div class="ct_cmp_brief">
										<h5>Drop a mail:</h5>
										<span>admin@kamuskbbi.id</span>
									</div>
								</div>
								<div class="ct_cmp_single">
									<div class="ct_cmp_single_icon">
										<i class="fa fa-phone"></i>
									</div>
									<div class="ct_cmp_brief">
										<h5>Call Us:</h5>
										<span>+62 81293094xxx</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-md-8 col-sm-12">
						<form action="#" class="contact_row">
							<div class="form_row_box">
								<div class="form_row_header">
									<div class="form_row_header_flex">
										<img
											src="@/assets/assets/img/email.svg"
											class="img-fluid"
											width="52"
											alt="email"
										/>
									</div>
									<div class="form_row_header_right">
										<p>
											Tulis pertanyaan anda pada form di bawah ini. Secepatnya
											kami akan membalas pertanyaan Anda.
										</p>
									</div>
								</div>
								<div class="form_row_box_body">
									<div class="form-row">
										<div class="col-lg-6 col-md-12">
											<div class="form-group">
												<label for="name">Your Name</label>
												<input
													type="text"
													class="form-control with-light"
													placeholder="Nama"
													id="name"
												/>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group">
												<label for="email">Your Email</label>
												<input
													type="email"
													class="form-control with-light"
													placeholder="Surel"
													id="email"
												/>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group">
												<label for="subject">Subject</label>
												<input
													type="text"
													class="form-control with-light"
													placeholder="Subyek / Judul"
													id="subject"
												/>
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group">
												<label for="no">No. WhatsApp</label>
												<input
													type="number"
													class="form-control with-light"
													placeholder="No WA"
													id="no"
												/>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">
											<div class="form-group">
												<label for="tanya">Pertanyaan Anda</label>
												<textarea
													name="tanya"
													id="tanya"
													class="form-control with-light"
													cols="30"
													rows="10"
												></textarea>
											</div>
										</div>
										<div class="col-lg-12 col-md-12">
											<div class="form-group">
												<button type="button" class="btn dark-3">
													Kirim Pertanyaan
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlio-top {
	position: relative;
	margin-top: -80px;
}
</style>