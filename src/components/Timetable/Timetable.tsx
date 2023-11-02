import React, {useEffect, useState} from 'react';
import DayOfWeek from "./DayOfWeek";
import {TimetableType} from "../../types/timetable";
import {TimetableAPI} from "../../http/api/TimetableAPI";
import Lesson from "./Lesson";
import {Typography} from "antd";

const {Text} = Typography;

const exampleTimetableJson = require('../../assets/response.json')



type TimetableProps = {
    currentGroupId: number | null
}
type ScheduleType = {
    name: string
    from: string
    to: string
}

const Timetable: React.FC<TimetableProps> = ({currentGroupId}) => {
    const [timetable,setTimetable] = useState<TimetableType>()
    const schedules: ScheduleType[] = [
        {name: '1 Пара', from: '9:00', to: '10:30'},
        {name: '2 Пара', from: '10:50', to: '12:20'},
        {name: '3 Пара', from: '12:40', to: '14:10'},
        {name: '4 Пара', from: '14:30', to: '16:00'},
        {name: '5 Пара', from: '16:10', to: '17:40'},
    ]

    useEffect(()=>{
        if(currentGroupId!==null) {
            /*TimetableAPI.getTimetableGroup(currentGroupId).then(data => {
                //TODO тут запрашиваем расписание с сервера и устанавливаем в стейт
            }).catch(e=>{

            })*/
            setTimetable(exampleTimetableJson);
        }
    },[])


    return (
        <div style={{width: '100vw'}}>
            {currentGroupId !== null &&
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                        <div style={{display: 'flex', justifyContent: 'space-around',width: '61.30vw', height: '81px', backgroundColor: '#373737', marginRight: '6.56vw', borderRadius: '10px'}}>
                            {schedules.map((schedule,index)=>
                                <div style={{height: '100%', borderRight: index === 4 ? undefined : '2px solid #7F7B7B', width: 227, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: 'white', fontSize: 30}}>{schedule.name}</Text>
                                    <Text style={{color: 'white', fontSize: 25}}>{schedule.from + ' - ' + schedule.to}</Text>
                                </div>
                            )}
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{marginLeft: '11.09vw', marginTop: '37px'}}>
                            <DayOfWeek name={"ПН"}/>
                            <DayOfWeek name={"ВТ"}/>
                            <DayOfWeek name={"СР"}/>
                            <DayOfWeek name={"ЧТ"}/>
                            <DayOfWeek name={"ПТ"}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginTop: '26px', marginLeft: '44px'}}>
                            {timetable?.timetableCells.map(timetable=>
                                <Lesson />
                            )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Timetable;