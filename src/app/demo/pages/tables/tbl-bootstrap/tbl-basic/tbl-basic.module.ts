import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBasicRoutingModule } from './tbl-basic-routing.module';
import { TblBasicComponent } from './tbl-basic.component';
import {SharedModule} from '../../../../../theme/shared/shared.module';
import { CarService } from '../../services/car.service';
import { AppPrimeNgModule } from '../../../../../app.primeng.module';
import { CustomerService } from '../../services/customer.service';

@NgModule({
  declarations: [TblBasicComponent],
  imports: [
    CommonModule,
    TblBasicRoutingModule,
    SharedModule,
    AppPrimeNgModule,
  ],
  providers:[
    CarService,
    CustomerService
  ],
})
export class TblBasicModule { }
