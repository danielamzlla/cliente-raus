<template>
  <div v-show="this.validview" class="boxNoti">
    <div class="boxTitle">
      <h2 class="__title">Notificaciones</h2>
    </div>

    <div class="boxListNotification">
      <!--
        NOTA IMPORTANTE
          - Estas dos clases cumple funciones importantes

          __isConfirm = si es para darle si o no.
          __hasNoti = es para saber si la notificacion no la ha visto y si la vio al darle click encima de la caja completa, esa clase debera quitarse.

          Sigue las estructuraas que te deje.
      -->
      <p v-if="listnoti < 1" class="alertNoRegister">En estos momentos no hay notificaiones...</p>

      <!-- Notificacion de confirmacion recibida --> 
      <card-notification v-for="(not, i) in listnoti" :title="not.tit_noti" :message="not.des_noti" :fecha="not.fec_reg_noti" :key="i" :typeConfirm=" tiponotificacion(not.est_noti)" :noti="not.id">

        <template slot="__button" v-if="not.tipo_noti == 2">
          <button type="button" class="btn-app __alert" v-on:click="responder_noti(not.id,2,not.id_usuario_emisor)">no</button>
          <button type="button" class="btn-app __aceptar" v-on:click="responder_noti(not.id,1,not.id_usuario_emisor)">si</button>
        </template>

        <template slot="__button" v-else-if="not.tipo_noti == 3">
          <button type="button" class="btn-app __alert" disabled>no</button>
          <button type="button" class="btn-app __aceptar" disabled>si</button>
        </template>
      </card-notification>
      
      <!-- Notificacion de confirmacion aceptada  
      <card-notification title="Solicitud de doctor referido" message="El usuario firstName lastName de correo mail@gmail.com, dice que usted lo refirio para registrarse como un doctor." fecha="30 / 06 / 2018" typeConfirm="__isConfirm">
        <template slot="__button">
          <button disabled type="button" class="btn-app __alert">no</button>
          <button disabled type="button" class="btn-app __aceptar">si</button>
        </template>
      </card-notification>

      < Notificacion normal recibida 
      <card-notification title="Eliel Loreto" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum ut quos, dolorum quas beatae cum dignissimos. Eius nesciunt, assumenda hic labore quidem aut beatae. Sit repellendus voluptas et amet." fecha="30 / 06 / 2018" typeConfirm="__hasNoti"></card-notification>

      < Notificaion normal vista 
      <card-notification title="Eliel Loreto" message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum ut quos, dolorum quas beatae cum dignissimos. Eius nesciunt, assumenda hic labore quidem aut beatae. Sit repellendus voluptas et amet." fecha="30 / 06 / 2018" typeConfirm=""></card-notification>-->
    </div>
  </div>
</template>

<script>
  import headerMobile from "@/components/header-mobile.vue";
  import cardNotification from "@/components/box-notification.vue";

  export default {
     data () {
      return {
        listnoti: [],
        validview: false
      }
    },
    components: {
      headerMobile,
      cardNotification
    },
    methods: {
      notificaciones() {
        var idu = this.$store.getters.user.id;
        axios.get(config.ruta("notificaciones/" + idu)).then(resp => {
          // console.log(resp.data);
          this.listnoti = resp.data;
        }).catch(err => console.log(err.response));
      },
      tiponotificacion (value) {
        if (value == 0) { value = "__hasNoti __isConfirm"; } else { value = "__isConfirm"; }
        return value
      },
      responder_noti(idn, op, idu) {
        var ide = this.$store.getters.user.id;
        let data = new FormData();
        data.append("idnoti", idn);
        data.append("opc", op);
        data.append("idu", idu);
        data.append("ide", ide);
        axios.post(config.ruta("notificaciones/respuesta"), data)
          .then(api => {
            // console.log(api.data);
            this.notificaciones();
            if (api.data.msj) {
              M.toast({ html: api.data.msj });
            }
          }).catch(err => { console.log(err.response) });
      },
      ver_noti(idnoti) {
        alert(idnoti);
      }
    },
    mounted() {
      if(this.$store.getters.user.tipo=='Doctor')
        this.validview=true;
      this.notificaciones();
    }
  };
</script>