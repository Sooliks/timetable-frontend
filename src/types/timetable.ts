export type TimetableType = {
    timetableId: number
    group: Group
    groupId: number
    timetableCells: TimetableCell[]
}

interface Group {
    groupId: number
    name: string
}

export interface TimetableCell {
    timeTableCellId: number
    lessonTime: LessonTime
    lessonTimeId: number
    cabinet: Cabinet
    cabinetId: number
    teacher: Teacher
    teacherId: number
    subject: Subject
    subjectId: number
    isReplaced: boolean
    replacingTimeTableCell?: ReplacingTimeTableCell
}

interface LessonTime {
    lessonTimeId: number
    lessonNumber: number
    dayOfWeek: number
    isWeekEven: boolean
    from: string
    to: string
}

interface Cabinet {
    cabinetId: number
    address: string
    number: string
}

interface Teacher {
    teacherId: number
    surname: string
    firstName: string
    middleName: string
}

interface Subject {
    subjectId: number
    name: string
}
interface ReplacingTimeTableCell {
    timeTableCellId: number
    lessonTime: LessonTime
    lessonTimeId: number
    cabinet: Cabinet
    cabinetId: number
    teacher: Teacher
    teacherId: number
    subject: Subject
    subjectId: number
    isReplaced: boolean
}


