<template>
  <div class="cardNotification" v-on:click="ver_noti({ noti })" v-bind:class="typeConfirm">
    <div class="cardNotification__title">
      <p>{{ title }}</p>
    </div>
    <div class="cardNotification__message">
      <p>{{ message }}</p>
    </div>
    <div class="cardNotification__button flexbox xCenter yCenter">
      <slot name="__button"></slot>
    </div>
    <div class="cardNotification__time">
      <p><span class="fa fa-clock"></span> {{ fecha__(fecha) }}</p>
    </div>
  </div>
</template>

<script>
  export default({
    name: 'card-notification',
    props: ['title', 'message', 'fecha', 'typeConfirm', 'noti'],
    methods: {
      fecha__(f) {
        const moment = require("moment");
        moment.locale("es");
        return  moment(f).toNow();
      },
      ver_noti(idnoti) {
        //console.log(idnoti.noti);
        var idn=idnoti.noti;
        axios.get(config.ruta("notificaciones/vista/"+idn)).then(resp => {
          //this.notificaciones(); 
        }).catch(err => console.log(err.response));
      }
    }
  });
</script>