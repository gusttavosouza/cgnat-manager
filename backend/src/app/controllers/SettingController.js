import shelljs from 'shelljs';
import fs from 'fs';

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
    const { listConfig, listDelete, user }  = req.body;

    if(listConfig){
      listConfig.forEach(e => {
        if(e[3] === "NÃO"){
          shelljs.exec(`iptables -I INPUT -p ALL -d ${e[1]} -j ACCEPT`);
          shelljs.exec(`iptables -t nat -I PREROUTING -p tcp -d ${e[1]} --dport ${e[2].replace("-", ":")} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -I POSTROUTING -s ${e[0]} -j SNAT -p tcp --to-source ${e[1]}:${e[2]}`);
          shelljs.exec(`iptables -t nat -I PREROUTING -p udp -d ${e[1]} --dport ${e[2].replace("-", ":")} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -I POSTROUTING -s ${e[0]} -j SNAT -p udp --to-source ${e[1]}:${e[2]}`);
          shelljs.exec(`iptables -t nat -I PREROUTING -p icmp -d ${e[1]} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -I POSTROUTING -s ${e[0]} -j SNAT -p icmp --to-source ${e[1]}`);
          const date = new Date();
          const data = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
          fs.writeFile('archive/logs', `${data}<->${e[0]}<->${e[1]}<->${e[2]}<->${"SIM"}<->${user}\n`,{enconding:'utf-8',flag: 'a'}, (err) => {
            if (err) {
                console.log(`Houve um erro ${err}`)
            }
          })
        }
      });
    }
    if(listDelete.length !== 0){
      listDelete.forEach(e => {
        if(e[3] === "SIM"){
          shelljs.exec(`iptables -D INPUT -p ALL -d ${e[1]} -j ACCEPT`);
          shelljs.exec(`iptables -t nat -D PREROUTING -p tcp -d ${e[1]} --dport ${e[2].replace("-", ":")} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -D POSTROUTING -s ${e[0]} -j SNAT -p tcp --to-source ${e[1]}:${e[2]}`);
          shelljs.exec(`iptables -t nat -D PREROUTING -p udp -d ${e[1]} --dport ${e[2].replace("-", ":")} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -D POSTROUTING -s ${e[0]} -j SNAT -p udp --to-source ${e[1]}:${e[2]}`);
          shelljs.exec(`iptables -t nat -D PREROUTING -p icmp -d ${e[1]} -j DNAT --to-destination ${e[0]}`);
          shelljs.exec(`iptables -t nat -D POSTROUTING -s ${e[0]} -j SNAT -p icmp --to-source ${e[1]}`);
          const date = new Date();
          const data = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
          fs.writeFile('archive/logsremove', `${data}<->${e[0]}<->${e[1]}<->${e[2]}<->${"NÃO"}<->${user}\n`,{enconding:'utf-8',flag: 'a'}, (err) => {
            if (err) {
                console.log(`Houve um erro ${err}`)
            }
          })
        }
      });    
    }
    return res.json({ok: true});
  }
}

export default new SettingController();