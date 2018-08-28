import {Component,OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { ReservationApiService } from "../../../services/api/reservationApiService";
import { Reservation } from "resa-room-common/lib/reservation";


@Component( {
    selector:"reservation-view",
    templateUrl:"reservationView.component.html"
})
export class ReservationViewComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}