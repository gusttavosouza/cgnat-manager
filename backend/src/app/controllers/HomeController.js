import shelljs from 'shelljs';

class HomeController {
  index(){
    console.log(shelljs.exec(`ip add | grep --text -i 'inet ' | cut -f1 -d ':' | awk '{print $2}'`))
  }
}

export default new HomeController();