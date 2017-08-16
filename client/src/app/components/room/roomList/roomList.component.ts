import { Component } from "@angular/core";
import { Router } from "@angular/router"
import { MdSnackBar } from "@angular/material";
import { RoomDataSource } from "../../../dataSources/roomDataSource";
import { RoomApiService } from "../../../services/api/roomApiService";
import { Room } from "../../../../../../common/models/room";


@Component({
    selector: "room-list",
    templateUrl: "roomList.component.html"
})
export class RoomListComponent {
    displayedColumns = ["selection", "name", "capacity", "description", "controls"];
    listSource: RoomDataSource;
    selectedRooms: Room[];

    constructor(private router: Router,
        private roomApiService: RoomApiService,
        private snackbar: MdSnackBar) {

    }

    addRoom() {
        this.router.navigate(["/room/new"]);
    }

    displayRoom(selectedRoom: Room) {
        this.router.navigate(["/room", selectedRoom._id]);
    }

    deleteRoom(selectedRoom: Room) {
        this.roomApiService.delete(selectedRoom._id)
            .then(() => {
                this.snackbar.open("Salle supprimée avec succès", "X", {
                    duration: 5000
                });
            }).catch((error) => {
                this.snackbar.open("Erreur lors de la suppression de la salle: " + error, "X", {
                    duration: 5000
                });
            })
    }

    deleteRooms() {
        this.selectedRooms.forEach((entry) => {
            this.roomApiService.delete(entry._id);
        });
    }

    ngOnInit() {
        this.listSource = new RoomDataSource();
    }

}