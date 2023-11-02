import {AxiosResponse} from "axios";
import {$client} from "../index";
import {TimetableType} from "../../types/timetable";

export namespace TimetableAPI {
    export const getTimetableGroup = async (id: number): Promise<TimetableType> => {
        const {data} = await $client.get(`/timetable/get?groupId=${id}`);
        return data;
    }
}