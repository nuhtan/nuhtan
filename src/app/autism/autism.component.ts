import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-autism',
    templateUrl: './autism.component.html',
    styleUrls: ['./autism.component.css']
})
export class AutismComponent implements OnInit {
    barLabels = [];
    barHeights = [];
    selected = 0;
    chart: Chart;
    barData = {
        datasets: [{
            data: [],
            backgroundColor: [
                "rgba(103, 58, 183, 1)",
                "rgba(103, 58, 183, 0.9)",
                "rgba(103, 58, 183, 0.8)",
                "rgba(103, 58, 183, 0.7)",
                "rgba(103, 58, 183, 0.6)",
                "rgba(103, 58, 183, 0.5)",
                "rgba(103, 58, 183, 0.4)",
                "rgba(103, 58, 183, 0.3)",
                "rgba(103, 58, 183, 0.2)",
                "rgba(103, 58, 183, 0.1)",
                "rgba(103, 58, 183, 0)",
                "rgba(0, 0, 0, 0.1)",
                "rgba(0, 0, 0, 0.2)",
                "rgba(0, 0, 0, 0.3)",
                "rgba(0, 0, 0, 0.4)",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.6)",
                "rgba(0, 0, 0, 0.7)",
                "rgba(0, 0, 0, 0.8)",
                "rgba(0, 0, 0, 0.9)",
                "rgba(0, 0, 0, 1)",
            ]
        }],
        labels: []
    }
    data = {
        datasets: [{
            data: [],
            backgroundColor: [
                "rgba(103, 58, 183, 1)",
                "rgba(103, 58, 183, 0.9)",
                "rgba(103, 58, 183, 0.8)",
                "rgba(103, 58, 183, 0.7)",
                "rgba(103, 58, 183, 0.6)",
                "rgba(103, 58, 183, 0.5)",
                "rgba(103, 58, 183, 0.4)",
                "rgba(103, 58, 183, 0.3)",
                "rgba(103, 58, 183, 0.2)",
                "rgba(103, 58, 183, 0.1)",
                "rgba(103, 58, 183, 0)",
                "rgba(0, 0, 0, 0.1)",
                "rgba(0, 0, 0, 0.2)",
                "rgba(0, 0, 0, 0.3)",
                "rgba(0, 0, 0, 0.4)",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.6)",
                "rgba(0, 0, 0, 0.7)",
                "rgba(0, 0, 0, 0.8)",
                "rgba(0, 0, 0, 0.9)",
                "rgba(0, 0, 0, 1)",
            ]
        }],
        labels: []
    }

    people = [
        new person("Alex", 13),
        new person("Anne", 36),
        new person("Calvin", 12),
        new person("Gabby", 28),
        new person("Joseph", 14),
        new person("Nathaniel", 14),
        new person("Nick", 28),
        new person("Nikname", 23),
        new person("Sasha", 26)
    ]

    selectedPerson: person = this.people[0];
    list: { number: number, label: string }[];

    tabChange(event) {
        this.chart.destroy();
        if (event.index == 0) {
            this.chart = new Chart('canvas', {
                type: 'bar',
                data: this.barData
            })
        } else if (event.index == 1) {
            this.chart = new Chart('canvas', {
                type: 'polarArea',
                data: this.data
            })
        }
    }

    selectChange(event) {
        console.log("select");
        this.people.forEach(person => {
            if (person.name == event.value) {
                this.selectedPerson = person;
            }
        })
        this.changeFocus(this.selectedPerson)
    }

    changeFocus(indiv: person) {
        this.list = [];
        this.people.forEach(pers => {
            if (pers.name != indiv.name) {
                let num = 100 - ((Math.abs(indiv.score - pers.score) / 50) * 100);
                this.list.push({ number: num, label: pers.name })
            }
        });
        this.list.sort(function (a, b) {
            return ((a.number < b.number) ? 1 : ((a.number == b.number) ? 0 : -1));
        })
        let nums = [];
        let labs = [];
        this.list.forEach(pers => {
            nums.push(pers.number);
            labs.push(pers.label);
        })
        this.chart.data.datasets[0].data = nums;
        this.chart.data.labels = labs;
        console.log(this.chart.data.datasets[0].data.length);
        this.chart.update();
    }

    constructor() { }

    ngOnInit(): void {
        this.people.sort(function (a, b) {
            return ((a.score < b.score) ? 1 : ((a.score == b.score) ? 0 : -1));
        })
        let nums = [];
        let labs = [];
        this.people.forEach(person => {
            nums.push(person.score);
            labs.push(person.name);
        })
        this.barData.labels = labs;
        this.barData.datasets[0].data = nums;
        this.chart = new Chart('canvas', {
            type: 'bar',
            data: this.barData
        })
    }

}

export class person {
    name;
    score;
    constructor(name: string, score: number) {
        this.name = name;
        this.score = score
    }
}