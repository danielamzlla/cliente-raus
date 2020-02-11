<template>
  <div class="form-app">
    <label>{{_label}}</label>
    <div
      @click="clickLoader();"
      class="boxUploadArchive"
      ref="loader"
      :class="{__hasArchive : archivoCargado}"
    >
      <p type-archive class="boxUploadArchive__title">{{mostrarTag()}}</p>
    </div>
    <input
      id="uploadTitle"
      type="file"
      class="form-valid no-display"
      placeholder="..."
      ref="archivo"
      @change="cargarArchivo()"
    >
  </div>
</template>

<script>
export default {
  name: "file-upload",
  props: ["label", "tag"],
  data() {
    return {
      archivoCargado: false
    };
  },
  computed: {
    _label() {
      return this.label ? this.label : "Archivo";
    }
  },
  methods: {
    mostrarTag() {
      return this.tag ? this.tag : "Por favor, inserte el archivo";
    },
    clickLoader() {
      this.$refs.archivo.click();
    },
    cargarArchivo() {
      this.archivoCargado = true;

      var __ElementTitle = this.$refs.loader.children[0];
      this.$emit("upload", this.$refs.archivo.files[0]);
      __ElementTitle.setAttribute("type-archive", this.$refs.archivo.value);
      __ElementTitle.innerText = this.$refs.archivo.value;
    }
  }
};
</script>

<style>
</style>
