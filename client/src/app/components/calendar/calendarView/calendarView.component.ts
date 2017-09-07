import {Component,OnInit} from "@angular/core";
import {MdDialog} from '@angular/material';
import {DayDetailViewComponent} from "../dayDetailView/dayDetailView.component";

@Component( {
    selector:"calendar-view",
    templateUrl:"calendarView.component.html",
    styleUrls:["calendarView.component.css"]
})
export class CalendarViewComponent implements OnInit {
    baseDate: Date;
    calendarContent:Array<Array<any>>;
    mode:string = "monthly"; // we have only one mode yet
    readonly months:Array<string> = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Décembre"];
    readonly days:Array<string> = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    constructor(private dialog:MdDialog) {

    }

    computeDisplayedDays() {
        let calendarContent:Array<Array<any>> = [];

        let now = this.baseDate = new Date();

        let firstDayOfMonth = new Date();
        firstDayOfMonth.setDate(1);
        let lastDayOfMonth = new Date();
        lastDayOfMonth.setDate(1);
        lastDayOfMonth.setMonth(now.getMonth() + 1);
        lastDayOfMonth.setDate(0);
        lastDayOfMonth.setHours(23,59,59);

        let movingDate = new Date();
        movingDate.setDate(1);
        movingDate.setHours(0,0,0);
        let row = 0;
        while(movingDate.getTime() < lastDayOfMonth.getTime()) {
            if(calendarContent[row] === undefined) {
                calendarContent[row] = [];
            }
            calendarContent[row][movingDate.getDay()] = {date:new Date(movingDate.getTime()),reservations:[{test:"11:30 - 13:30 : lalala",color:"primary"},{test:"15:30 - 17:00 : test2",color:"warn"},{test:"third one",color:"warn"}]};
            if(movingDate.getDay() >= 6) {
                row++;
            }
            movingDate.setDate(movingDate.getDate()+1);
        }
        return calendarContent;
    }

    displayMore(day:any) {
        this.dialog.open(DayDetailViewComponent, {
            data: { day: day }
          });
    }

    getDayLabel(dayInWeek:number) {
        if(dayInWeek >=0 && dayInWeek<7 && dayInWeek !== null) {
            return this.days[dayInWeek];
        }
        return "";
    }

    getMonth() {
        return this.months[this.baseDate.getMonth()];
    }

    ngOnInit() {
        this.calendarContent = this.computeDisplayedDays();
        console.log(this.calendarContent);
    }
}