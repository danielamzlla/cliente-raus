<template>
  <div class="perfil perfilDetail flexbox column xLeft yCenter">
    <header-mobile></header-mobile>

    <div class="perfil__content">
      <!-- Esto es estandar para todo tipo de user -->
      <div class="title">
        <p>--- Datos Personales ---</p>
      </div>
      <div class="boxDataPerson">
        <div class="boxDataPerson__img flexbox xCenter yCenter">
          <img src="@/assets/image/user-error.jpg" onerror="this.src = '@/assets/image/user-error.jpg';" alt="Username">

          <!--
            SI ES MI DETALLE EN SESION
            Debo ver esta opcion para editarla
          -->
          <router-link to="/perfil-edit">
            <span class="editProcfile fa fa-cogs"></span>
          </router-link>
          <!-- /// -->
        </div>
        <div class="boxDataPerson__data">
          <p class="firtname"><span class="title">Nombre:</span> Jose Luis</p>
          <p class="lastname"><span class="title">Apellido:</span> Peralez Castillo</p>
          <p class="email"><span class="title">Correo:</span> josepcastillo@gmail.com</p>
          <p class="sexo"><span class="title">Sexo:</span> Hombre</p>
          <p class="tel"><span class="title">Teléfono:</span> +58 (412) 056-6793</p>
          <p class="pais"><span class="title">País:</span> Venezuela</p>
          <p class="ciudad"><span class="title">Ciudad:</span> Guanare</p>
          <p class="bio"><span class="title">Biografía:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate voluptates ipsam nisi, commodi voluptate atque ullam incidunt ex alias recusandae, itaque eius assumenda dolorum quas sapiente? Natus voluptatem repellendus perferendis ipsa voluptas commodi, corrupti illum, autem voluptatibus, vero pariatur!</p>
        </div>
      </div>
      <!-- /// -->

      <!-- Esto es solo para doctores -->
      <div style="margin-top: 1rem;" class="title">
        <p>--- Datos Academicos ---</p>
      </div>
      <div class="boxDataPerson">
        <div class="boxDataPerson__data">
          <p class="ucv"><span class="title">UCV (Casa de grado):</span> UPTP JJ "Montilla"</p>
          <p class="cmv-cm"><span class="title">CMV-CM (Colegio):</span> Jose Vicente de Unda</p>
          <p class="mpps"><span class="title">MPPS:</span> ...</p>
          <p class="fechaGrado"><span class="title">Fecha de grado:</span> 27 / 09 / 2000</p>
          <p class="especialidad"><span class="title">Especialidad:</span> Cardiologo</p>
          <p class="subEspecialidad"><span class="title">Sub Especialidad:</span> ...</p>
          <p class="idiomas"><span class="title">Idiomas:</span> ...</p>
        </div>
      </div>
      
      <div style="margin-top: 1rem;" class="title">
        <p>--- Tablero de Precios ---</p>
      </div>
      <div class="boxDataPerson">
        <div class="boxDataPerson__data">
          <p class="videoLlamada flexbox xSpace-Between yCenter">
            <span class="title">Video llamdas:</span>
            <i>$<b class="cant">50</b></i>
          </p>
          <p class="videoLlamada flexbox xSpace-Between yCenter">
            <span class="title">Consulta presencial:</span>
            <i>$<b class="cant">150</b></i>
          </p>
          <p class="videoLlamada flexbox xSpace-Between yCenter">
            <span class="title">Clases en vivo:</span>
            <i>$<b class="cant">250</b></i>
          </p>
        </div>
      </div>
      <!-- /// -->
    </div>
  </div>
</template>

<script>
  import headerMobile from "@/components/header-mobile.vue";
  
  export default({
    components: {
      headerMobile
    }
  });
</script>