import React from 'react';
import Replace from "./CancelAndReplace/Replace";
import {Typography} from "antd";

type LessonProps = {
    title?: string
    cabinet?: number
    teacher?: string
    isReplaced?: boolean
}
const {Text} = Typography;

const Lesson: React.FC<LessonProps> = ({title, cabinet, teacher, isReplaced}) => {
    return (
        <div style={{
            border: !isReplaced ? '3px solid transparent' : '3px solid #574FB7',
            width: 223,
            height: 113,
            backgroundColor: '#373737',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginRight: '26.54px'
        }}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: 'Maitree', fontSize: '15pt'}}>{title}</Text>
                {isReplaced &&
                    <Replace/>
                }
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <Text style={{fontFamily: 'Maitree', fontSize: '15pt', color: isReplaced ? '#574FB7' : undefined}}>{cabinet}</Text>
                <Text style={{fontFamily: 'Maitree', fontSize: '15pt', color: isReplaced ? '#574FB7' : undefined}}>{teacher}</Text>
            </div>
        </div>
    );
};

export default Lesson;