import { TableInputs } from "./TableInputs.js"

export const TableResults = {
  id: "",
  ELEMENT: null,

  STATE: {
    sueldoBase: 0,
    sueldoHora: 0,
    sueldoBase: 0,
    canastaBasica: 0,
    apoyo: 0,
    antiguedad: 0,
    estimulo: 0,
    totalPercepciones: 0,
    ISR: 0,
    servicioSalud: 0,
    AFORE: 0,
    sindicato: 0,
    totalDeducciones: 0,
    salarioNeto: 0,
  },

  calcularSalarioNeto({ selectPuestoValue, selectHorasValue, selectAniosValue }) {
    let sueldoHora = 0;

    switch (selectPuestoValue) {
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

    let sueldoBase = sueldoHora * selectHorasValue
    let canastaBasica = parseFloat(sueldoBase * 0.025)
    let apoyo = parseFloat(sueldoBase * 0.05)
    let antiguedad = parseFloat(selectAniosValue * 10)
    let estimulo = parseFloat(sueldoBase * 0.02)
    let totalPercepciones = parseFloat(sueldoBase + canastaBasica + apoyo + antiguedad + estimulo)
    let ISR = parseFloat(sueldoBase * 0.15)
    let servicioSalud = parseFloat(sueldoBase * 0.035)
    let AFORE = parseFloat(sueldoBase * 0.04)
    let sindicato = parseFloat(sueldoBase * 0.01)
    let totalDeducciones = parseFloat(ISR + servicioSalud + AFORE + sindicato)
    let salarioNeto = parseFloat(totalPercepciones - totalDeducciones)

    this.STATE = {
      sueldoBase,
      sueldoHora,
      sueldoBase,
      canastaBasica,
      apoyo,
      antiguedad,
      estimulo,
      totalPercepciones,
      ISR,
      servicioSalud,
      AFORE,
      sindicato,
      totalDeducciones,
      salarioNeto,
    }

    this.render();
  },

  TEMPLATE() {

    return `
      <table class="table">
        <tr>
            <td colspan="2">
                <h4>PERCEPCIONES</h4>
            </td>
            <td colspan="2">
                <h4>DEDUCCIONES</h4>
            </td>
        </tr>

        <tr>
            <td>Sueldo base</td>
            <td>
              <span id="sueldoBase">
                ${this.STATE.sueldoBase.toFixed(2)}
              </span>
            </td>
            <td>ISR</td>
            <td>
              <span id="ISR">
                ${this.STATE.ISR.toFixed(2)}
              </span>
            </td>
        </tr>
        <tr>
            <td>Canasta Básica</td>
            <td>
              <span id="canastaBasica">
                ${this.STATE.canastaBasica.toFixed(2)}
              </span>
            </td>
            <td>Servicio Salud</td>
            <td>
              <span id="servicioSalud">
                ${this.STATE.servicioSalud.toFixed(2)}
              </span>
            </td>
        </tr>
        <tr>
            <td>Apoyo</td>
            <td>
              <span id="apoyo">
                ${this.STATE.apoyo.toFixed(2)}
              </span>
            </td>
            <td>AFORE</td>
            <td>
              <span id="AFORE">
                ${this.STATE.AFORE.toFixed(2)}
              </span>
            </td>
        </tr>
        <tr>
            <td>Antiguedad</td>
            <td>
              <span id="antiguedad">
                ${this.STATE.antiguedad.toFixed(2)}
              </span>
            </td>
            <td>Sindicato</td>
            <td>
              <span id="sindicato">
                ${this.STATE.sindicato.toFixed(2)}
              </span>
            </td>
        </tr>
        <tr>
            <td>Estímulo</td>
            <td>
              <span id="estimulo">
                ${this.STATE.estimulo.toFixed(2)}
              </span>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>TOTAL PERCEPCIONES</td>
            <td>
              <span id="totalPercepciones">
                ${this.STATE.totalPercepciones.toFixed(2)}
              </span>
            </td>
            <td>TOTAL DEDUCCIONES</td>
            <td>
              <span id="totalDeducciones">
                ${this.STATE.totalDeducciones.toFixed(2)}
              </span>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <h4>SALARIO NETO</h4>
                <td>
                  <span id="salarioNeto">
                    ${this.STATE.salarioNeto.toFixed(2)}
                  </span>
                </td>
            </td>
        </tr>

      </table>
    `
  },

  onChangeInputs() {
    this.calcularSalarioNeto(
      TableInputs.getState()
    )
  },

  onInit(id) {
    this.ELEMENT = document.getElementById(id)

    TableInputs.selectPuesto.addEventListener("change", () => this.onChangeInputs())
    TableInputs.selectHoras.addEventListener("change", () => this.onChangeInputs())
    TableInputs.selectAnios.addEventListener("change", () => this.onChangeInputs())

    // la primera vez calculamos con los valores por defecto
    this.calcularSalarioNeto(
      TableInputs.getState()
    )
  },
  render() {
    this.ELEMENT.innerHTML = this.TEMPLATE()
  }
}