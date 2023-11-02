import React, {useEffect, useState} from 'react';
import {TimetableType} from "../../types/timetable";
import Lesson from "./Lesson";

type TimetableGroupProps = {
    timetable?: TimetableType
}

const TimetableGroup: React.FC<TimetableGroupProps> = ({timetable}) => {
    const [leassons,setLeassons] = useState<React.ReactNode[]>([])
    useEffect(()=>{
        let _leassons: React.ReactNode[] = [];
        for(let i=0;i<30;i++){
            //if(timetable?.timetableCells[i].)
            _leassons = [..._leassons,<Lesson/>]
        }
        setLeassons(_leassons);
    },[])

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {leassons.map(leasson=> leasson)}
        </div>
    );
};

export default TimetableGroup;