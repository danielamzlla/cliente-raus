<template>
  <div class="editarAdministrador">
    <div class="boxTitle">
      <h2 class="__title">Editar Administrador</h2>
    </div>

    <div class="boxRow row">
      <div class="col s12 m12 l12">
        <form action="." method="post" class="boxForm __panel" @submit.prevent="editar">
          <div class="boxForm__body">
            <div class="form-app">
              <label for="_user" class="text-left">Nombre de usuario</label>
              <input id="_user" v-model="usu" type="text" class="form-valid"  placeholder="...">
            </div>
            <div class="form-app">
              <label for="_correo" class="text-left">Correo</label>
              <input id="_correo" v-model="cor" type="email" class="form-valid" placeholder="...">
            </div>
            <div class="form-app">
              <label for="_pass1" class="text-left">Contraseña</label>
              <input id="_pass1" v-model="cla" type="password" class="form-valid"  placeholder="...">
            </div>
            <div class="form-app">
              <label for="_pass2" class="text-left">Confirmar Contraseña</label>
              <input id="_pass2" v-model="cla2" type="password" class="form-valid"  placeholder="...">
            </div>
          </div>
          <div class="boxForm__footer flexbox xCenter yCenter">
            <router-link class="btn-app __alert" to="/administrador">Volver</router-link>
            <button type="submit" id="add_btn" class="btn-app __save">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default({
    data() {
      return {
        usu: "",
        cor: "",
        cla: "",
        cla2: "",
        id: ""
      };
    },
    methods: {
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
        if(this.usu.trim()=='')
          M.toast({ html: "Por favor, ingrese el nombre de usuario." });
        else if(this.validarEmail(this.cor)!=true)
          M.toast({ html: "Por favor, ingresa un correo valido." });
        else if(this.cla.trim()=="" && this.cla2.trim()!="")
          M.toast({ html: "Por favor, ingresa la Contraseña." });
        else if(this.cla2.trim()=="" && this.cla.trim()!="")
          M.toast({ html: "Por favor, ingresa la Contraseña de confirmación." });
        else if(this.cla.trim()!=this.cla2.trim())
          M.toast({ html: "La Contraseña de confirmación no coincide." });
        else{
          funciones.__loadbtn(1,'');
          let data = new FormData();
          data.append("user", this.usu.trim());
          data.append("email", this.cor.trim());
          data.append("pass", this.cla.trim());
          data.append("id", this.id);
          axios.post(config.ruta("admin/edit"),data)
            .then(api =>{
              funciones.__loadbtn(2,'Guardar');
              //console.log(api);
              if(api.data.msj!=""){
                M.toast({ html: api.data.msj });
                this.cla='';
                this.cla2='';
              }
              
            })
            .catch(err => {
              funciones.__loadbtn(2,'Guardar');
              M.toast({ html: err.response });
              
            });
        }
      }
    },
    mounted() {
      let ide = this.$route.params.id;
      this.id=ide;
      let ruta="admin/"+ide;
      axios.get(config.ruta(ruta))
      .then(api =>{
        if(api.data){
          this.usu=api.data.user;
          this.cor=api.data.correo;
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