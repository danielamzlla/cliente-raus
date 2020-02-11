<template>
  <div style="position: relative; padding: 0;" class="perfil">
    <div class="boxTitle">
      <h2 class="__title">Mi perfil</h2>
    </div>

    <form style="padding: 0; height: 100%;" class="boxForm" @submit.prevent="editar">
      <div style="width: 100%; height: 100%;" class="boxForm__body">
        <div class="perfil__content">
          <!-- Esto es estandar para todo tipo de user -->
          <div class="title">
            <p>--- Datos Personales ---</p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__img flexbox column xCenter yCenter">
              <img src="@/assets/image/user-error.jpg" onerror="this.src = '@/assets/image/user-error.jpg';" alt="Username">
              <div class="boxBtnPerfil flexbox xCenter yCenter">
                
                <router-link to="/cambiar-clave" class="btn-app __changePass">
                  <span class="fa fa-lock"></span>
                </router-link>
              </div>
            </div>

            <div class="boxDataPerson__data">
              <div class="row">
                <div class="col s12 m12 l6">
                  <div class="form-app">
                    <label for>Nombre Usuario</label>
                    <input type="text" v-model="nombre" class="form-valid" placeholder="...">
                  </div>
                </div>
                <div class="col s12 m12 l6">
                  <div class="form-app">
                    <label for>Correo</label>
                    <input type="email" v-model="correo" class="form-valid" placeholder="...">
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- /// -->
          <div style="margin-bottom: 1rem;" class="boxForm__footer">
            <button type="submit" id="add_btn" class="btn-app">Actualizar</button>
          </div>
        </div>
      </div>
    </form>
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
    methods:{
      validarEmail(email){
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        var valor = regex.test(email.trim());
        if(valor==true){  
          return valor;
        } else{   
          return valor;
        }
      },
      editar() {
        if(this.nombre.trim()=='')
          M.toast({ html: "Por favor, ingrese el nombre de usuario." });
        else if(this.validarEmail(this.correo)!=true)
          M.toast({ html: "Por favor, ingresa un correo valido." });
        else{
          funciones.__loadbtn(1,'');
          let data = new FormData();
          data.append("user", this.nombre.trim());
          data.append("email", this.correo.trim());
          data.append("pass", "");
          data.append("id", this.$store.getters.user.id);
          axios.post(config.ruta("admin/edit"),data)
            .then(api =>{
              funciones.__loadbtn(2,'Actualizar');
              if(api.data.msj!=""){
                M.toast({ html: api.data.msj });
                this.$store.getters.user.user=this.nombre;
                this.$store.getters.user.nom_usu=this.nombre;
                this.$store.getters.user.correo=this.correo;
                this.$store
                .dispatch("Actualizarperfil", this.$store.getters.user);
              }
              
            })
            .catch(err => {
              funciones.__loadbtn(2,'Actualizar');
              M.toast({ html: err.response });
            });
        }
      }
    },
    mounted() {
      this.nombre=this.$store.getters.user.user;
      this.correo=this.$store.getters.user.correo;
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    }
  });
</script>