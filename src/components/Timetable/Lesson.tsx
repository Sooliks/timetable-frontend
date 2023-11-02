import React from 'react';
import Replace from "./CancelAndReplace/Replace";
import {Typography} from "antd";
import {TimetableCell} from "../../types/timetable";

type LessonProps = {
    lesson: TimetableCell | null
}
const {Text} = Typography;

const Lesson: React.FC<LessonProps> = ({lesson}) => {
    return (
        <div style={{
            border: lesson?.isReplaced ? '3px solid transparent' : '3px solid #574FB7',
            width: '211.35px',
            height: 113,
            backgroundColor: '#373737',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '26.54px',
            marginBottom: '26px'
        }}>
            {lesson!==null &&
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text style={{fontFamily: 'Maitree', fontSize: '15pt', color: "white"}}>{lesson?.subject.name}</Text>
                    {lesson?.isReplaced &&
                        <Replace/>
                    }
                </div>
            }
            {lesson!==null &&
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <Text style={{fontFamily: 'Maitree', fontSize: '15pt', color: lesson?.isReplaced ? '#574FB7' : 'white'}}>
                        {lesson!.isReplaced ? lesson!.replacingTimeTableCell?.cabinet.address : lesson!.cabinet.address}
                    </Text>
                    <Text style={{fontFamily: 'Maitree', fontSize: '15pt', color: lesson?.isReplaced ? '#574FB7' : 'white'}}>
                        {
                            lesson?.isReplaced ?
                                lesson!.replacingTimeTableCell?.teacher.surname + ' ' + lesson!.replacingTimeTableCell?.teacher.firstName[0] + lesson!.replacingTimeTableCell?.teacher.middleName[0]
                                :
                                lesson!.teacher.surname + ' ' + lesson!.teacher.firstName[0] + lesson!.teacher.middleName[0]
                        }
                    </Text>
                </div>
            }
        </div>
    );
};

export default Lesson;