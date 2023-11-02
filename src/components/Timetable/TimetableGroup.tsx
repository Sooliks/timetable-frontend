import React, {useEffect, useState} from 'react';
import {TimetableType} from "../../types/timetable";

type TimetableGroupProps = {
    timetable?: TimetableType
}

const TimetableGroup: React.FC<TimetableGroupProps> = ({timetable}) => {
    const [leassons,setLeassons] = useState<React.FC[]>([])
    useEffect(()=>{

    },[])

    return (
        <div>

        </div>
    );
};

export default TimetableGroup;