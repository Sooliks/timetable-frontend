import React, {useEffect, useState} from 'react';
import DayOfWeek from "./DayOfWeek";
import {TimetableType} from "../../types/timetable";
import {TimetableAPI} from "../../http/api/TimetableAPI";
import Lesson from "./Lesson";
const exampleTimetableJson = require('../../assets/response.json')



type TimetableProps = {
    currentGroupId: number | null
}

const Timetable: React.FC<TimetableProps> = ({currentGroupId}) => {
    const [timetable,setTimetable] = useState<TimetableType>()

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
                        <div style={{width: '61.30vw', height: '81px', backgroundColor: '#373737', marginRight: '6.56vw', borderRadius: '10px'}}></div>
                    </div>
                    <div>
                        <div style={{marginLeft: '11.09vw'}}>
                            <DayOfWeek name={"ПН"}/>
                            <DayOfWeek name={"ВТ"}/>
                            <DayOfWeek name={"СР"}/>
                            <DayOfWeek name={"ЧТ"}/>
                            <DayOfWeek name={"ПТ"}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
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