import { Component,Inject,OnInit } from '@angular/core';
import { MdDialogRef,MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'day-detail-view-compoent',
    templateUrl: 'dayDetailView.component.html',
})
export class DayDetailViewComponent implements OnInit {
    private currentDay: any;
    

    constructor(public dialogRef: MdDialogRef<DayDetailViewComponent>,
                @Inject(MD_DIALOG_DATA) public data: any) {
        
    }

    ngOnInit() {
        if(this.data && this.data.day) {
            this.currentDay = this.data.day;
        }
    }
}