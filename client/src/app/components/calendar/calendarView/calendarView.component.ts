import {Component,OnInit} from "@angular/core";
import {MdDialog} from '@angular/material';
import {DayDetailViewComponent} from "../dayDetailView/dayDetailView.component";
import {Reservation} from "../../../../../../common/models/reservation";

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
        this.baseDate = new Date();
    }

    computeDisplayedDays() {
        let calendarContent:Array<Array<any>> = [];

        let firstDayOfMonth = new Date(this.baseDate);
        firstDayOfMonth.setDate(1);
        let lastDayOfMonth = new Date(this.baseDate);
        lastDayOfMonth.setDate(1);
        lastDayOfMonth.setMonth(this.baseDate.getMonth() + 1);
        lastDayOfMonth.setDate(0);
        lastDayOfMonth.setHours(23,59,59);

        let movingDate = new Date(this.baseDate);
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
        // to have the last week of month appearing complete on calendar
        const lastIndex = calendarContent.length - 1;
        for(let i = calendarContent[lastIndex].length; i<7; i++) {
            calendarContent[lastIndex][i] = null;
        }
        return calendarContent;
    }

    displayReservation(reservation:Reservation) {
        console.log(reservation);
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

    goToNextMonth() {
        this.baseDate.setMonth(this.baseDate.getMonth() + 1);
        this.calendarContent = this.computeDisplayedDays();
    }

    goToPreviousMonth() {
        this.baseDate.setMonth(this.baseDate.getMonth() - 1);
        this.calendarContent = this.computeDisplayedDays();
    }

    ngOnInit() {
        this.calendarContent = this.computeDisplayedDays();
    }
}