import { Component, OnInit, Input } from "@angular/core";
import { Router } from '@angular/router';
import { MdSnackBar, MdDialog } from "@angular/material";
import { ConfirmationModalComponent } from "../../modals/confirmationModal/confirmationModal.component";

import { RoomApiService } from "../../../services/api/roomApiService";
import { Room } from "../../../../../../common/models/room";

@Component({
    selector: "room-form",
    templateUrl: "roomForm.component.html"
})
export class RoomFormComponent implements OnInit {
    @Input() room: Room;
    @Input() readOnly: boolean;

    roomData: any;
    currentId: string;

    constructor(private roomApiService: RoomApiService,
        private router: Router,
        private snackbar: MdSnackBar,
        private dialog: MdDialog) {

    }

    goBackToList() {
        this.router.navigate(["/rooms"]);
    }

    create() {
        this.roomApiService.create(this.roomData)
            .then(() => {
                this.snackbar.open("Salle créée avec succès", "X", {
                    duration: 5000
                });
                this.router.navigate(["/rooms"]);
            }).catch((error) => {
                this.snackbar.open("Impossible de créer la salle, erreur: " + error, "X", {
                    duration: 5000
                });
            });
    }

    delete() {
        let modal = this.dialog.open(ConfirmationModalComponent);
        modal.afterClosed().subscribe((result) => {
            if (result === "Yes") {
                this.roomApiService.delete(this.roomData._id)
                    .then(() => {
                        this.snackbar.open("Salle supprimée avec succès", "X", {
                            duration: 5000
                        });
                        this.router.navigate(["/rooms"]);
                    }).catch((error) => {
                        this.snackbar.open("Impossible de supprimer la salle, erreur: " + error, "X", {
                            duration: 5000
                        });
                    });
            }
        });
    }

    isNewRoom(): boolean {
        return this.router.url === "/room/new";
    }

    load() {
        if (this.currentId) {
            this.roomApiService.retrieve(this.currentId)
                .then((data) => {
                    this.roomData = data;
                }).catch((error) => {
                    this.snackbar.open("Impossible d'obtenir les données de la salle, erreur: " + error, "X", {
                        duration: 5000
                    });
                });
        }
    }

    ngOnInit() {
        if (this.router.url === "/room/new") {
            this.roomData = {};
        } else if (this.room) {
            this.roomData = this.room;
        } else {
            // load data
            this.roomData = <Room>{
                _id: "test",
                name: "TestRoom",
            }
        }
    }

    save() {
        // check current state to determine, update or create
        if (this.currentId) {
            this.update();
        } else {
            this.create();
        }
    }

    update() {
        this.roomApiService.update(this.currentId, this.roomData)
            .then(() => {
                this.snackbar.open("Salle mise à jour avec succès", "X", {
                    duration: 5000
                });
            }).catch((error) => {
                this.snackbar.open("Impossible de sauvegarder les données de la salle, erreur: " + error, "X", {
                    duration: 5000
                });
            });
    }
}