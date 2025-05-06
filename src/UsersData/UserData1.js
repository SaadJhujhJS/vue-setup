import axios from "axios";
export class UserServce{
    static getAllUsers(){
        let userdata='https://jsonplaceholder.typicode.com/users';
        return axios.get(userdata)
    }
}