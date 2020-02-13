<template>
	<div class="content">
		<div class="boxLogin boxBackg flexbox column xCenter yCenter">
			<form class="boxForm boxBackg flexbox column xCenter yCenter" enctype="multipart/form-data">
				<div class="boxForm__header relative">
					<img class="_mb-1rem" src="@/assets/image/RA.svg" alt="logo-de-la-app"/>
					<h5 class="clr_blue">Hola! Bienvenida <br>y Bienvenido a <br> Raus, haz login <br> o regístrate para <br> unirte a la nueva <br> era de  la conexión <br> comercial</h5>
				</div>

				<div class="boxForm__body">
					<div class="form-app text-center">
						<input id="_correo" type="email" class="form-valid" placeholder="Email / teléfono" v-model="correo" />
					</div>

					<div class="form-app text-center">
						<input id="_pass" type="password" class="form-valid typePass" placeholder="Contraseña" v-model="pass"/>
						<span onclick="funciones.__showPass(this);" class="iconShowPass fa fa-eye"></span>
					</div>
				</div>

				<div class="row w100 m-0 mt-3">
					<div class="col s6">
						<p>
							<label class="clr_blue">
								<input type="checkbox" />
								<span class="clr_blue">Recuerdame</span>
							</label>
						</p>
					</div>

					<div class="col s6">
						<a href="" class="right clr_blue">Nueva contraseña</a>
					</div>
				</div>

				<div class="boxForm__footer relative">
					<router-link to="/login" class="btn btn-blue">ir a Raus</router-link>
					<br><br>
					<router-link to="/registro" class="btn btn-yellow">Registrarse</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

export default ({
		data() {
			return {
				correo: "",
				pass: ""
			};
		},

		methods: {
			login: function() {
				let correo = this.correo;
				let pass = this.pass;
				this.$store
				.dispatch("login", { correo, pass })
				.then(() => this.$router.push("/inicio"))
				.catch(err => M.toast({ html: err.msg}));
			}
		}
});
</script>