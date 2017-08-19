import {Component,OnInit} from "@angular/core";
import {Router} from "@angular/router";
import { ReservationDataSource } from "../../../dataSources/reservationDataSource";
import { ReservationApiService } from "../../../services/api/reservationApiService";
import { Reservation } from "../../../../../../common/models/reservation";


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