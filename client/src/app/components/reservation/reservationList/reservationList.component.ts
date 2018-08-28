import {Component} from "@angular/core";
import {Router} from "@angular/router"
import { ReservationApiService } from "../../../services/api/reservationApiService";
import {Reservation} from "resa-room-common/lib/reservation";


@Component( {
    selector:"reservation-list",
    templateUrl:"reservationList.component.html"
})
export class ReservationListComponent {
    displayedColumns = ["roomName","authorName","beginDate","endDate"];
    selectedReservations:Reservation[];

    constructor(private router:Router,
                private reservationApiService:ReservationApiService) {

    }

    addReservation() {
        this.router.navigate(["/reservation/new"]);
    }

    displayReservation(selectedReservation:Reservation) {
        this.router.navigate(["/reservation",selectedReservation._id]);
    }

    deleteReservations() {
        this.selectedReservations.forEach((entry)=> {
            this.reservationApiService.delete(entry._id);
        });
    }

    ngOnInit() {
        let filter = {};
    }

}