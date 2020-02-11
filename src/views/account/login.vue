<template>
  <div class="login __loginPanel flexbox column xCenter yCenter">
    <form class="boxForm __login __loginPanel" enctype="multipart/form-data">
        <div class="boxForm__header relative">
          <img class="_mb-1rem" src="@/assets/image/logo-bg-dark.png" alt="logo-de-la-app"/>
        </div>
        <div class="boxForm__body">
        <div class="form-app">
          <label for="_correo">Correo</label>
          <input
            id="_correo"
            type="email"
            class="form-valid"
            placeholder="..."
            v-model="correo"
          />
        </div>
        <div class="form-app">
          <label for="_pass">Contraseña</label>
          <input id="_pass" type="password" class="form-valid typePass" placeholder="..." v-model="pass"/>
          <span onclick="funciones.__showPass(this);" class="iconShowPass fa fa-eye"></span>
        </div>
      </div>
      <div class="boxForm__footer relative">
        <button type="submit" class="btn-app">Ingresar</button>
      </div>
    </form>
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