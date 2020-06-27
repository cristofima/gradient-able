import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable()
export class CustomerService {
    private baseUrl = 'https://www.primefaces.org/primeng/showcase';

    constructor(private http: HttpClient) { }

    getCustomersSmall() {
        return this.http.get<any>(this.baseUrl+'/assets/showcase/data/customers-small.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersMedium() {
        return this.http.get<any>(this.baseUrl+'/assets/showcase/data/customers-medium.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersLarge() {
        return this.http.get<any>(this.baseUrl+'/assets/showcase/data/customers-large.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

    getCustomersXLarge() {
        return this.http.get<any>(this.baseUrl+'/assets/showcase/data/customers-xlarge.json')
            .toPromise()
            .then(res => <Customer[]>res.data)
            .then(data => { return data; });
    }

}