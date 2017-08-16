import {Component} from "@angular/core";

@Component( {
    selector:"calendar-view",
    templateUrl:"calendarView.component.html"
})
class CalendarViewComponent {
    mode:string = "monthly"; // we have only one mode yet

    computeDisplayedDays() {
        let calendarContent:Array<Array<any>> = [];

        let now = new Date();

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
            calendarContent[row][movingDate.getDay()] = {date:new Date(movingDate.getTime()),reservations:[]};
            if(movingDate.getDay() >= 6) {
                row++;
            }
            movingDate.setDate(movingDate.getDate()+1);
        }
        return calendarContent;
    }
}