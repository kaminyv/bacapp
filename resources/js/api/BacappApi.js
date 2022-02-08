import axios from 'axios';

export default class BacappApi {
    static async getCatalog(page = 1, per_page = 9) {
        const responce = await axios.get('/api/catalog', {
            params: {
                page: page,
                per_page: per_page,
            },
        });
        // console.log(responce.data);
        return responce.data;
    }
    static async getCatalogWorkshopr(id) {
        const responce = await axios.get('/api/catalog/' + id);
        // console.log(responce.data);
        return responce.data;
    }
    static postRegistre(user) {
        const registre = axios.post('/api/auth/register', {
            name: user.name,
            email: user.email,
            password: user.password,
            is_master: user.is_master,
        });
        return registre;
    }
    static postToken(user) {
        const tokens = axios.post('api/auth/token', {
            email: user.email,
            password: user.password,
        });
        return tokens;
    }
    static postLogout(token) {
        const request = axios.post('/api/auth/logout',
            {
                //...data
            }, {
            headers: {
                'Authorization': `Bearer ` + token
            }
        })
        return request
    }
    static postLogoutAll(token) {
        const logoutAll = axios.post('/api/auth/logout-all',
            {
                headers: {
                    'Authorization': `Bearer ` + token
                }
            }
        )
        return logoutAll;
    }
}
