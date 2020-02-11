import Vue from "vue";

export default {
    loading(state) {
        state.status = "loading";
    },
    error(state) {
        state.status = "error";
    },
    done(state) {
        state.status = "done";
    },
    auth_success(state, data) {
        state.status = "success";
        state.token = data.token;
        Vue.set(state, "user", data.usuario);
    },
    update_success(state, user) {
        state.status = "success";
        Vue.set(state, "user", user);
    },
    update_error(state) {
        state.status = "error";
    },
    auth_error(state) {
        state.status = "error";
    },
    logout(state) {
        state.status = "";
        state.token = "";
        state.isAdmin = false;
    },
    set_admin(state) {
        state.isAdmin = true;
    }
};
