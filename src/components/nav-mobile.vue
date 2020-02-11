<template>
  <ul class="boxNavLateral__nav">
    <li class="boxNavLateral__list">
      <router-link id="op_inicio" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/home">
        <span class="fa fa-home"></span> Inicio
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_inicio" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/tesis">
        <span class="fa fa-file-invoice"></span> Tesis
      </router-link>
    </li>
    <li class="boxNavLateral__list">
      <router-link id="op_inicio" class="boxNavLateral__link" onclick="funciones.__closeNav(this)" to="/novedades">
        <span class="fa fa-newspaper"></span> Novedades
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default({
    name: 'nav-mobile'
  });
</script>