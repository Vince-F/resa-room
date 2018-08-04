import {Component} from "@angular/core";
import { RoomApiService } from "../../../services/api/roomApiService";
import {Room} from "resa-room-common/lib/room";


@Component( {
    selector:"room-view",
    templateUrl:"roomView.component.html"
})
export class RoomViewComponent {
    data:Room;

    constructor(private roomApiService: RoomApiService) {

    }
}