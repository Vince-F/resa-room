import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'confirmation-modal-component',
    templateUrl: 'confirmationModal.component.html',
})
export class ConfirmationModalComponent {
    constructor(public dialogRef: MdDialogRef<ConfirmationModalComponent>) {

    }
}