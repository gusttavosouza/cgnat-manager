export const tableConfig = {
    filterType: "checkbox",
    pagination: true,
    sort: false,
    selectableRows: true,
    search: true,
    download: false,
    print: false,
    filter: false,
    viewColumns: false,
    elevation: 0,
    textLabels: {
      body: {
        noMatch: "Ainda não temos dados a mostrar"
      },
      selectedRows: {
        text: "Item(s) Selecionados"
      }
    }
}

export const columsTable = [
  {
    name: "LabelIpLocal",
    label: "IP Local"
  },
  {
    name: "LabelIpGlobal",
    label: "IP Global"
  },
  {
    name: "LabelPorts",
    label: "Portas"
  },
  {
    name: "LabeIsProduction",
    label: "Em produção"
  }
];