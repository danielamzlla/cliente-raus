<template>
	<div class="content">
		<div class="boxLogin boxBackg flexbox column xCenter yCenter">
			<form class="boxForm boxBackg flexbox column xCenter yCenter" enctype="multipart/form-data">
				<div class="boxForm__header relative">
					<img class="_mb-1rem" src="@/assets/image/RA.svg" alt="logo-de-la-app"/>
					<h5 class="clr_blue">Que alegría tenerte aquí! <br> En pocos pasos estarás disfrutando de Raus.</h5>
				</div>

				<div class="boxForm__body">
					<div class="form-app text-center">
						<input id="cor_reg" type="email" class="form-valid" placeholder="E-mail" v-model="correo" />
					</div>

					<div class="form-app text-center">
						<input id="tlf_reg" type="text" class="form-valid" placeholder="Teléfono" v-model="telefono" />
					</div>

					<div class="form-app text-center">
						<input id="con_reg" type="password" class="form-valid" placeholder="Contraseña" v-model="contrasena" />
					</div>

					<div class="form-app text-center">
						<input id="rep_reg" type="password" class="form-valid" placeholder="Repetir contraseña" v-model="contrasena" />
					</div>
				</div>

				<div class="boxForm__footer relative">
					<router-link to="/codigo" class="btn btn-yellow">Siguiente</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

export default ({
		data() {
				return {
				};
		},
		methods: {
		}
});
</script>