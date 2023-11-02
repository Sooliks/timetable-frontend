import React, {useEffect, useState} from 'react';
import {TimetableType} from "../../types/timetable";
import Lesson from "./Lesson";

type TimetableGroupProps = {
    timetable: TimetableType
}

const TimetableGroup: React.FC<TimetableGroupProps> = ({timetable}) => {
    const indexesDayOfWeek: number[][] = [
        [0,5],
        [6,11],
        [12,17],
        [18,23],
        [24,29]
    ]
    const getDayOfWeekByIndex = (index: number): number => {
        if(index >= 0 && index<=5)return 1;
        if(index >= 6 && index<=11)return 2;
        if(index >= 12 && index<=17)return 3;
        if(index >= 18 && index<=23)return 4;
        if(index >= 24 && index<=29)return 5;
        return 0;
    }
    const getLessonNumberByIndex = (index: number): number => {
        let lessonNumber: number = -1;
        let indexDayOfWeek: number = 0;
        for(let i=0;i<indexesDayOfWeek.length;i++){
            for(let j=0;j<30;j++){
                if(indexesDayOfWeek[i][j] === index){
                    indexDayOfWeek = i;
                    break
                }
            }
        }
        for(let i=indexesDayOfWeek[indexDayOfWeek][0]; i<=index;i++){
            lessonNumber++;
        }
        return lessonNumber;
    }

    const [leassons,setLeassons] = useState<React.ReactNode[]>([])
    useEffect(()=>{
        console.log(timetable)
        let _leassons: React.ReactNode[] = [];
        for(let i=0; i<30; i++){
            let dayOfWeekNumber = getDayOfWeekByIndex(i);
            console.log('day: '+dayOfWeekNumber)
            let lessonNumber = getLessonNumberByIndex(i);
            console.log('lessonNumber: '+lessonNumber)
            const timetableCell = timetable?.timetableCells.find(t=>t.lessonTime.dayOfWeek === dayOfWeekNumber && t.lessonTime.lessonNumber === lessonNumber);
            if(timetableCell!==undefined){
                _leassons = [..._leassons,<Lesson lesson={timetableCell}/>]
                continue
            }
            _leassons = [..._leassons,<Lesson lesson={null}/>]
        }
        setLeassons(_leassons);
    },[timetable])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {leassons.map(leasson=> leasson)}
        </div>
    );
};

export default TimetableGroup;