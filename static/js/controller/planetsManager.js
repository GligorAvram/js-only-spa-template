import {dataHandler} from "../data/dataHandler.js";
import {htmlFactory, htmlTemplates} from "../view/htmlFactory.js";
import {domManager} from "../view/domManager.js";

export let planetsManager = {
    loadPlanets: async function () {

        const planets = await dataHandler.getPlanets();

        const planetListBuilder = htmlFactory(htmlTemplates.planetList);

        const content = planetListBuilder(planets.results);
        domManager.addChild("#root", content);
        
    },
};

