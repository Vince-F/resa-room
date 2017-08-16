import {Component} from "@angular/core";
import {Router} from "@angular/router"
import { RoomDataSource } from "../../../dataSources/roomDataSource";
import { RoomApiService } from "../../../services/api/roomApiService";
import {Room} from "../../../../../../common/models/room";


@Component( {
    selector:"room-list",
    templateUrl:"roomList.component.html"
})
export class RoomListComponent {
    displayedColumns = ["selection","name","capacity","description","controls"];
    listSource: RoomDataSource;
    selectedRooms:Room[];

    constructor(private router:Router,
                private roomApiService:RoomApiService) {
        
    }

    addRoom() {
        this.router.navigate(["/room/new"]);
    }

    displayRoom(selectedRoom:Room) {
        this.router.navigate(["/room",selectedRoom._id]);
    }

    deleteRooms() {
        this.selectedRooms.forEach((entry)=> {
            this.roomApiService.delete(entry._id);
        });
    }

    ngOnInit() {
        this.listSource = new RoomDataSource();
    }

}