import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private snackBar: MatSnackBar) { }

    sendMessage(text: string, params: {}) {
        this.snackBar.open(text, "dismiss", params);
    }
}
