import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../../services/car.service';
import { CustomerService } from '../../services/customer.service';
import { Customer, Representative } from '../../models/customer.model';
import { Table } from 'primeng';

@Component({
  selector: 'app-tbl-basic',
  templateUrl: './tbl-basic.component.html',
  styleUrls: ['./tbl-basic.component.scss']
})
export class TblBasicComponent implements OnInit {

  // Basic table
  cars: Car[];

  // Advanced table
  customers: Customer[];
  selectedCustomers: Customer[];
  representatives: Representative[];
  statuses: any[];
  loading: boolean = true;
  
  @ViewChild('dt') table: Table;

  constructor(private carService: CarService, private customerService: CustomerService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.loadAdvancedTable();
  }

  private loadAdvancedTable(){
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
    });

    this.representatives = [
        {name: "Amy Elsner", image: 'amyelsner.png'},
        {name: "Anna Fali", image: 'annafali.png'},
        {name: "Asiya Javayant", image: 'asiyajavayant.png'},
        {name: "Bernardo Dominic", image: 'bernardodominic.png'},
        {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
        {name: "Ioni Bowcher", image: 'ionibowcher.png'},
        {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
        {name: "Onyama Limba", image: 'onyamalimba.png'},
        {name: "Stephen Shaw", image: 'stephenshaw.png'},
        {name: "XuXue Feng", image: 'xuxuefeng.png'}
    ];

    this.statuses = [
        {label: 'Unqualified', value: 'unqualified'},
        {label: 'Qualified', value: 'qualified'},
        {label: 'New', value: 'new'},
        {label: 'Negotiation', value: 'negotiation'},
        {label: 'Renewal', value: 'renewal'},
        {label: 'Proposal', value: 'proposal'}
    ];
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
        const activity = parseInt(value);

        if (!isNaN(activity)) {
            this.table.filter(activity, 'activity', 'gte');
        }
    }
  }

  onDateSelect(value) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
  }

  onRepresentativeChange(event) {
      debugger;
      this.table.filter(event.value, 'representative', 'in')
  }

}
