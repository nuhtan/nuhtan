export const DOTW = {
    SUNDAY: {
        CHAR: "U",
        THREE: "Sun",
        FULL: "Sunday"
    },
    MONDAY: {
        CHAR: "M",
        THREE: "Mon",
        FULL: "Monday"
    },
    TUESDAY: {
        CHAR: "T",
        THREE: "Tue",
        FULL: "Tuesday"
    },
    WEDNESDAY: {
        CHAR: "W",
        THREE: "Wed",
        FULL: "Wednesday"
    },
    THURSDAY: {
        CHAR: "R",
        THREE: "Thu",
        FULL: "Thursday"
    },
    FRIDAY: {
        CHAR: "F",
        THREE: "Fri",
        FULL: "Friday"
    },
    SATURDAY: {
        CHAR: "S",
        THREE: "Sat",
        FULL: "Saturday"
    }
}

export class TimeSpan {
    constructor(public startTime, public endTime) { }
}

export class Event {
    constructor(public name: string, public date: Date, public timespan: TimeSpan | TimeSpan[], public outOfHouse: boolean | boolean[]) { }
}

export class RepeatableEvent extends Event {
    constructor(public name: string, public startDate: Date, public daysOfTheWeek: typeof DOTW[], public times: TimeSpan[], public outOfHouseOccurrences: boolean[]) {
        super(name, startDate, times, outOfHouseOccurrences);
    }
}

export class Course extends RepeatableEvent {
    constructor(courseDepartment: string, courseNumber: number, title: string, startDate: Date, daysOfTheWeek: typeof DOTW[], times: [], public outOfHouseOccurrences: boolean[]) {
        super(courseDepartment + courseNumber, startDate, daysOfTheWeek, times, outOfHouseOccurrences);
    }
}
