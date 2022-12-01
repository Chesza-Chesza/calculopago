import {TableInputs} from "./table_inputs.js"
import { TableResults } from "./table_results.js";

export const App = {
    onInit(){
        TableInputs.onInit("TableInputs");
        TableInputs.render();
        TableResults.onInit("TableResults");
        TableResults.render();

        TableInputs.selectPuesto.addEventListener("change", ()=>{
            TableResults.calcularSalarioNeto(
                parseInt(TableInputs.selectPuesto.value),
                parseInt(TableInputs.selectHoras.value),
                parseInt(TableInputs.selectAnios.value)
            );
        })
        TableInputs.selectHoras.addEventListener("change", ()=>{
            TableResults.calcularSalarioNeto(
                parseInt(TableInputs.selectPuesto.value),
                parseInt(TableInputs.selectHoras.value),
                parseInt(TableInputs.selectAnios.value)
            );
        })
        TableInputs.selectAnios.addEventListener("change", ()=>{
            TableResults.calcularSalarioNeto(
                parseInt(TableInputs.selectPuesto.value),
                parseInt(TableInputs.selectHoras.value),
                parseInt(TableInputs.selectAnios.value)
            );
        })
        TableResults.calcularSalarioNeto(
            parseInt(TableInputs.selectPuesto.value),
                parseInt(TableInputs.selectHoras.value),
                parseInt(TableInputs.selectAnios.value)
        );
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    App.onInit();
})