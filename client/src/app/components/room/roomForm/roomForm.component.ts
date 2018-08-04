import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar, MatDialog } from "@angular/material";
import { ConfirmationModalComponent } from "../../modals/confirmationModal/confirmationModal.component";
import { NeedSave } from "../../../services/guards/needSaveGuard.service"
import { RoomApiService } from "../../../services/api/roomApiService";
import { Room } from "resa-room-common/lib/room";
import { switchMap, map } from 'rxjs/operators';

@Component({
    selector: "room-form",
    templateUrl: "roomForm.component.html",
    styleUrls:["roomForm.component.css"]
})
export class RoomFormComponent implements OnInit, NeedSave {
    @Input() room: Room;
    @Input() readOnly: boolean;

    @ViewChild('dataForm') dataForm;

    roomData: any;
    currentId: string;

    constructor(private roomApiService: RoomApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private snackbar: MatSnackBar,
        private dialog: MatDialog) {

    }

    goBackToList() {
        if (this.isAdmin()) {
            this.router.navigate(["/admin/rooms"]);
        } else {
            this.router.navigate(["/rooms"]);
        }
    }

    create(): Promise<boolean> {
        return this.roomApiService.create(this.roomData)
            .then(() => {
                this.snackbar.open("Salle créée avec succès", "X", {
                    duration: 5000
                });
                this.dataForm.touched = false;
                this.router.navigate(["/rooms"]);
                return true;
            }).catch((error) => {
                this.snackbar.open("Impossible de créer la salle, erreur: " + error, "X", {
                    duration: 5000
                });
                return false;
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

    isAdmin(): boolean {
        return this.router.url.indexOf("/admin/room/") === 0;
    }

    isNewRoom(): boolean {
        return this.router.url === "/admin/room/new";
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

    needSave(): boolean {
        return this.dataForm.touched;
    }

    ngOnInit() {
        if (!this.isAdmin()) {
            this.readOnly = true;
        } else {
            this.readOnly = false;
        }

        if (this.router.url === "/admin/room/new") {
            this.roomData = {};
        } else if (this.room) {
            this.roomData = this.room;
        } else {
            this.activatedRoute.paramMap.pipe(
                switchMap((param) => {
                    this.currentId = param.get("id");
                    return this.roomApiService.retrieve(param.get("id"));
                })
            ).subscribe(room => this.roomData = room);
        }
    }

    save(): Promise<boolean> {
        console.log(this.dataForm.touched);
        // check current state to determine, update or create
        if (this.currentId) {
            return this.update();
        } else {
            return this.create();
        }
    }

    update(): Promise<boolean> {
        return this.roomApiService.update(this.currentId, this.roomData)
            .then(() => {
                this.snackbar.open("Salle mise à jour avec succès", "X", {
                    duration: 5000
                });
                this.dataForm.touched = false;
                return true;
            }).catch((error) => {
                this.snackbar.open("Impossible de sauvegarder les données de la salle, erreur: " + error, "X", {
                    duration: 5000
                });
                return false;
            });
    }
}