export const App = {
    selectHoras:null,
    selectAnios:null,
    selectPuesto:null,
    sueldoBase:0,
    sueldoHora:0,
    sueldoBase: 0,
    canastaBasica: 0,
    apoyo: 0,
    antiguedad: 0,
    estimulo:  0,
    totalPercepciones: 0,
    ISR: 0,
    servicioSalud: 0,
    AFORE: 0,
    sindicato: 0,
    totalDeducciones: 0,
    salarioNeto: 0,


    mostrarCalculos(){
        document.getElementById("sueldoBase").innerHTML = `
            <h3>${this.sueldoBase.toFixed(2)}</h3>
        `
        // "<h3>$" + this.sueldoBase.toFixed(2) + "</h3>"
        document.getElementById("apoyo").innerHTML = `
            <h3>${this.apoyo.toFixed(2)}</h3>
        `
        document.getElementById("canastaBasica").innerHTML = `
            <h3>${this.canastaBasica.toFixed(2)}</h3>
        `
        document.getElementById("antiguedad").innerHTML = `
            <h3>${this.antiguedad.toFixed(2)}</h3>
        `
        document.getElementById("estimulo").innerHTML = `
            <h3>${this.estimulo.toFixed(2)}</h3>
        `
        document.getElementById("totalPercepciones").innerHTML = `
            <h3>${this.totalPercepciones.toFixed(2)}</h3>
        `
        document.getElementById("ISR").innerHTML = `
            <h3>${this.ISR.toFixed(2)}</h3>
        `
        document.getElementById("servicioSalud").innerHTML = `
            <h3>${this.servicioSalud.toFixed(2)}</h3>
        `
        document.getElementById("AFORE").innerHTML = `
            <h3>${this.AFORE.toFixed(2)}</h3>
        `
        document.getElementById("sindicato").innerHTML = `
            <h3>${this.sindicato.toFixed(2)}</h3>
        `
        document.getElementById("totalDeducciones").innerHTML = `
            <h3>${this.totalDeducciones.toFixed(2)}</h3>
        `
        document.getElementById("salarioNeto").innerHTML = `
            <h3>${this.salarioNeto.toFixed(2)}</h3>
        `
    },

    calcularSalarioNeto() {
        let puesto = parseInt(this.selectPuesto.value);
        let horas = parseInt(this.selectHoras.value);
        let anios = parseInt(this.selectAnios.value);
        let sueldoHora = 0;
        let sueldoBase = 0;
        let canastaBasica = 0;
        let apoyo = 0;
        let antiguedad = 0;
        let estimulo = 0;
        let totalPercepciones = 0;
        let ISR = 0;
        let servicioSalud = 0;
        let AFORE = 0;
        let sindicato = 0;
        let totalDeducciones = 0;
        let salarioNeto = 0;

        switch (puesto) {
            case 1:
                sueldoHora = 50;
                break;
            case 2:
                sueldoHora = 20;
                break;
            case 3:
                sueldoHora = 16;
                break;
        }
        this.sueldoBase = sueldoHora * horas;
        this.canastaBasica = parseFloat(this.sueldoBase * 0.025);
        this.apoyo = parseFloat(this.sueldoBase * 0.05);
        this.antiguedad = parseFloat(anios * 10);
        this.estimulo = parseFloat(this.sueldoBase * 0.02);
        this.totalPercepciones = parseFloat(this.sueldoBase + this.canastaBasica + this.apoyo + this.antiguedad + this.estimulo);
        this.ISR = parseFloat(this.sueldoBase * 0.15);
        this.servicioSalud = parseFloat(this.sueldoBase * 0.035);
        this.AFORE = parseFloat(this.sueldoBase * 0.04);
        this.sindicato = parseFloat(this.sueldoBase * 0.01);
        this.totalDeducciones = parseFloat(this.ISR + this.servicioSalud + this.AFORE + this.sindicato);
        this.salarioNeto = parseFloat(this.totalPercepciones - this.totalDeducciones);

        this.mostrarCalculos();
    },
    onInit(){
        this.selectHoras = document.getElementById("horas")
        this.selectAnios = document.getElementById("anios")
        this.selectPuesto = document.getElementById("puesto")
        
        for (let i = 0; i <= 50; i++) {
            this.selectHoras.innerHTML +="<option value='" + i + "'>" + i + "</option>"; 
            if(i <= 40){
                this.selectAnios.innerHTML +="<option value='" + i + "'>" + i + "</option>";
            }
        }
        this.selectPuesto.addEventListener("change", ()=>{
            this.calcularSalarioNeto();
        })
        this.selectHoras.addEventListener("change", ()=>{
            this.calcularSalarioNeto();
        })
        this.selectAnios.addEventListener("change", ()=>{
            this.calcularSalarioNeto();
        })
        this.calcularSalarioNeto();
    }
}


document.addEventListener("DOMContentLoaded", ()=>{
    App.onInit();
})