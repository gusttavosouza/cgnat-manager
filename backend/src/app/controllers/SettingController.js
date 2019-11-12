import shelljs from 'shelljs';

class SettingController {
  async index(req,res){
    const comandos = shelljs.exec("sudo iptables -t nat -L -n | grep tcp");
    const vetRoles = comandos.split('\n');
    let publicoMaisPorta = "";
    let privado = ""; 
    let lista = [];
    for(let i = 0; i < vetRoles.length-1; i++){
      for(let j = 20; j < vetRoles[i].length; j++){
          if(vetRoles[i][j] !== " "){
            privado += vetRoles[i][j]
          }else{
            break
          }
      }
      for(let j = 65; j < vetRoles[i].length; j++){
        if(vetRoles[i][j] !== " "){
          publicoMaisPorta += vetRoles[i][j]
        }else{
          break
        }
      }
      const vetNew = publicoMaisPorta.split(":");
      lista.push([privado, vetNew[0], vetNew[1], "SIM"])
      publicoMaisPorta = "";
      privado = ""
    };
    return res.json(lista);
  }

  async store(req,res){
    const { listConfig, listDelete }  = req.body;
    if(listConfig){
      listConfig.forEach(e => {
        if(e[3] === "NÃO"){
          shelljs.exec(`sudo iptables -t nat -A POSTROUTING -s ${e[0]} -p tcp -j SNAT --to ${e[1]}:${e[2]}`)
          shelljs.exec(`sudo iptables -t nat -A POSTROUTING -s ${e[0]} -p udp -j SNAT --to ${e[1]}:${e[2]}`)
        }
      });
    }
    if(listDelete.length !== 0){
      listDelete.forEach(e => {
        if(e[3] === "SIM"){
          shelljs.exec(`sudo iptables -t nat -D POSTROUTING -s ${e[0]} -p tcp -j SNAT --to ${e[1]}:${e[2]}`)
          shelljs.exec(`sudo iptables -t nat -D POSTROUTING -s ${e[0]} -p udp -j SNAT --to ${e[1]}:${e[2]}`)
        }
      });
    }
    return res.json({ok: true});
  }
}

export default new SettingController();