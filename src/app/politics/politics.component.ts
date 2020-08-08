import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-politics',
    templateUrl: './politics.component.html',
    styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
    scatterLabels = [];
    scatterPoints = [];
    selected = 0;
    chart: Chart;
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
        new person("Alex", -1.88, -3.28),
        new person("Anne", -8.63, -7.33),
        new person("Calvin", -4.38, -4.92),
        new person("Gabby", -5.5, -5.49),
        new person("Joseph", -8.38, -5.9),
        new person("Nathaniel", -1.63, -4.56),
        new person("Nick", -1.13, -7.03),
        new person("Nikname", -7.63, -7.79),
        new person("Tim", -2.63, -0.36),
        new person("Tim Shapiro", 5.5, -0.36)
    ]

    scatterData = {
        datasets: [{
            data: [],
            backgroundColor: "rgb(103, 58, 183)",
            label: "Compass"
        }],
        labels: []
    }


    selectedPerson: person = this.people[0];
    list: { number: number, label: string }[];

    tabChange(event) {
        this.chart.destroy();
        if (event.index == 0) {
            this.chart = new Chart('canvas', {
                type: 'scatter',
                data: this.scatterData,
                options: {
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                var label = data.labels[tooltipItem.index];
                                return label + ": (" + tooltipItem.xLabel + ", " + tooltipItem.yLabel + ")";
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: -10,
                                max: 10,
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: -10,
                                max: 10,
                            }
                        }]
                    }
                }
            });
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

    constructor() { }

    ngOnInit(): void {
        this.people.forEach(person => {
            this.scatterLabels.push(person.name);
            this.scatterPoints.push({ x: person.x, y: person.y });
        })
        this.scatterData.datasets[0].data = this.scatterPoints;
        this.scatterData.labels = this.scatterLabels;
        // This should create the scatter at start instead
        this.chart = new Chart('canvas', {
            type: 'scatter',
            data: this.scatterData,
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            var label = data.labels[tooltipItem.index];
                            return label + ": (" + tooltipItem.xLabel + ", " + tooltipItem.yLabel + ")";
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: -10,
                            max: 10,
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: -10,
                            max: 10,
                        }
                    }]
                }
            }
        })
    }

    // initScatter() {
    //     this.chart.data.datasets[0].data = this.scatterPoints;
    //     this.chart.data.labels = this.scatterLabels;
    //     this.chart.update();
    // }

    changeFocus(indiv: person) {
        this.list = [];
        this.people.forEach(pers => {
            if (pers.name != indiv.name) {
                let distance = Math.sqrt(((indiv.x - pers.x) ** 2) + ((indiv.y - pers.y) ** 2));
                let max = Math.sqrt((20 ** 2) + (20 ** 2));
                let rawNum = 100 - (distance / max * 100);
                let num = Number(rawNum.toFixed(2));
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
}

export class person {
    name;
    x;
    y;
    constructor(name: string, x: number, y: number) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}