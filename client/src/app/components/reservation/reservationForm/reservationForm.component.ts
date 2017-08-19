import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";
import {ReservationApiService} from "../../../services/api/reservationApiService";
import {Reservation} from "../../../../../../common/models/reservation";

@Component( {
    selector:"reservation-form",
    templateUrl:"reservationForm.component.html"
})
export class ReservationFormComponent {
    currentId:string;
    reservationData:any;

    constructor(private reservationApiService:ReservationApiService,
                private router:Router,
                private snackbar:MdSnackBar) {

    }

    create() {
        this.reservationApiService.create(this.reservationData)
            .then(() => {
                this.snackbar.open("Réservation créée avec succès");
                this.router.navigate(["/reservations"]);
            }).catch((error) => {
                this.snackbar.open("Impossible de créer la réservation, erreur: " + error);
            });
    }

    save() {
        if(this.currentId) {
            this.update();
        } else {
            this.create()
        }
    }

    update() {
        this.reservationApiService.update(this.currentId,this.reservationData)
            .then(() => {
                this.snackbar.open("Réservation mise à jour avec succès");
            }).catch((error) => {
                this.snackbar.open("Impossible de mettre à jour la réservation, erreur: " + error);
            });
    }

}