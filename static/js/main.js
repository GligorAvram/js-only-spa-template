import { planetsManager } from "./controller/planetsManager.js";

function init() {
    planetsManager.loadPlanets();
}

init();
