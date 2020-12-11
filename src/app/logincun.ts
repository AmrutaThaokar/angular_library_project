export class Logincun {
    id: number = 0;
    username: String = "";
    password: String = "";
    loginAs: String = "";
    constructor( username: String,password: String ,loginAs: String){
        this.username=username;
        this.password=password;
        this.loginAs=loginAs;
    }
}

