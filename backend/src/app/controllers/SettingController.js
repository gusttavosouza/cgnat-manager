import shelljs from 'shelljs';

class SettingController {
  async index(req,res){
    const comandos = shelljs.exec("sudo iptables -t nat -L -n | grep SNAT");
    const vetRoles = comandos.split('\n');
    const vetRolesSeparados = vetRoles.map(e => e = e.split(" "));


    let listRoles = []
    for(let i = 0; i < vetRolesSeparados.length - 1; i++){
      let resto = vetRolesSeparados[i][33].split(':');
      listRoles.push({
        ipLocal: vetRolesSeparados[i][11],
        ipGlobal: resto[1],
        ports: resto[2]
      })
    }
    return res.json(listRoles);
  }
}

export default new SettingController();