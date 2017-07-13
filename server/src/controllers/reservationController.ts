import {Reservation} from "../../../common/models/reservation";

export class ReservationController {
    testData:Map<string,Reservation>;

    constructor() {
        this.testData = new Map();
    }

    createReservation(data:any) : Promise<Reservation> {
        return new Promise((resolve,reject) => {
            try {
                data._id = Math.floor(Math.random() * 1000000000).toString(36);
                let newReservation = new Reservation(data);
                this.testData.set(data._id,newReservation);
                resolve(newReservation);
            } catch(error) {
                reject("Fail to reservation room, error: " + error);
            }
        });
    }

    retrieveReservation(id:string):Promise<Reservation> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                resolve(this.testData.get(id));
            } else {
                reject("No reservation with ID " + id + " exists");
            }
        });
    }

    retrieveReservationList() : Promise<Array<Reservation>> {
        return new Promise((resolve,reject) => {
            resolve(Array.from(this.testData.values()));
        });
    }

    retrieveReservationListForUser(userId:string):Promise<Array<Reservation>> {
        return this.retrieveReservationList()
            .then((reservations) => {
                return reservations.filter((elem) => {
                    return elem.authorId === userId;
                });
            });
    }

    updateReservation(id:string,data:any):Promise<Reservation> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                let previousData = this.testData.get(id);
                data._id = previousData;
                try {   
                    let updatedReservation = new Reservation(data);
                    this.testData.set(data._id,updatedReservation);
                    resolve(updatedReservation);
                } catch(error) {
                    reject("Fail to update reservation, error: " + error);
                }
            } else {
                reject("No reservation with ID " + id + " exists");
            }
        });
    }

    deleteReservation(id:string):Promise<boolean> {
        return new Promise((resolve,reject) => {
            if(this.testData.has(id)) {
                this.testData.delete(id);
                resolve(true);
            } else {
                reject("No reservation with ID " + id + " exists");
            }
        });
    }
}