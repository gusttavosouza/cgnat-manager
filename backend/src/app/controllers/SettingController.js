import shelljs from 'shelljs';

class SettingController {
  async index(req,res){
    const comandos = shelljs("iptables -t nat -L -n | grep SNAT");
    const vetRoles = comandos.split('\n');
    const vetRolesSeparados = vetRoles.map(e => e = e.split(" "));

    let listRoles = []
    for(let i = 0; i < vetRolesSeparados.length-1; i++){
      listRoles.push({
        ipLocal: vetRolesSeparados[i][4],
        ipGlobal: vetRolesSeparados[i][6],
        rangePorts: vetRolesSeparados[i][7],
      })
    }
    return res.json(listRoles);
  }
}

export default new SettingController();