//Importando globales
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import axios from "axios";
import config from "@/config.js";
import "@/plugins/vuetify";
import funciones from "./funciones";
import io from 'socket.io-client';
const socket = io(config.dominio);

//variable del token
const token = localStorage.getItem("token");

//Requiriendo estilos
require("@/assets/lib/font-awesome/css/all.min.css");
require("sweetalert/dist/sweetalert.min.js");
require("materialize-css/dist/css/materialize.min.css");
require("materialize-css/dist/js/materialize.min.js");
require("@/assets/css/styles.css");


//Globales
window.axios = axios;
window.config = config;
window.funciones = funciones;
window.socket = socket;

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
    store,
  	router,
    render: h => h(App)
}).$mount("#app");
