<template>
  <div style="position: relative; padding: 0;" class="perfil" @submit.prevent="actualizarDatos()">
    <div class="boxTitle">
      <h2 class="__title">Mi perfil</h2>
    </div>

    <form style="padding: 0; height: 100%;" class="boxForm">
      <div style="width: 100%; height: 100%;" class="boxForm__body">
        <div class="perfil__content">
          <!-- Esto es estandar para todo tipo de user -->
           <span
              class="__edit iconToolss fa fa-globe right"
              @click="OpcionesLEN()"
            ></span>
          <div class="title">
            <p>--- Datos Personales ---</p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__img flexbox column xCenter yCenter">
              <img :src="mostrarImagen" error="this.src = '@/assets/image/user-error.jpg';" alt="Username">
              <div class="boxBtnPerfil flexbox xCenter yCenter">
                <button
                  onclick="document.querySelector('#__changeImage').click();"
                  type="button"
                  class="btn-app __changeImage"
                >
                  <span class="fa fa-image"></span>
                </button>
                <router-link to="/cambiar-clave" class="btn-app __changePass">
                  <span class="fa fa-lock"></span>
                </router-link>
                
              </div>
              <input id="__changeImage" type="file" class="no-display" @change="manejarImagen($event);">

              <!-- v-if="esDoctorActivo" -->
              <div
                v-if="esDoctorActivo"
                style="margin: 1rem 0 .5rem;"
                class="boxToggle form-app flexbox xLeft yCenter"
              >
                <input type="checkbox" class="form-valid no-display" v-model="enlinea">
                <span v-on:click="handleOnline()" class="boxToggle__toggle fa fa-toggle-off"></span>
                <p
                  v-on:click="handleOnline()"
                  style="margin-left: -.5rem !important; cursor: pointer;"
                  class="no-margin"
                >Estoy en linea</p>
              </div>

              <!-- v-if="esDoctorInactivo" -->
              
              <div
                v-if="esDoctorInactivo || !tieneMetodosDePago"
                style="margin: 1rem 0 .5rem;"
                class="boxToggle form-app flexbox xLeft yCenter disabled"
              >
                <input type="checkbox" class="form-valid no-display" disabled>
                <span class="boxToggle__toggle fa fa-toggle-off"></span>
                <p
                  style="margin-left: -.5rem !important; font-size: .7rem; cursor: pointer;"
                  class="no-margin"
                  v-text="textoOnlineDeshabilitado"
                ></p>
              </div>
            </div>

            <div class="boxDataPerson__data">
              <div class="row">
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Nombre</label>
                    <input type="text" class="form-valid" placeholder="..." v-model="usuario.nom_usu">
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Apellido</label>
                    <input type="text" class="form-valid" placeholder="..." v-model="usuario.ape_usu">
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Correo</label>
                    <input type="email" class="form-valid" placeholder="..." v-model="usuario.cor_usu">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l4">
                  <div class="form-app input-field">
                    <label for>Sexo</label>
                    <select class="form-valid" v-model="usuario.sex_usu">
                      <option value="" disabled>...</option>
                      <option value="m">Masculino</option>
                      <option value="f">Femenino</option>
                    </select>
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Teléfono</label>
                    <input type="text" id="tlf_usu" maxlength="20" class="form-valid" placeholder="..." v-model="usuario.tlf_usu">
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Ciudad</label>
                    <input type="text" class="form-valid" placeholder="..." v-model="usuario.ciu_usu">
                  </div>
                </div>
                <div style="margin-top: 1.5rem;" class="col s12 m12 l12">
                  <div class="form-app">
                    <label for>Biografía</label>
                    <textarea class="form-valid" placeholder="..." v-model="usuario.detalles.bio_doc"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /// -->

          <!-- Esto es solo para doctores -->
          <div style="margin-top: 1rem;" class="title">
            <p>--- Datos Academicos ---</p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__data">
              <div class="row">
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>UCV ( Casa de grado )</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="..."
                      v-model="usuario.detalles.casa_de_grado"
                    >
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>CMV-CM ( Colegio )</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="..."
                      v-model="usuario.detalles.colegio"
                    >
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>MPPS ( OPCIONAL )</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="..."
                      v-model="usuario.detalles.mpps"
                    >
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col s12 m12 l4">
                  <div class="form-app">
                    <label for>Fecha de grado</label>
                    <input
                      type="date"
                      class="form-valid"
                      placeholder="..."
                      v-model="usuario.detalles.fecha_grado"
                    >
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app input-field">
                    <label for>Tipo de doctor</label>
                    <select
                      class="form-valid"
                      v-model="usuario.detalles.tipo"
                      @change="cargarCategorias(usuario.detalles.tipo)"
                    >
                      <option value disabled>...</option>
                      <option value="1">Humano</option>
                      <option value="2">Veterinario</option>
                    </select>
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app input-field">
                    <label for>Especialidades</label>
                    <select
                      v-model="especialidades.selected"
                      class="form-valid"
                      @change="cargarSubespecialidades($event.target.value)"
                    >
                      <option value disabled>...</option>
                      <option
                        v-for="cat in especialidades.list"
                        :value="cat.id"
                        :key="cat.id"
                      >{{cat.nom_cat}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l4">
                  <div class="form-app input-field">
                    <label for>Subespecialidades</label>
                    <select v-model="sub" class="form-valid">
                      <option value="0" disabled>...</option>
                      <option
                        v-for="sub in subespecialidades.list"
                        :value="sub.id"
                        :key="sub.id"
                        v-text="sub.nom_sub"
                      ></option>
                    </select>
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div v-for="(chip, i) in subespecialidades.selected"  class="chip" :key="chip.id"
                  >
                    {{mostrarNombre(chip)}}
                    <i class="close material-icons" @click="quitarSub(chip.id)">close</i>
                  </div>
                </div>
                <div class="col s12 m12 l4">
                  <div class="form-app input-field">
                    <label for>Idiomas ( Ejemplo: Ingles, Frances, etc... )</label>
                    <select v-model="usuario.detalles.idiomas"  multiple class="form-valid">
                      <option value disabled>...</option>
                      <option
                        v-for="(idioma, i) in idiomas"
                        :value="idioma.value"
                        :key="i"
                      >{{idioma.title}}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top: 1rem;" class="title">
            <p>--- Agregar Documentos ---</p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__data">
              <div class="form-app">
                <label for>Título</label>
                <input
                  type="file"
                  class="form-valid"
                  placeholder="..."
                  @change="manejarArchivos($event, 'titulo');"
                >
              </div>
          </div>
          <div class="boxDataPerson">   
            <div style="margin-top: 1rem;" class="title">
              <p>--- Documentos de Especialidades ---</p>
            </div>
            <div class="form-app" v-for="(titulo, i) in titulos.selected" :key="i">
              <label for>{{titulo.nom_cat}}</label>
              <input
                  type="file"
                  class="form-valid"
                  placeholder="..."
                  @change="manejarTitulos($event, titulo);"
              >
              
            </div>
              
            </div>
          </div>

          <div style="margin-top: 1rem;" class="title">
            <p>
              --- Forma de Pago ---
            </p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__data">
              <div class="form-app">
                <label for>Correo Paypal</label>
                <input
                  type="email"
                  class="form-valid"
                  placeholder="..."
                  v-model="usuario.detalles.paypal"
                >
              </div>
            </div>
          </div>
          
          <div style="margin-top: 1rem;" class="title">
            <p>--- Tablero de Precios ---</p>
          </div>
          <div class="boxDataPerson">
            <div class="boxDataPerson__data">
              <div class="row">
                <div class="col s12 m6 l6">
                  <div class="form-app">
                    <label for>Precios de las video llamadas en Dólares</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="$1.75"
                      v-model="usuario.detalles.precio_llamada_usd"
                    >
                  </div>
                </div>
                <div class="col s12 m6 l6">
                  <div class="form-app">
                    <label for>Precios de las video llamadas en Bolívares</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="Bs.669,00"
                      v-model="usuario.detalles.precio_llamada_bs"
                    >
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col s12 m6 l6">
                  <div class="form-app">
                    <label for>Precios de las consultas presenciales en Dólares</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="$1.75"
                      v-model="usuario.detalles.precio_presencial_usd"
                    >
                  </div>
                </div>
                <div class="col s12 m6 l6">
                  <div class="form-app">
                    <label for>Precios de las consultas presenciales en Dólares</label>
                    <input
                      type="text"
                      class="form-valid"
                      placeholder="Bs.669,00"
                      v-model="usuario.detalles.precio_presencial_bs"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /// -->
          <div style="margin-bottom: 1rem;" class="boxForm__footer">
            <button type="submit" id="add_btn" class="btn-app">Actualizar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style type="text/css">
.iconToolss{
  margin-right:1em !important;
}
.BTMenuNuevoo {
  background: transparent !important;
  padding-top: 0.2rem;
  /* width: 52px !important; */
  height: 38px !important;
}
</style>

<script>
import headerMobile from "@/components/header-mobile.vue";
import fileUpload from "@/components/file-upload.vue";
import moment from "moment";
import _ from "lodash";


export default {
  components: {
    headerMobile,
    fileUpload
  },
  watch: {
    sub: function(nuevoSub, viejoSub) {
      console.log("Encontrando sub...");
      let sub = _.find(this.subespecialidades.list, _sub => {
        return _sub.id === nuevoSub;
      });
      console.log("Verificando si ya existe...");
      if (
        _.find(this.subespecialidades.selected, o => {
          return o.id == sub.id;
        }) === undefined
      ) {
        console.log("No existe. Agregando...");
        this.subespecialidades.selected.push({
          id: sub.id,
          nom_sub: sub.nom_sub,
          id_categoria: sub.id_categoria
        });
      }
      console.log("Verificando si existe el titulo...");
      if (
        _.find(this.titulos.selected, o => {
          return o.id == sub.id_categoria;
        }) === undefined
      ) {
        console.log("No existe. Agregando...");
        this.titulos.selected.push(
          _.find(this.especialidades.list, o => {
            return o.id == sub.id_categoria;
          })
        );
      }
    }
  },

  data() {
    return {
      usuario: {},
      enlinea: "",

      imagenError: require("@/assets/image/user-error.jpg"),
      imagenES: require("@/assets/image/flag-icons/ES.png"),
      imagenEN: require("@/assets/image/flag-icons/EN.png"),
      sub: 0,

      especialidades: {
        list: {},
        selected: ""
      },
      subespecialidades: {
        list: {},
        selected: []
      },
      idiomas: {},

      archivos: {
        imagen: null,
        titulo: null
      },
      titulos: {
        selected: [],
        files: []
      }
    };
  },
  methods: {
    OpcionesLEN() {
      var usuario = this.$store.getters.user.id;
      var html = document.createElement('div');
      html.innerHTML = `
        <button type="button" class="btn btn-app BTMenuNuevoo" onclick=" swal.close(); funciones.CambiarLEN('ES',${usuario}) "><span class="__basico"><img src="${this.imagenES}"></span></button>
        <button type="button" class="btn btn-app BTMenuNuevoo" onclick=" swal.close(); funciones.CambiarLEN('EN',${usuario}) "><span class="__basico"><img src="${this.imagenEN}"></span></button>
      `;
      swal({
        content: html,
        buttons: false
      }).then(confirm => {
        if (confirm) {
        }
      });
    },
    actualizarDatos() {
      let usu = this.usuario;
      let titulos = {}
      if (!this.tieneMetodosDePago) this.usuario.detalles.online = 0;
      /*if (this.subespecialidades.selected.length === 0) { return M.toast({html: "Debe seleccionar por lo menos una subespecialidad."}) }
      if (this.titulos.files.length !== this.titulos.selected.length) { return M.toast({html: "Asegúrese de tener un título para cada especialidad."}) }*/
      if (
          (!parseFloat(this.usuario.detalles.precio_llamada_bs) && this.usuario.detalles.precio_llamada_bs!=0) ||
          (!parseFloat(this.usuario.detalles.precio_llamada_usd) && this.usuario.detalles.precio_llamada_usd!=0) ||
          (!parseFloat(this.usuario.detalles.precio_presencial_bs) && this.usuario.detalles.precio_presencial_bs!=0) ||
          (!parseFloat(this.usuario.detalles.precio_presencial_usd) && this.usuario.detalles.precio_presencial_usd!=0)
        )
          return M.toast({html: "Asegúrese de tener los precios de manera correcta."});
          
        if (
          parseFloat(this.usuario.detalles.precio_llamada_bs) < 0 ||
          parseFloat(this.usuario.detalles.precio_llamada_usd) < 0 ||
          parseFloat(this.usuario.detalles.precio_presencial_bs) < 0 ||
          parseFloat(this.usuario.detalles.precio_presencial_usd) < 0
        )
          return M.toast({html: "No puede colocar precios negativos."});
          
      usu.especialidades = this.subespecialidades.selected;
      titulos = this.titulos.files;
      funciones.__loadbtn(1,'');
      this.$store
        .dispatch("actualizarDatos", { usuario: usu, archivos: this.archivos, titulos: this.titulos.files })
        .then(resp => {
          funciones.__loadbtn(2,'Actualizar');
          M.toast({ html: "Se ha actualizado correctamente." });
          this.$router.push("/inicio");
        })
        .catch(err => {
          funciones.__loadbtn(2,'Actualizar');
          console.log(err);
          M.toast({ html: err.msg });
        });
    },
    mostrarNombre(sub) {
      let veri =this.especialidades.list.length;
      if(veri!=undefined){
        let cat = _.find(this.especialidades.list, o => {
          return o.id == sub.id_categoria
        }).nom_cat;
          return cat + " - " + sub.nom_sub
      }
    },
    cargarCategorias(tipo) {
      let ruta = tipo == 1 ? "human" : "vet";
      axios.get(config.ruta("categorias/" + ruta)).then(data => {
        this.especialidades.list= data.data;
        //this.$set(this.especialidades, "list", data);
        //this.usuario.especialidades = [];
        this.reinicializar();
      });
    },
    cargarSubespecialidades(id) {
      axios.get(config.ruta("categorias/" + id + "/subcategorias")).then(data => {
        this.subespecialidades.list= data.data;
        //this.$set(this.subespecialidades, "list", data);
        this.reinicializar();
      });
    },
    reinicializar() {
      setTimeout(() => {
        var elems = document.querySelectorAll("select");
        M.FormSelect.init(elems);
      }, 200);
    },
    handleOnline() {
      this.enlinea = !this.enlinea;

      let action = this.enlinea ? "setOnline" : "setOffline";
      this.$store.dispatch(action);
    },
    manejarArchivos(event, propiedad) {
      this.$set(this.archivos, propiedad, event.target.files[0]);
    },
    manejarImagen(event) {
      this.$set(this.archivos, "imagen", event.target.files[0]);
    },
    manejarTitulos(archivo, titulo) {
      if (
        !_.find(this.titulos.files, o => {
          console.log("Comparando...");
          if (o.id_categoria == titulo.id) {
            this.$set(o, "file", archivo);
            console.log("Condicion es verdadera. Actualizando...");
            return true;
          }
        })
      ) {
        console.log("Condicion es falsa. Agregando...");
        this.titulos.files.push({
          id_categoria: titulo.id,
          file: archivo
        });
      }
    },
    quitarSub(id) {
      let categoria = 0;
      _.remove(this.subespecialidades.selected, sub => {
        if (sub.id === id) {
            //console.log("Ids iguales: " + id + "-"+sub.id);
            categoria = sub.id_categoria;
            return true;
        }
      });

      this.subespecialidades.selected = [...this.subespecialidades.selected];
      if (
          !_.find(this.subespecialidades.selected, o => {
            return o.id_categoria === categoria;
          })
        ) {
          
          _.remove(this.titulos.selected, o => {
            return o.id === categoria;
          });
          _.remove(this.titulos.files, o => {
            return o.id_categoria === categoria;
          });
          this.titulos.selected = [...this.titulos.selected];
          this.titulos.files = [...this.titulos.files];
        }
    }
  },
  computed: {
    mostrarImagen() {
      if (_.isObject(this.archivos.imagen)) {
        return URL.createObjectURL(this.archivos.imagen);
      } else if (this.usuario.img_usu !== null) return this.usuario.img_usu;
      else return this.imagenError;
    },
    esDoctor() {
      return this.$store.getters.isDoctor;
    },
    esDoctorInactivo() {
      return this.usuario.est_usu == 0;
    },
    tieneMetodosDePago() {
      return this.usuario.detalles.paypal;
    },
    esDoctorActivo() {
      return (
        this.usuario.est_usu == 1 && this.tieneMetodosDePago
      );
    },
    textoOnlineDeshabilitado() {
      return this.esDoctorInactivo
        ? "No puede colocarse en línea sin estar verificado."
        : !this.tieneMetodosDePago
        ? "Debe tener algún método de pago para estar en línea."
        : "No podemos colocarlo en línea. Comuníquese con un administrador.";
    }
  },
  beforeMount() {
    let tipo = this.$store.getters.user.detalles.tipo;

    this.cargarCategorias(tipo);
    if(!Array.isArray(this.$store.getters.user.detalles.idiomas))
      this.$store.getters.user.detalles.idiomas=this.$store.getters.user.detalles.idiomas.split(",");
    
    if(this.$store.getters.user.detalles.paypal==null)
      this.$store.getters.user.detalles.paypal='';
    this["usuario"] = this.$store.getters.user;
    this["idiomas"] = config.idiomas;
    //console.log(this.$store.getters.user);
    //this.titulos.selected=this.usuario.categorias;
    //this.$set(this.idiomas, "list", config.idiomas);
    
      this.$set(
        this.subespecialidades,
        "selected",
        this.usuario.especialidades
      );
    
  },
  mounted() {
      let telEl = document.querySelector('#tlf_usu');
      telEl.addEventListener('keyup', (event) => {
        var out = '';
        var filtro = "1234567890 +";
        for (var i = 0; i < event.target.value.length; i++) if (filtro.indexOf(event.target.value.charAt(i)) != -1) out += event.target.value.charAt(i);
          event.target.value = out;
      });
      this.usuario.detalles.fecha_grado = moment(
        this.usuario.detalles.fecha_grado
      ).format("YYYY-MM-DD");
      this.enlinea = this.$store.getters.user.detalles.online === 1;
    
    this.reinicializar();
    
  }
};
</script>