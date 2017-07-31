import {Component} from "@angular/core";
import {RoomApiService} from "../../../services/api/roomApiService";

@Component( {
    selector:"room-form",
    templateUrl:"roomForm.component.html"
})
export class RoomFormComponent {
    roomData:any;
    currentId:string;

    constructor(private roomApiService:RoomApiService) {

    }

    load() {
        if(this.currentId) {
            this.roomApiService.retrieve(this.currentId)
                .then((data) => {
                    this.roomData = data;
                })
        }
    }

    save() {
        // check current state to determine, update or create
        if(this.currentId) {
            this.roomApiService.update(this.currentId,this.roomData)
        } else {
            this.roomApiService.create(this.roomData)
        }
    }
}