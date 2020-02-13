import Vue from "vue";
import Router from "vue-router";
import loginPanel from "@/views/account/login.vue";
import NotFound from "@/views/404.vue";
import store from "@/store/store";

Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/",
            name: "login",
            component: loginPanel
        },
        {
            path: "/login",
            name: "loguear",
            component: loginPanel
        },
        { // Registro paso 1
            path: "/registro",
            name: "registro",
            component: () =>
                import ("./views/account/registro.vue")
        },
        { // Registro paso 2
            path: "/registrotwo",
            name: "registrotwo",
            component: () =>
                import ("./views/account/registrotwo.vue")
        },
        { // Codigo
            path: "/codigo",
            name: "codigo",
            component: () =>
                import ("./views/account/codigo.vue")
        },
        { // Bienvenida
            path: "/bienvenida",
            name: "bienvenida",
            component: () =>
                import ("./views/account/bienvenida.vue")
        },
        { // Cambiar clave
            path: "/cambiar-clave",
            name: "changePass",
            component: () =>
                import ("./views/account/changePass.vue"),
            meta: {
                requiresAuth: true
            }
        },
        { // Inicio
            path: "/inicio",
            name: "inicio",
            component: () =>
                import ("./views/inicio.vue"),
            meta: {
                requiresAuth: true
            }
        },
        { // Categoria ver
            path: "/ver-admin/:id",
            name: "verAdmin",
            component: () =>
                import ("./views/administradores/ver.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/*",
            name: "404",
            component: NotFound
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            socket.emit('conectar', store.getters.user);
            next();
            return;
        }
        next("/");
    } else {
        socket.emit('desconectar');
        next();
    }

});
export default router;