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
        let indexes: number[] = []
        for(let i=0;i<indexesDayOfWeek.length;i++){
            for(let j=indexesDayOfWeek[i][0];j<indexesDayOfWeek[i][1];j++){
                if(indexesDayOfWeek[i][j]===index){
                    indexes=[i,j];
                    break
                }
            }
        }
        for(let i=indexes[0]; i<=indexes[1];i++){
            lessonNumber++;
        }
        return lessonNumber;
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
            {leassons.map(leasson=> leasson)}
        </div>
    );
};

export default TimetableGroup;