export type TimetableType = {
    timetableId: number
    group: GroupType
    groupId: number
    timetableCells: TimetableCellType[]
}

export type GroupType = {
    groupId: number
    name: string
}

export type TimetableCellType = {
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
    replacingTimeTableCell: any
}

export type LessonTime = {
    lessonTimeId: number
    lessonNumber: number
    dayOfWeek: number
    isWeekEven: boolean
    from: string
    to: string
    timetableCells: any
}

export interface Cabinet {
    cabinetId: number
    address: string
    number: string
    timetableCells: any
}

export interface Teacher {
    teacherId: number
    surname: string
    firstName: string
    middleName: string
    timetableCells: any
}

export interface Subject {
    subjectId: number
    name: string
    timetableCells: any
}
