import React from 'react';

type DayOfWeekProps = {
    name: string
}

const DayOfWeek: React.FC<DayOfWeekProps> = ({name}) => {
    return (
        <div style={{
            backgroundColor: '#373737',
            width: 105,
            height: 94,
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4vh'
        }}>
            <p style={{fontFamily: 'Maitree', fontSize: '30px', color: 'white'}}>{name}</p>
        </div>
    );
};

export default DayOfWeek;