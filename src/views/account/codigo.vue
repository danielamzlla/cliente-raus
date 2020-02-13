<template>
	<div class="content">
		<div class="boxBackg flexbox column xCenter yCenter">
			<form class="boxForm boxBackg flexbox column xCenter yCenter" enctype="multipart/form-data">
				<div class="boxForm__header relative">
					<img class="_mb-1rem" src="@/assets/image/RA.svg" alt="logo-de-la-app"/>
				</div>

				<div class="boxForm__body">
					<div class="form-app text-center">
						<label>Introduce el código pin que <br>te hemos enviado por sms</label>
						<input id="cod_pin" type="text" class="form-valid"  v-model="codigo" />
					</div>
				</div>

				<div class="boxForm__footer relative">
					<router-link to="/bienvenida" class="btn btn-yellow">Siguiente</router-link>
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