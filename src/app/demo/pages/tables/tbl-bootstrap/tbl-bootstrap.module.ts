import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TblBootstrapRoutingModule } from './tbl-bootstrap-routing.module';
import {SharedModule} from '../../../../theme/shared/shared.module';
import { AppPrimeNgModule } from 'src/app/app.primeng.module';

@NgModule({
  imports: [
    CommonModule,
    TblBootstrapRoutingModule,
    SharedModule,
    AppPrimeNgModule
  ],
  declarations: []
})
export class TblBootstrapModule { }
