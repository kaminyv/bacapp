import axios from "axios";

export default class BacappApi {
    static async getAll() {
        try {
            const responce = await axios.get('http://bacapp.loc/api/catalog')
            return responce.data.data
        }
        catch (e) {
                    console.log(e);
                }

    }
}
