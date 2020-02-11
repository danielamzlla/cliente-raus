import moment from "moment";
moment.locale("es");
export default {
    Variablesglobales() {
        window.funciones = this;
    },
    setCO(nombre, valor) {
        window.localStorage.setItem(nombre, valor);
    },
    getCO(nombre) {
        if (window.localStorage.getItem(nombre) == null || window.localStorage.getItem(nombre) == "undefined") return "";
        else return window.localStorage.getItem(nombre);
    },
    geo() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(pos) {
                        resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude });
                    },
                    function() {
                        M.toast({ html: "Ocurrió un error intentando encontrar su ubicación" });
                        reject();
                    }
                );
            } else {
                M.toast({ html: "Debe activar el GPS para utilizar esta función." });
                reject();
            }
        });
    },
    calcularDistancia(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295; // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 + (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;


        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    },

    esCercano(latOrigen, lonOrigen, latDestino, lonDestino) {
        return this.calcularDistancia(latOrigen, lonOrigen, latDestino, lonDestino) < 300;
    },
    reinicializarSelects() {
        setTimeout(() => {
            var elems = document.querySelectorAll("select");
            var instances = M.FormSelect.init(elems);
        }, 200);
    },
    __showPass(e) {
        const _formApp = e.parentNode;
        const _inputTypePass = _formApp.children[1];

        if (e.classList.contains('fa-eye')) {
            _inputTypePass.removeAttribute('type');
            _inputTypePass.setAttribute('type', 'text');
            _inputTypePass.classList.add('__visible');
            e.classList.remove('fa-eye');
            e.classList.add('fa-eye-slash');
            e.classList.add('__visible');
        } else {
            _inputTypePass.removeAttribute('type');
            _inputTypePass.setAttribute('type', 'password');
            _inputTypePass.classList.remove('__visible');
            e.classList.remove('fa-eye-slash');
            e.classList.remove('__visible');
            e.classList.add('fa-eye');
        }
    },
    __loadVideo(inputId, contentPreviewsId) {
        document.querySelector(`#${inputId}`).onchange = function(e) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            
            reader.onprogress = function(data) {
                if (data.lengthComputable) {                                            
                    const progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                    const boxpreloader = document.querySelector('#boxPreloader');
                    const boxpreloaderProgress = document.querySelector('#ProgressBar');
                    const elementProcentaje = document.querySelector('#porcentaje');
        
                    if(boxpreloader && boxpreloaderProgress) {
                        boxpreloader.classList.remove('no-display');
                        boxpreloaderProgress.setAttribute("style", `width: ${progress}%;`);
                        elementProcentaje.innerText = progress + "%";
                        if (progress > 48) {
                            elementProcentaje.setAttribute('style', 'color: #fff;');
                        }
                    }
                }
            }
      
            reader.onload = function(){
                let media = document.querySelector(`#${contentPreviewsId}`);
                const boxpreloader = document.querySelector('#boxPreloader');
                media.src = reader.result;
                media.setAttribute('controls', 'on');
                if (!boxpreloader.classList.contains('no-display')) {
                    boxpreloader.classList.add('no-display');
                }
            };
        }
    },
    __loadbtn(op,text) {
        if(op==1) {
            document.getElementById("add_btn").disabled = true;
            document.getElementById("add_btn").innerHTML = "<i class='fa fa-spinner fa-spin fa-fw'></i> Guardando";
        }else{
            document.getElementById("add_btn").disabled = false;
            document.getElementById("add_btn").innerText = text;
        }
    },
    yyyymmdd(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return (
            date.getFullYear() +
            "-" +
            ((mm > 9 ? "" : "0") + mm) +
            "-" +
            ((dd > 9 ? "" : "0") + dd)
        );
    },
};
