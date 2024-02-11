import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    currentYear : string | null  ;
    focus: any;
    focus1: any;
    constructor(private datePipe: DatePipe) {
        const currentDate = new Date();
        this.currentYear = this.datePipe.transform(currentDate,'yyyy');
     }

    ngOnInit() {}
}
