import React, {useEffect, useState} from 'react';
import {TimetableType} from "../../types/timetable";
import Lesson from "./Lesson";

type TimetableGroupProps = {
    timetable: TimetableType
}

const TimetableGroup: React.FC<TimetableGroupProps> = ({timetable}) => {
    const getDayOfWeekByIndex = (index: number): number => {
        if(index >= 0 && index<=5)return 1;
        if(index >= 6 && index<=11)return 2;
        if(index >= 12 && index<=17)return 3;
        if(index >= 18 && index<=23)return 4;
        if(index >= 24 && index<=29)return 5;
        return 0;
    }
    const [leassons,setLeassons] = useState<React.ReactNode[]>([])
    useEffect(()=>{
        let lessonNumber = 0;
        let _leassons: React.ReactNode[] = [];
        for(let i=0; i<30; i++){
            let dayOfWeekNumber = getDayOfWeekByIndex(i);
            const timetableCell = timetable?.timetableCells.find(t=>t.lessonTime.dayOfWeek === dayOfWeekNumber && t.lessonTime.lessonNumber === lessonNumber);
            if(lessonNumber>5){
                lessonNumber=0;
            }
            if(timetableCell!==undefined){
                _leassons = [..._leassons,<Lesson lesson={timetableCell}/>]
                lessonNumber++;
                continue
            }
            _leassons = [..._leassons,<Lesson lesson={null}/>]
            lessonNumber++;
        }
        setLeassons(_leassons);
    },[timetable])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {leassons}
        </div>
    );
};

export default TimetableGroup;