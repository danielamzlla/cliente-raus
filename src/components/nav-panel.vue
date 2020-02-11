<template>
  <ul class="boxNavLateral__nav">
    <li class="boxNavLateral__list">
      <router-link id="op_inicio" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/inicio">
        <span class="fa fa-home"></span> Inicio
      </router-link>
    </li>
    <li class="boxNavLateral__list" v-show="this.validmenu">
      <router-link id="op_categoria" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/categorias">
        <span class="fa fa-align-left"></span> Especialidades - Sub Especialidades
      </router-link>
    </li>
    <li class="boxNavLateral__list" v-show="this.validmenu">
      <router-link id="op_admins" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/administrador">
        <span class="fa fa-toolbox"></span> Administradores
      </router-link>
    </li>
    <li class="boxNavLateral__list" v-show="this.validmenu">
      <router-link id="op_users" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/usuarios">
        <span class="fa fa-user"></span> Listado de usuarios
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_tesis" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/tesis">
        <span class="fa fa-file-invoice"></span> Tesis
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_clases" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/clases">
        <span class="fa fa-map-signs"></span> Listado de clases
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_contable" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/contabilidad">
        <span class="fa fa-money-bill"></span> Contabilidad
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_contable" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" :to="agendaDoctor()">
        <span class="fa fa-calendar"></span> Lives
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default({
    data () {
      return {
        validmenu: false
      }
    },
    methods: {
      agendaDoctor() {
        return '/agenda-doctor/' + this.$store.getters.user.id;
      }
    },
    mounted() {
      if(this.$store.getters.user.tipo=='Admin')
        this.validmenu=true;
    },
    name: 'nav-panel'
  });
</script>