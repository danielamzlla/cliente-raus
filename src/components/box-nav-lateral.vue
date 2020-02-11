<template>
  <div id="boxNavigation" class="boxNavLateral" v-bind:class="typeNav">
    <div class="boxNavLateral__header">
      <div class="boxImage">
        <router-link v-show="this.validmenu" to="/notificaciones" class="__noMobile">
          <span class="iconNotification fa fa-bell" v-if="this.existenoti == 0"></span>
          <span class="iconNotification fa fa-bell __hasNoti" v-else></span>
        </router-link>
        <span id="__toolsIcon" class="toolsIcon fa fa-angle-down"></span>
        <div id="__boxTools" class="boxTools">
          <router-link :to="irperfil()" class="boxTools__item" onclick="funciones.__closeNav(this)">
            <p class="no-margin">Mi Perfil</p>
          </router-link>
        </div>
        <img :src="this.$store.getters.user.img_usu || imagenError" alt="Imagen del user">
        <p
          class="username"
        >{{this.$store.getters.user.nom_usu}} {{this.$store.getters.user.ape_usu}}</p>
      </div>
    </div>

    <slot name="navigation"></slot>

    <div class="boxNavLateral__footer">
      <span class="linkLogout" @click="showLogout = true">Salir</span>
    </div>
    <alert-logout
      v-show="showLogout"
      titleModal="Cerrar Sesión"
      message="¿Deseas cerrar la sesión?"
      classTypeModal="__show"
      @cancel="showLogout = false"
    ></alert-logout>
  </div>
</template>

<script>
  import AlertLogout from "@/components/AlertLogout.vue";

  export default {
    name: "box-nav-lateral",
    props: ["typeNav"],
    data() {
      return {
        showLogout: false,
        nombre: "",
        apellido: "",
        imagenError: require("@/assets/image/user-error.jpg"),
        validmenu: false,
        existenoti: ""
      };
    },
    components: { AlertLogout },
    computed: {
      isLoggedIn: function() {
        return this.$store.getters.isLoggedIn;
      }
    },
    methods: {
      irperfil() {
        if(this.$store.getters.user.tipo=='Admin')
          return `/mi-perfil`;
        else
          return `/mi-perfil-doc`;
      }
    },
    mounted() {
      if(this.$store.getters.user.tipo=='Doctor')
        this.validmenu=true;
      var idu=this.$store.getters.user.id;
      axios.get(config.ruta("notificaciones/sinver/"+idu)).then(resp => {
        //console.log(resp.data.conteo);
        this.existenoti = resp.data.conteo;
      }).catch(err => console.log(err.response));
      const __iconNavigration = document.querySelector("#tiggerNavigation");
      const __boxNav = document.querySelector("#boxNavigation");

      if (__iconNavigration && __boxNav) {
        __iconNavigration.addEventListener("click", () => {
          __boxNav.classList.toggle("__active");
        });
      }

      const __iconTools = document.querySelector("#__toolsIcon");
      const __boxTools = document.querySelector("#__boxTools");

      if (__iconTools && __boxTools) {
        __iconTools.addEventListener("click", () => {
          __boxTools.classList.toggle("__show");
        });
      }
    }
  };
</script>