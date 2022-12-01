export const TableInputs = {
  id: "",
  element: null,
  selectHoras:null,
  selectAnios:null,
  selectPuesto:null,
  template:
    `
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
            </select>
        </td>
        <td>
            <select id="anios" class="form-control">
            </select>
        </td>
    </tr>
</table>
    `,
  onInit(id) {
    this.element = document.getElementById(id)
  },
  render() {
    this.element.innerHTML = this.template

    this.selectHoras = document.getElementById("horas")
    this.selectAnios = document.getElementById("anios")
    this.selectPuesto = document.getElementById("puesto")

    for (let i = 0; i <= 50; i++) {
      this.selectHoras.innerHTML += "<option value='" + i + "'>" + i + "</option>";
      if (i <= 40) {
        this.selectAnios.innerHTML += "<option value='" + i + "'>" + i + "</option>";
      }
    }
  }
}