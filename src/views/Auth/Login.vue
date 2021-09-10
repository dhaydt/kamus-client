<template>
	<div class="loginPages d-flex justify-content-center">
		<b-container>
			<div class="wrapper bg-white">
				<b-card class="card-body">
					<h2 class="text-center">Kamus KBBI</h2>
					<h4 class="text-center py-4">Enter your login details</h4>
					<b-alert
						v-model="showDismissibleAlert"
						class="mt-2"
						variant="danger"
						dismissible
					>
						{{ error }}
					</b-alert>
					<b-form @submit="onSubmit">
						<b-form-group
							id="input-group-1"
							label="Email address:"
							class="text-left"
							label-for="input-1"
							description="Kami tidak akan menyebarkan email anda."
						>
							<b-form-input
								id="input-1"
								v-model="form.email"
								type="email"
								placeholder="admin@admin.com"
								required
							></b-form-input>
						</b-form-group>

						<b-form-group class="text-left">
							<label for="text-password">Password</label>
							<b-form-input
								type="password"
								id="password"
								placeholder="adminadmin"
								v-model="form.password"
								aria-describedby="password-help-block"
							></b-form-input>
							<b-form-text id="password-help-block">
								Password harus terdiri dari 6 karakter
							</b-form-text>
						</b-form-group>
						<b-button-group class="d-flex justify-content-around">
							<b-button class="mr-2 p-0" type="submit" variant="primary">
								<div v-if="loading">
									<b-spinner small variant="primary"></b-spinner>
								</div>
								<span v-if="!loading">Masuk</span></b-button
							>
							<b-button class="" to="/" variant="success">Kembali</b-button>
						</b-button-group>
					</b-form>
				</b-card>
			</div>
		</b-container>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			urlLogin: "",
			error: "",
			loading: false,
			showDismissibleAlert: false,
			form: {
				email: "",
				password: "",
			},
		};
	},

	created() {
		const mainUrl = localStorage.mainUrl;
		this.urlLogin = mainUrl + "/login";
	},

	methods: {
		async onSubmit(e) {
			e.preventDefault();
			this.loading = true;

			await axios
				.post(this.urlLogin, {
					email: this.form.email,
					password: this.form.password,
				})
				.then((response) => {
					localStorage.setItem("user", JSON.stringify(response.data.user));
					localStorage.setItem("jwt", response.data.token);

					if (localStorage.getItem("jwt") !== null) {
						if (this.$route.params.nextUrl != null) {
							this.$router.push(this.$route.params.nextUrl);
						} else {
							this.$router.push("/admin");
						}
					}
				})
				.catch((err) => {
					this.loading = false;
					this.form.email = "";
					this.form.password = "";
					this.showDismissibleAlert = true;
					this.error = "Email / Password salah!";
					console.log("salah", err);
				});
		},
	},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Open+Sans&display=swap");

.loginPages {
	background-color: #eee;
	height: 100%;
	font-family: "Open Sans", sans-serif;
}
.wrapper {
	max-width: 500px;
	border-radius: 5px;
	margin: 50px auto;
	padding: 30px 40px;
}

.card {
	background-color: #fff;
}
h2 {
	font-family: "Kaushan Script", cursive;
	font-size: 3.5rem;
	font-weight: bold;
	color: #4154f1;
	font-style: italic;
}

h4 {
	font-family: "Open Sans", sans-serif;
}
a {
	text-decoration: none;
	color: #242d37;
	font-weight: 700;
}
a:hover {
	text-decoration: none;
	color: #4154f1;
}
.btn.btn-block {
	border-radius: 5px;
	background-color: #4154f1;
	color: #fff;
}
.btn.btn-block:hover {
	background-color: #717ff5;
}
@media (max-width: 575px) {
	.wrapper {
		margin: 50px auto;
		padding: 20px 30px;
	}
}
@media (max-width: 424px) {
	.wrapper {
		margin: 40px auto;
		padding: 20px 30px;
	}
	#forgot {
		font-size: 0.95rem;
	}
}
</style>