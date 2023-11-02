export interface Timetable {
    timetableId: number
    group: Group
    groupId: number
    timetableCells: TimetableCell[]
}

export interface Group {
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

export interface LessonTime {
    lessonTimeId: number
    lessonNumber: number
    dayOfWeek: number
    isWeekEven: boolean
    from: string
    to: string
}

export interface Cabinet {
    cabinetId: number
    address: string
    number: string
}

export interface Teacher {
    teacherId: number
    surname: string
    firstName: string
    middleName: string
}

export interface Subject {
    subjectId: number
    name: string
}

export interface ReplacingTimeTableCell {
    timeTableCellId: number
    lessonTime: LessonTime2
    lessonTimeId: number
    cabinet: Cabinet2
    cabinetId: number
    teacher: Teacher2
    teacherId: number
    subject: Subject2
    subjectId: number
    isReplaced: boolean
    replacingTimeTableCell: any
}

export interface LessonTime2 {
    lessonTimeId: number
    lessonNumber: number
    dayOfWeek: number
    isWeekEven: boolean
    from: string
    to: string
}

export interface Cabinet2 {
    cabinetId: number
    address: string
    number: string
}

export interface Teacher2 {
    teacherId: number
    surname: string
    firstName: string
    middleName: string
}

export interface Subject2 {
    subjectId: number
    name: string
}
