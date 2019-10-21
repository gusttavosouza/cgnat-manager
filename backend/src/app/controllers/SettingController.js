import shelljs from 'shelljs';

class SettingController {
  async index(req,res){
    const comandos = shelljs.exec("sudo iptables -t nat -L -n | grep SNAT");
    const vetRoles = comandos.split('\n');
    const vetRolesSeparados = vetRoles.map(e => e = e.split(" "));

    let listRoles = []
    for(let i = 0; i < vetRolesSeparados.length - 1; i++){
      let resto = vetRolesSeparados[i][33].split(':');
      listRoles.push([
       vetRolesSeparados[i][11],
       resto[1], resto[2],"SIM"
      ])
    }
    return res.json(listRoles);
  }

  async store(req,res){
    const { listConfig, listDelete }  = req.body;

    if(!listConfig){
      listConfig.forEach(e => {
        if(e[3] === "NÃO"){
          shelljs.exec(`sudo iptables -t nat -A POSTROUTING -o enp0s8 -s ${e[0]} -p tcp -j SNAT --to ${e[1]}:${e[2]}`)
          shelljs.exec(`sudo iptables -t nat -A POSTROUTING -o enp0s8 -s ${e[0]} -p udp -j SNAT --to ${e[1]}:${e[2]}`)
        }
      });
    }
    
    if(!listDelete){
      listDelete.forEach(e => {
        if(e[3] === "NÃO"){
          shelljs.exec(`sudo iptables -t nat -D POSTROUTING -o enp0s8 -s ${e[0]} -p tcp -j SNAT --to ${e[1]}:${e[2]}`)
          shelljs.exec(`sudo iptables -t nat -D POSTROUTING -o enp0s8 -s ${e[0]} -p udp -j SNAT --to ${e[1]}:${e[2]}`)
        }
      });
    }
    return res.json({"ok": true});
  }

  async delete(req, res){

  }
}

export default new SettingController();