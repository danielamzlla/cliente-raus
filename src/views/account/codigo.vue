<template>
	<div class="login __loginPanel">
		<div class=" flexbox column xCenter yCenter">
			<form class="boxForm __login __loginPanel flexbox column xCenter yCenter" enctype="multipart/form-data">
				<div class="boxForm__header relative">
					<img class="_mb-1rem" src="@/assets/image/RA.svg" alt="logo-de-la-app"/>
					<h5 class="clr_blue">Que alegría tenerte aquí! <br> En pocos pasos estarás disfrutando de Raus.</h5>
				</div>

				<div class="boxForm__body">
					<div class="form-app text-center">
						<label>Introduce el código pin que te hemos enviado por sms</label>
						<input id="cod_pin" type="text" class="form-valid" placeholder="código" v-model="codigo" />
					</div>
				</div>

				<div class="boxForm__footer relative">
					<button type="submit" class="btn btn-yellow">Siguiente</button>
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