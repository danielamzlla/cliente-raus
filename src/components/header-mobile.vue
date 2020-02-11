<template>
  <div class="boxNav flexbox xCenter yCenter">
    <ul class="boxNav__nav reset flexbox xSpace-Between yCenter">
      <li class="boxNav__list __hidden">
        <span id="tiggerNavigation" class="icon-nav fa fa-bars"></span>
      </li>
      <li class="boxNav__list">
        <router-link to="/notification" onclick="funciones.__closeNav(this)">
          <!-- SI HAY NOTIFICAIONES ACTIVAR ESTA CLASE __hasNoti -->
          <span class="fa fa-bell" v-if="this.existenoti == 0"></span>
          <span class="fa fa-bell __hasNoti" v-else></span>
        </router-link>
      </li>
    </ul>
    <box-nav-lateral typeNav="__navMobile">
      <template slot="navigation">
        <nav-mobile></nav-mobile>
      </template>
    </box-nav-lateral>
  </div>
</template>

<script>
  import boxNavLateral from "@/components/box-nav-lateral.vue";
  import navMobile from "@/components/nav-mobile.vue";

  export default {
    name: "header-mobile",
    components: { boxNavLateral, navMobile },
    data () {
      return {
        existenoti: ""
      }
    },mounted() {
      var idu=this.$store.getters.user.id;
      axios.get(config.ruta("notificaciones/sinver/"+idu)).then(resp => {
        //console.log(resp.data.conteo);
        this.existenoti = resp.data.conteo;
      }).catch(err => console.log(err.response));
    }
  };
</script>