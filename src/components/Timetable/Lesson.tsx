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
            border: !lesson?.isReplaced ? '3px solid transparent' : '3px solid #574FB7',
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
                    <Text className={"text"} style={{fontSize: '15pt', color: "white", marginLeft: '10px'}}>{lesson?.subject.name}</Text>
                    {lesson?.isReplaced &&
                        <Replace/>
                    }
                </div>
            }
            {lesson!==null &&
                <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: '4px'}}>
                    <Text className={"text"} style={{fontSize: '14pt', color: lesson?.isReplaced ? '#574FB7' : 'white', marginLeft: '10px'}}>
                        {lesson?.isReplaced ? lesson!.replacingTimeTableCell?.cabinet.number : lesson!.cabinet.number}
                    </Text>
                    <Text className={"text"} style={{fontSize: '14pt', color: lesson?.isReplaced ? '#574FB7' : 'white', marginRight: '10px'}}>
                        {
                            lesson?.isReplaced ?
                                lesson!.replacingTimeTableCell?.teacher.surname + ' ' + lesson!.replacingTimeTableCell?.teacher.firstName[0] + '.' + lesson!.replacingTimeTableCell?.teacher.middleName[0]
                                :
                                lesson!.teacher.surname + ' ' + lesson!.teacher.firstName[0] + '.' +  lesson!.teacher.middleName[0]
                        }
                    </Text>
                </div>
            }
        </div>
    );
};

export default Lesson;