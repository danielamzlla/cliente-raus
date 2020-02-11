<template>
  <div class="_changePass flexbox column xLeft yCenter">
    <div class="boxTitle">
      <h2 class="__title">Cambiar contraseña</h2>
    </div>

    <form style="margin-top: 1.5rem;" class="boxForm __login" @submit.prevent="editar">
      <div style="width: 100%;" class="boxForm__body">
        <div class="form-app">
          <label for>Contraseña actual</label>
          <input type="password" class="form-valid typePass" placeholder="..." v-model="claact">
          <span onclick="funciones.__showPass(this);" class="iconShowPass fa fa-eye"></span>
        </div>
        <div class="form-app">
          <label for>Nueva contraseña</label>
          <input type="password" class="form-valid typePass" placeholder="..." v-model="cla">
          <span onclick="funciones.__showPass(this);" class="iconShowPass fa fa-eye"></span>
        </div>
        <div class="form-app">
          <label for>Confirmar contraseña</label>
          <input type="password" class="form-valid typePass" placeholder="..." v-model="cla2">
          <span onclick="funciones.__showPass(this);" class="iconShowPass fa fa-eye"></span>
        </div>
      </div>
      <div class="boxForm__footer">
        <button type="submit" id="add_btn" class="btn-app">Actualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default({
    data() {
      return {
        claact: "",
        cla: "",
        cla2: ""
      };
    },
    methods:{
      editar() {
        if(this.claact.trim()=="")
          M.toast({ html: "Por favor, ingresa la Contraseña actual." });
        else if(this.cla.trim()=="")
          M.toast({ html: "Por favor, ingresa la nueva Contraseña." });
        else if(this.cla2.trim()=="")
          M.toast({ html: "Por favor, ingresa la Contraseña de confirmación." });
        else if(this.cla.trim()!=this.cla2.trim())
          M.toast({ html: "La Contraseña de confirmación no coincide." });
        else{
          funciones.__loadbtn(1,'');
          let data = new FormData();
          data.append("pass", this.claact);
          data.append("pass_new", this.cla);
          data.append("id", this.$store.getters.user.id);
          let ruta="";
          if(this.$store.getters.user.tipo=='Admin')
            ruta= "admin/clave";
          else
            ruta= "admin/clave-doctor";
          axios.post(config.ruta(ruta),data)
            .then(api =>{
              funciones.__loadbtn(2,'Actualizar');
              if(api.data.msj!=""){
                M.toast({ html: api.data.msj });
                this.claact="";
                this.cla="";
                this.cla2="";
              }
              
            })
            .catch(err => {
              funciones.__loadbtn(2,'Actualizar');
              M.toast({ html: err.response.data.msg });
            });
        }
      }
    }
  });
</script>