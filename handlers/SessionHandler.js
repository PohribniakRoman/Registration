const bcrypt = require('bcrypt');
const saltRounds = 10;

class SessionHandler{
    constructor(password){
        this.password = password;
    }
    hashPassword(){
        new Promise((resolve,reject)=>{
                bcrypt.hash(this.password,saltRounds).then((hash)=>{
                    resolve(hash);
                })
        })
    } 
}

module.exports = new SessionHandler();