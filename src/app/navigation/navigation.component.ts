import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MessageService } from '../message/message.service';
import { auth } from 'firebase/app';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    constructor(public afAuth: AngularFireAuth, private messageService: MessageService) { }

    loginWithGoogle() {
        this.afAuth.signInWithPopup(new auth.GoogleAuthProvider).then(result => {
            if (result.user != null) {
                this.messageService.sendMessage("You have been logged in with Google.", { duration: 1500 });
            } else {
                this.messageService.sendMessage("There was an error logging in with Google.", { duration: 1500 });
            }
        })
    }

    logout() {
        this.afAuth.signOut().then(() => {
            this.messageService.sendMessage("You have been signed out.", { duration: 1500 });
        });
    }
}
