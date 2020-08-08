import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public afAuth: AngularFireAuth, breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router, private messageService: MessageService) {
        breakpointObserver.observe([
            Breakpoints.HandsetPortrait,
        ]).subscribe(result => {
            if (result.matches) {
                this.tileCols = 4;
            }
        })
        breakpointObserver.observe([
            Breakpoints.HandsetLandscape,
            Breakpoints.TabletPortrait,
            Breakpoints.WebPortrait,
        ]).subscribe(result => {
            if (result.matches) {
                this.tileCols = 2;
            }
        })
        breakpointObserver.observe([
            Breakpoints.TabletLandscape,
            Breakpoints.WebLandscape,
        ]).subscribe(result => {
            if (result.matches) {
                this.tileCols = 1;
            }
        })
    }
    ngOnInit(): void {
        let error = this.route.snapshot.params.error;
        this.router.navigate([""])
        if (error == 1) {
            this.messageService.sendMessage("You must be logged in to access that... ", { duration: 1500 });
        }
    }

    tileCols = 2;
}
