import axios from 'axios';

export default class BacappApi {
    static async getAll() {
        const responce = await axios.get('/api/catalog');
        // console.log(responce.data);
        return responce.data;
    }
    static async getMaster(id) {
        const responce = await axios.get('/api/catalog/' + id)
        // console.log(responce.data);
        return responce.data;
    }
    static postRegistre(user) {
        const register =  axios.post(
            '/api/auth/register',
            {
            name : user.name,
            email : user.email,
            password : user.password,
            is_master : user.is_master
              })
            console.log(register);
        return register;
}
    static postToken(user) {
            const token =  axios.post(
                'api/auth/token',
                {
                    email: user.email,
                    password: user.password
                })
            console.log(token);
        return token;
    }
//     static postLogout(token) {
//         const logout = axios.post(
// '/api/auth/logout'
//     )
// }

}
