let config = {
    secret: "ClaveSecreta2020",
    dominio: "http://localhost:8641",
    ruta(direccion) {
        return this.dominio + "/" + direccion;
    },

    instapago: {
        keyid: "6D34C0B7-C0C9-42D9-811E-D2FC7C380957",
        publickeyid: "ed1ca2443e7fe800090d9efbb170b842"
    }
};

export default config;
