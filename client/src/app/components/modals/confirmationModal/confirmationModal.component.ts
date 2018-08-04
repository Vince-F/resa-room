import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirmation-modal-component',
    templateUrl: 'confirmationModal.component.html',
})
export class ConfirmationModalComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>) {

    }
}