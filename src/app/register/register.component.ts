import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    currentYear : string | null;
    focus: boolean = false;
    focus1: any;
    constructor(private datePipe: DatePipe) {
        this.focus = true;
        const currentDate = new Date();
        this.currentYear = this.datePipe.transform(currentDate,'yyyy');
     }

    ngOnInit() {}
}
