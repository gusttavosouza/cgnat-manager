import shelljs from 'shelljs';

class HomeController {
  async index(req, res){
    const interfaceNames = shelljs.exec(`ifconfig | grep --text -i ': flags' | cut -f1 -d ':' | awk '{print $0}'`).split('\n');
    const addressIp = shelljs.exec(`ifconfig | grep --text -i 'inet ' | cut -f1 -d '' | awk '{print $2}'`).split('\n');
    const masks = shelljs.exec(`ifconfig | grep --text -i 'inet ' | cut -f1 -d '' | awk '{print $4}'`).split('\n');
    const packageTx = shelljs.exec(`ifconfig | grep --text -i 'TX packets ' | cut -f1 -d ':' | awk '{print $3}'`).split('\n');
    const packageRx = shelljs.exec(`ifconfig | grep --text -i 'RX packets ' | cut -f1 -d ':' | awk '{print $3}'`).split('\n');
    const errorsTx = shelljs.exec(`ifconfig | grep --text -i 'TX errors' | cut -f1 -d '' | awk '{print $3}'`).split('\n');
    const errorsRx = shelljs.exec(`ifconfig | grep --text -i 'RX errors' | cut -f1 -d '' | awk '{print $3}'`).split('\n');
    
    let listInterfaces = []
    for(let i = 0; i < interfaceNames.length-1; i++){
      listInterfaces.push({
        name: interfaceNames[i],
        address: addressIp[i],
        mask: masks[i],
        packageRx: packageRx[i],
        packageTx: packageTx[i],
        errorsRx: errorsRx[i],
        errorsTx: errorsTx[i]
      })
    }
    return res.json(listInterfaces)
  }
}

export default new HomeController();