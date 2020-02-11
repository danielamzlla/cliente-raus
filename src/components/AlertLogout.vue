<template>
  <div id="boxModalLogout" class="boxModal __modalPanel" v-bind:class="classTypeModal">
    <div class="boxModal__content">
      <p class="title">{{ titleModal }}</p>
      <p class="message">{{ message }}</p>

      <div class="boxFooter flexbox xCenter yCenter" v-bind:class="noDisplay">
        <button v-on:click="cancel" type="button" class="btn-app __alert">No</button>
        <button type="button" class="btn-app" v-on:click="logout">Si</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "alert-logout",
    props: ["classTypeModal", "titleModal", "message", "noDisplay"],
    methods: {
      logout: function() {
        this.$emit("cancel");
        this.$store.dispatch("logout").then(() => {
          this.$router.push("/");
        });
      },
      cancel() {
        this.$emit("cancel");
      }
    }
  };
</script>