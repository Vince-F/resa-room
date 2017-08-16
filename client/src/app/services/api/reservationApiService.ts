import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {BasicApiService} from "./basicApiService";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReservationApiService extends BasicApiService {
    private prefixUrl:string = "/api/reservation";

    constructor(private http:Http) {
        super();
    }

    create(data:any) {
        return this.http.post(this.prefixUrl + '/',{data:data})
            .toPromise()
            .then(this.onSuccess);
    }

    retrieve(id:string) {
        return this.http.get(this.prefixUrl + "/" + id)
            .toPromise()
            .then(this.onSuccess);
    }

    retrieveList() {
        return this.http.get(this.prefixUrl + "/")
            .toPromise()
            .then(this.onSuccess);
    }

    update(id:string,data:any) {
        return this.http.put(this.prefixUrl + '/' + id,{data:data})
            .toPromise()
            .then(this.onSuccess);
    }

    delete(id:string) {
        return this.http.delete(this.prefixUrl + '/' + id)
            .toPromise()
            .then(this.onSuccess);
    }
}