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
    const { rolesForApply } = req.body;

    rolesForApply.forEach(e => {
      console.log(`IpBluic ${e[0]} ipPrivate ${e[1]} porta ${e[2]}`)
    });

    return res.json({"ok": true});
  }
}

export default new SettingController();