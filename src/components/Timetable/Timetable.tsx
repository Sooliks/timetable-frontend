import React from 'react';


type TimetableProps = {
    currentGroupId: number | null
}

const Timetable: React.FC<TimetableProps> = ({currentGroupId}) => {
    return (
        <div>
            {currentGroupId !== null &&
                <div>

                </div>
            }
        </div>
    );
};

export default Timetable;