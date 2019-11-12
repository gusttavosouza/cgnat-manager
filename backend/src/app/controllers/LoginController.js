import fs from 'fs';
import sha1 from 'sha1';

class LoginController {
    async index(req,res) {
       const { user, password } = req.body;
       const password_hash = sha1(password);
       console.log(password_hash)
        let listUserSeparada = [];
        fs.readFile('archive/auth', function(err, data) {
            if(err){
                console.log(err)
            }else{
                const listUser = data.toString('utf8').split('\n');
                listUserSeparada =  listUser.map(e => e = e.split('<->'))
                for(let i = 0; i < listUserSeparada.length; i++){
                    if(listUserSeparada[i][0] === user && listUserSeparada[i][1] === password_hash){
                        return res.json({"auth": true, "user": user});
                    }
                }
                return res.json({"auth": false})
            }
        })
    }
}

export default new LoginController();