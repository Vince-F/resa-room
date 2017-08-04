import {Component} from "@angular/core";
import {DataSource} from '@angular/cdk';
import { RoomDataSource } from "../../../dataSources/roomDataSource";

@Component( {
    selector:"room-list",
    templateUrl:"roomList.component.html"
})
export class RoomListComponent {
    displayedColumns = ["name","capacity","description"];
    listSource: RoomDataSource;

    constructor() {
        
    }

    ngOnInit() {
        this.listSource = new RoomDataSource();
    }

}