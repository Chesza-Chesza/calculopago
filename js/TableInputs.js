export const TableInputs = {
  id: '',
  ELEMENT: null,

  selectHoras: null,
  selectAnios: null,
  selectPuesto: null,
 
  getState(){
    return {
      selectPuestoValue: parseInt(this.selectPuesto.value),
      selectHorasValue: parseInt(this.selectHoras.value),
      selectAniosValue: parseInt(this.selectAnios.value)
    }
  },

  TEMPLATE() {
    //Crear Options PRIMERO como strings (no crear nodos antes de tiempo)
    let optionsHoras = ''
    let optionsAnios = ''

    for (let i = 0; i <= 50; i++) {
      optionsHoras += `<option value=${i}> ${i} </option>`
      if (i <= 40) {
        optionsAnios += `<option value=${i}> ${i} </option>`
      }
    }

    return `
    <table class="table">
        <tr>
            <td>Puesto</td>
            <td>Horas</td>
            <td>Años</td>
        </tr>
        <tr>
            <td>
                <select id="puesto" class="form-control">
                  <option value="1">Gerente</option>
                  <option value="2">Secretaria</option>
                  <option value="3">Cajero</option>
                </select>
            </td>
            <td>
                <select id="horas" class="form-control">
                  ${optionsHoras}
                </select>
            </td>
            <td>
                <select id="anios" class="form-control">
                  ${optionsAnios}
                </select>
            </td>
        </tr>
      </table>
    `
  },

  onInit(id) {
    this.ELEMENT = document.getElementById(id)
  },
  render() {
    this.ELEMENT.innerHTML = this.TEMPLATE()
    
    // ya debe haber sido pintado para tener los selects
    this.selectPuesto = document.getElementById('puesto')
    this.selectHoras = document.getElementById('horas')
    this.selectAnios = document.getElementById('anios')
  }
}