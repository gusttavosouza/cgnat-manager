export const tableConfig = {
  filterType: "checkbox",
  pagination: true,
  sort: false,
  selectableRows: "none",
  search: true,
  download: false,
  print: false,
  filter: true,
  viewColumns: true,
  rowsPerPage: 20,
  rowsPerPageOptions: [20,50,100],
  elevation: 4,
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
  name: "LabelData",
  label: "Data"
},
{
  name: "LabelIpLocal",
  label: "IP Global"
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
  name: "LabeStatus",
  label: "Status"
},
{
  name: "LabeUser",
  label: "Usuário"
}
];