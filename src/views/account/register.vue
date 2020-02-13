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
						<input id="nom_reg" type="text" class="form-valid" placeholder="Nombre" v-model="nombre" />
					</div>

					<div class="form-app text-center">
						<input id="ape_reg" type="text" class="form-valid" placeholder="Apellido" v-model="apellido" />
					</div>

					<div class="form-app text-center">
						<input id="dni_Reg" type="text" class="form-valid" placeholder="Dni / Nie" v-model="dni" />
					</div>

					<div class="form-app text-center">
						<input id="fec_reg" type="calendar" class="form-valid" placeholder="Fecha de nacimiento dia/mes/año" v-model="fech_reg" />
					</div>

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
				};
		},
		methods: {
		}
});
</script>