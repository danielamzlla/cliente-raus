<template>
  <div id="app" class="boxApp flexbox xCenter yCenter">
    <div v-if="this.$store.getters.isLoggedIn" class="boxNav __web flexbox xCenter yCenter">
      <ul class="boxNav__nav reset flexbox xSpace-Between yCenter">
        <li class="boxNav__list __hidden">
          <span id="tiggerNavigation" class="icon-nav fa fa-bars"></span>
        </li>
        <li class="boxNav__list">
          <router-link to="/notificaciones" onclick="funciones.__closeNav(this)">
            <span class="fa fa-bell __hasNoti"></span>
          </router-link>
        </li>
      </ul>
    </div>
    
    <box-nav-lateral v-if="this.$store.getters.isLoggedIn">
      <template slot="navigation">
        <nav-panel></nav-panel>
      </template>
    </box-nav-lateral>
    
    <div class="boxContentRow">
      <router-view/>
    </div>
  </div>
</template>

<script>

  import funciones from "@/funciones";
  funciones.Variablesglobales();
  import boxNavLateral from "@/components/box-nav-lateral.vue";
  import navPanel from "@/components/nav-panel.vue";

  export default {
    name: "app",
    components: { boxNavLateral, navPanel },
    created: function() {
      axios.interceptors.response.use(undefined, function(err) {
        return new Promise(function(resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout);
          }
          throw err;
        });
      });
    },
    mounted() {
      M.AutoInit();
    }
  };
</script>
