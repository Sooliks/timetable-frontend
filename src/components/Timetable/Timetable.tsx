import React from 'react';
import DayOfWeek from "./DayOfWeek";


type TimetableProps = {
    currentGroupId: number | null
}

const Timetable: React.FC<TimetableProps> = ({currentGroupId}) => {
    return (
        <div style={{width: '100vw'}}>
            {currentGroupId !== null &&
                <div style={{width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                        <div style={{width: '61.30vw', height: '81px', backgroundColor: '#373737', marginRight: '6.56vw', borderRadius: '10px'}}></div>
                    </div>
                    <div></div>
                    <div style={{marginLeft: '11.09vw'}}>
                        <DayOfWeek name={"ПН"}/>
                        <DayOfWeek name={"ВТ"}/>
                        <DayOfWeek name={"СР"}/>
                        <DayOfWeek name={"ЧТ"}/>
                        <DayOfWeek name={"ПТ"}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default Timetable;