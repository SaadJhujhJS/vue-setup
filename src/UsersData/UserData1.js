import axios from "axios";
export class UserServce{
    static getAllUsers(){
        let userdata=`https://jsonplaceholder.typicode.com/users`;
        return axios.get(userdata)
    }
    static getuser(userId){
        let userdata=`https://jsonplaceholder.typicode.com/users/${userId}`;
        return axios.get(userdata)
    }
}