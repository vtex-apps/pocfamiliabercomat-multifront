##  ⚠️ Maintenance ⚠️
*Starting September 1st 2022, this application will no longer be maintained by VTEX. Code is released for free under the GNU/PL Agreement for you to use and modify at your convenience. The VTEX repository shall remain unchanged with the original version.*

---

## pocfamiliabercomat multifront

# Regionalization scripts

# (postalCode < 3500)

function regionalization () {

let postalCode = 3434;

const dataPOST = JSON.stringify({
    public: {
        country: {
        value: "ARG",
        },
        postalCode:{
            value: postalCode + ""
        },
    },
    });
    const xhrPOST = new XMLHttpRequest();
    xhrPOST.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        localStorage.setItem('CP', postalCode + "");
    	window.location.reload();
    }
    });
    xhrPOST.open("POST", "/api/sessions");
    xhrPOST.setRequestHeader("content-type", "application/json");
    xhrPOST.send(dataPOST);
}

regionalization();


# (postalCode > 3500 && postalCode < 3790)

function regionalization () {

let postalCode = 3636;

const dataPOST = JSON.stringify({
    public: {
        country: {
        value: "ARG",
        },
        postalCode:{
            value: postalCode + ""
        },
    },
    });
    const xhrPOST = new XMLHttpRequest();
    xhrPOST.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        localStorage.setItem('CP', postalCode + "");
    	window.location.reload();
    }
    });
    xhrPOST.open("POST", "/api/sessions");
    xhrPOST.setRequestHeader("content-type", "application/json");
    xhrPOST.send(dataPOST);
}

regionalization();

# (postalCode > 4000 && postalCode < 4242)

function regionalization () {

let postalCode = 4141;

const dataPOST = JSON.stringify({
    public: {
        country: {
        value: "ARG",
        },
        postalCode:{
            value: postalCode + ""
        },
    },
    });
    const xhrPOST = new XMLHttpRequest();
    xhrPOST.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        localStorage.setItem('CP', postalCode + "");
    	window.location.reload();
    }
    });
    xhrPOST.open("POST", "/api/sessions");
    xhrPOST.setRequestHeader("content-type", "application/json");
    xhrPOST.send(dataPOST);
}

regionalization();
