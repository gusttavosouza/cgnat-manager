import shelljs from 'shelljs';

class HomeController {
  async index(req, res){
    const interfaceNames = shelljs.exec(`ip addr | grep --text -i 'mtu' | cut -f1 -d '' | awk '{print $2}'`).split('\n');
    const addressIp = shelljs.exec(`ip addr | grep --text -i 'inet ' | cut -f1 -d '' | awk '{print $2}'`).split('\n');
    const packageRx = shelljs.exec(`ip addr | grep --text -i 'link/' | cut -f1 -d '' | awk '{print $2}'`).split('\n');
    let listInterfaces = []
    for(let i = 0; i < interfaceNames.length-1; i++){
      listInterfaces.push({
        name: interfaceNames[i],
        address: addressIp[i],
        packageRx: packageRx[i],
      })
    }
    return res.json(listInterfaces)
  }
}

export default new HomeController();