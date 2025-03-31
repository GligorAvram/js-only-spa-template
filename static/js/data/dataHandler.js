export let dataHandler = {
    getPlanets: async function () {
        return await apiGet("https://swapi.dev/api/planets");
    },
    getPlanet: async function (planetId) {
        // the [planet] is retrieved and then the callback function is called with the planet id
    },
};

async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.ok) {
        return await response.json();
    }
}

async function apiPost(url, payload) {
}

async function apiDelete(url) {
}

async function apiPut(url) {
}

async function apiPatch(url) {
}
