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

    rooms:Array<any> = [
        {_id:"hu",name:"concert"},
        {_id:"huuiijui",name:"fête"}
    ]

    hours:Array<number>;
    minutes:Array<number>;

    constructor(private reservationApiService:ReservationApiService,
                private router:Router,
                private snackbar:MdSnackBar) {
        this.hours = [];
        this.minutes = [];
        for(var i=0; i<24;i++) {
            this.hours.push(i);
        }
        for(var j = 0;j<60; j+=5) {
            this.minutes.push(j);
        }
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

    goBackToList() {
        this.router.navigate(["/reservations"]);
    }

    isNewReservation() {
        return true;
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