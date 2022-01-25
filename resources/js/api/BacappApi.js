import axios from 'axios';

export default class BacappApi {
    static async getAll() {
        const responce = await axios.get('/api/catalog');
        //     console.log(responce.data.data);
        //         {responce.data.data.map((master) => (
        //             console.log(master.master.name)
        //       ))}

        //     {
        //   responce.data.data.map((services) =>
        //             console.log(services.service)
        //   )
        //     }
        console.log(responce.data);
        //         {
        //             responce.data.meta.links.map((link)=>
        // console.log(link)
        //             )
        //         }
        // console.log(responce.data.links.next)
        // return responce.data.data;
        return responce.data;
    }
}
