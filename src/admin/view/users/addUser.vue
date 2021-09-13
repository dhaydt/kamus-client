<template>
	<div class="addUser">
		<b-alert
			v-model="showDismissibleAlert"
			v-if="error"
			class="mt-2"
			variant="danger"
			dismissible
		>
			{{ error }}
		</b-alert>
		<b-alert
			v-if="success"
			v-model="showDismissibleAlert"
			class="mt-2"
			variant="success"
			dismissible
		>
			{{ success }}
		</b-alert>
		<b-row class="d-flex justify-content-center mt-4">
			<b-col lg="12" md="12" sm="12">
				<div class="container">
					<form>
						<div class="container p-4">
							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="nama">Nama :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="text"
										v-model="form.username"
										class="form-control"
										id="username"
										placeholder="Masukan Nama User"
									/>
								</div>
							</div>
							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="email">Email :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="email"
										v-model="form.email"
										class="form-control"
										id="email"
										placeholder="Masukan email"
									/>
								</div>
							</div>

							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="password">Password :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="password"
										v-model="form.password"
										class="form-control"
										id="password"
										placeholder="Masukan Password"
									/>
								</div>
							</div>
							<div class="row form-group justify-content-center">
								<div
									class="col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"
								>
									<label for="c_password">Konfirmasi Password :</label>
								</div>
								<div class="col-lg-8 col-md-8 col-sm-12">
									<input
										type="password"
										v-model="form.c_password"
										class="form-control"
										id="c_password"
										placeholder="Konfirmasi password"
									/>
								</div>
							</div>

							<div class="col-lg-12 w-100 text-center">
								<button class="btn btn-primary" @click="onSubmit">
									<div v-if="loading">
										<b-spinner small variant="primary"></b-spinner> Menyimpan...
									</div>
									<span v-if="!loading"><i class="fa fa-save"></i> Simpan</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
import axios from "axios";
export default {
	data() {
		return {
			urlRegister: "",
			showDismissibleAlert: true,
			error: "",
			success: "",
			loading: false,
			form: {
				username: "",
				email: "",
				password: "",
				c_password: "",
			},
			title: "Tambah Admin",
			items: [
				{
					text: "Admin",
				},
				{
					text: "Administrator",
				},
				{
					text: "Tambah Admin",
					active: true,
				},
			],
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.urlRegister = mainUrl + "/register";
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			this.error = "";
			this.success = "";
			this.loading = true;
			const pass = this.form.password;
			const c_pass = this.form.c_password;

			if (pass != c_pass) {
				console.log("password beda");
				this.loading = false;
				this.showDismissibleAlert = true;
				this.error = "Password tidak sama";
				this.form.password = "";
				this.form.c_password = "";
			} else if (pass.length < 6) {
				console.log("pass min 6");
				this.form.password = "";
				this.form.c_password = "";
				this.loading = false;
				this.showDismissibleAlert = true;
				this.error = "Password minimal 6 Karakter";
			} else {
				try {
					await axios.post(this.urlRegister, {
						username: this.form.username,
						email: this.form.email,
						password: this.form.password,
					});
					console.log("berhasil");
					this.loading = false;
					this.success = "Berhasil Mendaftarkan Admin!!!";
					this.$router.push("/admin/user");
				} catch (err) {
					console.log(err);
					this.loading = false;
					this.error = "Email sudah terdaftar!!!";
				}
			}

			// await axios.post(this.urlRegister, {
			//   username: this.form.username,
			//   email: this.form.email,
			//   password: this.form.password
			// })
		},
	},
	components: {
		BSpinner,
	},
};
</script>

<style lang="scss" scoped>
.w-15 {
	width: 150px;
}
.card-add {
	min-height: 70vh;
}

input {
	max-height: 45px;
}
</style>