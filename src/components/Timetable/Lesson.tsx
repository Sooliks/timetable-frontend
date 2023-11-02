import React from 'react';

type LessonProps = {
    title: string
    cabinet: number
    teacher: string
    isReplaced: boolean
}

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
            justifyContent: 'space-between'
        }}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>{title}</p>
                {isReplaced &&
                    <div>

                    </div>
                }
            </div>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <p>{cabinet}</p>
                <p>{teacher}</p>
            </div>
        </div>
    );
};

export default Lesson;