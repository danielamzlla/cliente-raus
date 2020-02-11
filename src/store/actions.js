import axios from "axios";
import config from "@/config";
import _ from "lodash";
import funciones from "@/funciones";
 
 
export default {
    login({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit("loading");
            let fd = new FormData();
            fd.append("correo", user.correo);
            fd.append("pass", user.pass);
            axios
                .post(config.ruta("login"), fd)
                .then(resp => {
                    const token = resp.data.token;
                    const usuario = resp.data.user;
                    if (usuario.len_usu && usuario.len_usu != funciones.getCO('LEN_USU')) {
                        funciones.setCO('LEN_USU', usuario.len_usu.substr(0, 2));
                    }
                    localStorage.setItem("token", token);
                    axios.defaults.headers.common["Authorization"] = token;

                    let enviarCommit = { token, usuario };
                    commit("auth_success", enviarCommit);

                    if (usuario.is_doc == 1) M.toast({ html: "Bienvenido de vuelta, Dr. " + usuario.nom_usu });
                    if (usuario.is_doc == 0) M.toast({ html: "Bienvenido de vuelta, " + usuario.nom_usu });

                    if (resp.data.isAdmin) commit("set_admin");
                    resolve(resp);
                })
                .catch(err => {
                    commit("auth_error");
                    localStorage.removeItem("token");
                    reject(err.response.data);
                });
        });
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            commit("logout");
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
            resolve();
        });
    }
};