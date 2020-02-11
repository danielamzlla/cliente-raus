<template>
  <div class="verAdministrador">
    <div class="boxTitle">
      <h2 class="__title">Ver administrador</h2>
    </div>

    <div class="boxRow row">
      <div class="col s12 m12 l12">
        <ul class="collection">
          <li class="collection-item avatar">
            <i class="fa fa-user-tie circle flexbox xCenter yCenter"></i>
            <span class="title">Nombre de usuario</span>
            <p>{{ nombre }}</p>
          </li>
          <li class="collection-item avatar">
            <i class="fa fa-at circle flexbox xCenter yCenter"></i>
            <span class="title">Correo</span>
            <p>{{ correo }}</p>
          </li>
        </ul>
      </div>
      <div class="boxForm">
        <div class="boxForm__footer flexbox xCenter yCenter">
          <router-link class="btn-app __alert" to="/administrador">Volver</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default({
    data() {
      return {
        nombre: "",
        correo: ""
      };
    },
    mounted() {
      let ide = this.$route.params.id;
      let ruta="admin/"+ide;
      axios.get(config.ruta(ruta))
      .then(api =>{
        //console.log(api.data);
        if(api.data){
          this.nombre=api.data.user;
          this.correo=api.data.correo;
        }else
          this.$router.push("/administrador");
      })
      .catch(err => M.toast({ html: err.response.data.msg }));
      setTimeout(() => {
        var opNav = document.querySelectorAll('.boxNavLateral__link');
        for (var i = 0; i < opNav.length; i++) {
          if (opNav[i].classList.contains('__active')) {
            opNav[i].classList.remove('__active');
          }
        }
        document.querySelector('#op_admins').classList.add('__active');
      }, 500);
    }
  });
</script>