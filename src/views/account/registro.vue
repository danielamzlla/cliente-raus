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
						<input id="nom_reg" type="text" class="form-valid" placeholder="Nombre" v-model="nombre" />
					</div>

					<div class="form-app text-center">
						<input id="ape_reg" type="text" class="form-valid" placeholder="Apellido" v-model="apellido" />
					</div>

					<div class="form-app text-center">
						<input id="dni_Reg" type="text" class="form-valid" placeholder="Dni / Nie" v-model="dni" />
					</div>

					<div class="form-app text-center">
						<input id="fec_reg" type="date" class="form-valid" placeholder="Fecha de nacimiento dia/mes/año" v-model="fech_reg" />
					</div>
				</div>

				<div class="boxForm__footer relative">
					<router-link to="/registrotwo" class="btn btn-yellow">Siguiente</router-link>
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