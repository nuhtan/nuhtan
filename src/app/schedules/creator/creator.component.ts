import { Component, OnInit } from '@angular/core';
import { Event } from './events'

@Component({
    selector: 'app-creator',
    templateUrl: './creator.component.html',
    styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
    eventType = 0; //0 is single, 1 is repeat, 2 is class
    inPerson = false;
    events: Event[] = [];

    eventTypeChange(event) {
        this.eventType = event.value
    }

    constructor() { }

    ngOnInit(): void {
    }

    test() {
        console.log('test')
    }

    addEvent() {

    }

    clearEvent() {

    }

    saveSchedule() {

    }

    clearSchedule() {

    }
}

export class ScheduleData {
    constructor() {

    }
}