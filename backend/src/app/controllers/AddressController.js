import fs from 'fs';

class AddressController {
  async index(req, res){
    let vetLogs = [];
    let vetLogsRemove = [];
    try {
       vetLogs = fs.readFileSync('archive/logs', 'utf8');
       vetLogsRemove = fs.readFileSync('archive/logsremove', 'utf8');
    }catch (err) {
      console.error("There was an error opening the file:");
      console.log(err);
    }
    const listVet = vetLogs.toString('utf8').split('\n');
    const listVetFinal =  listVet.map(e => e = e.split('<->'))
    const listVetRemove = vetLogsRemove.toString('utf8').split('\n');
    const listVetRemoveFinal =  listVetRemove.map(e => e = e.split('<->'))

    let listAddress = []

    listVetFinal.forEach(e => {
      listAddress.push(e[1])
      listAddress.push(e[2])
    });
    listVetRemoveFinal.forEach(e => {
      listAddress.push(e[1])
      listAddress.push(e[2])
    });
    const novaArr = listAddress.filter((este, i) => listAddress.indexOf(este) === i || listAddress.indexOf(este) === undefined);
    let vet = []

    for(let i =0; i< novaArr.length - 1; i++){
      vet.push(novaArr[i])
    }
    return res.json(vet)
  }
}

export default new AddressController();