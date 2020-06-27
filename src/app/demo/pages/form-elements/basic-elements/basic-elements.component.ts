import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  cities: SelectItem[];
  selectedCity: SelectItem;

  constructor() { }

  ngOnInit() {
    this.cities = [
      {label:'Select City', value:null},
      {label: 'New York', value: 'NY'},
      {label: 'Rome', value: 'RM'},
      {label: 'London', value: 'LDN'},
      {label: 'Istanbul', value: 'IST'},
      {label: 'Paris', value: 'PRS'}
  ];
  }

}
