import fs from 'fs';

class LogsController {
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

    let vetRetorno = [];
    let controller = true;

    for(let i = 0; i < listVetFinal.length - 1; i++){
      controller = true;
      for(let j = 0; j < listVetRemoveFinal.length -1; j++){
        if(listVetFinal[i][1] === listVetRemoveFinal[j][1] && 
          listVetFinal[i][2] === listVetRemoveFinal[j][2] &&
          listVetFinal[i][3] === listVetRemoveFinal[j][3]){
            vetRetorno.push([
              `${listVetFinal[i][0]}-${listVetRemoveFinal[j][0]}`,
              listVetFinal[i][1],
              listVetFinal[i][2],
              listVetFinal[i][3],
              "NÃO",
              listVetFinal[i][5]
            ])
            controller = false;
        }
       }
       if(controller){
         vetRetorno.push(listVetFinal[i])
       }
    }
    return res.json(vetRetorno)
  }
}
export default new LogsController();