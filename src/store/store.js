import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";

import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        token: localStorage.getItem("token") || "",
        isAdmin: false,
        user: {},
        io: {}
    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        status: state => state.status,
        isAdmin: state => state.isAdmin,
        user: state => state.user
    },
    mutations,
    actions,
    plugins: [
        createPersistedState()
    ]
});
