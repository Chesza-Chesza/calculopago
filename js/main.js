import { TableInputs } from "./TableInputs.js"
import { TableResults } from "./TableResults.js";

export const App = {

    onInit(){
        TableInputs.onInit("TableInputs");
        TableInputs.render();
        
        TableResults.onInit("TableResults");
        TableResults.render();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    App.onInit();
})
