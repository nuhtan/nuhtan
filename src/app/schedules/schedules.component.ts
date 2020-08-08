import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
    dateString: string = (new Date()).toISOString();
    currentDate = new Date();

    updateDate() {
        this.dateString = this.currentDate.toISOString();
    }

    incrementDay() {
        this.currentDate.setDate(this.currentDate.getDate() + 1);
        this.updateDate();
    }

    decrementDay() {
        this.currentDate.setDate(this.currentDate.getDate() - 1);
        this.updateDate();
    }

    constructor() { }

    ngOnInit(): void {
    }

}
