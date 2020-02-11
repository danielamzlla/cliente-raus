<template>
  <div class="administrador">
    <div class="boxTitle">
      <h2 class="__title">Administradores</h2>
    </div>

    <div class="boxRow row">
      <div class="col s12 m12 l12">
        <div class="boxTools">
          <router-link to="/agregar-administrador">
            <button type="button" class="btn-app __addTable">Agregar Administrador <span class="fa fa-plus"></span></button>
          </router-link>
        </div>
      </div>
      <div class="col s12 m12 l12">
        <v-text-field
            v-model="search"
            append-icon="search"
            label="Busqueda"
            single-line
            hide-details
        ></v-text-field>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :rows-per-page-items='rowsPerPageItems'
          no-data-text="No se encontraron registros" 
          rows-per-page-text="Filas por página"
          :search="search"
          class="boxTableApp elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.autoicrement }}</td>
            <td>{{ props.item.user }}</td>
            <td>{{ props.item.correo }}</td>
            <td class="boxTableApp__option flexbox xLeft yCenter">
              <router-link :to="irUrl(props.item.id)"><button type="button" class="btn-app __lock"><span class="fa fa-eye"></span></button></router-link>
              <router-link :to="irUrledit(props.item.id)"><button type="button" class="btn-app __edit"><span class="fa fa-edit"></span></button></router-link>
              <router-link to=""><button type="button" class="btn-app __del" v-on:click="__alertConfirm(props.item.id)"><span class="fa fa-trash-alt"></span></button></router-link>
            </td>
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning" style="color:#000;">
            Su búsqueda de "{{ search }}" no fue exitosa.
          </v-alert>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: '#ID',
            align: 'center',
            value: 'autoicrement'
          },
          {
            text: 'Nombre de usuario',
            align: 'left',
            sortable: false,
            value: 'user'
          },
          {
            text: 'Correo',
            align: 'left',
            sortable: false,
            value: 'correo'
          },
          { 
            text: '---',
            value: 'option',
            sortable: false,
            class: 'boxTableApp__option'
          }
        ],
        rowsPerPageItems: [],
        desserts: []
      }
    },
    methods: {
      lista() {
        axios.get(config.ruta("admin")).then(resp => {
          for (var i = 0; i < resp.data.length; i++) {
            resp.data[i].autoicrement=i+1;
          }
          if(resp.data.length<=5)
            this.rowsPerPageItems=[5];
          else if(resp.data.length<=10)
            this.rowsPerPageItems=[5, 10];
          else if(resp.data.length<=15)
            this.rowsPerPageItems=[5, 10, 15];
          else
            this.rowsPerPageItems=[5, 10, 15, 20];
          this.desserts = resp.data;
        }).catch(err => console.log(err.response));
      },
      irUrl(id) {
        return `/ver-administrador/${id}`;
      },
      irUrledit(id) {
        return `/editar-administrador/${id}`;
      },
      
      __alertConfirm(ideli) {
        swal({
          title: "¿Esta seguro?",
          text: "¿Esta seguro que desea eliminar este registro?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            let ruta='';
            ruta="admin/delete/"+ideli;
            axios.get(config.ruta(ruta))
              .then(api =>{
                if(api.data!="0"){
                  this.lista();
                  swal(api.data, {
                    icon: "success",
                  });
                }else{
                  swal("No se puede Eliminar, este registro se esta usando!", {
                    icon: "error",
                  });
                }
              })
              .catch(err => M.toast({ html: "Error!" }));
            
          }
        });
      }
    },
    mounted() {
      this.lista();
      setTimeout(() => {
        var opNav = document.querySelectorAll('.boxNavLateral__link');
        for (var i = 0; i < opNav.length; i++) {
          if (opNav[i].classList.contains('__active')) {
            opNav[i].classList.remove('__active');
          }
        }
        document.querySelector('#op_admins').classList.add('__active');
      }, 500);
    }
  }
</script>