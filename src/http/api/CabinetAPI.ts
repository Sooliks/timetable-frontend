import { AxiosResponse } from "axios";
import { $client, $clientAuth } from "..";

export namespace CabinetAPI {
    export const getList = async (): Promise<AxiosResponse> => {
        return await $client.get('/api/cabinet/getlist');
    }
    
    
}