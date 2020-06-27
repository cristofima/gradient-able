import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormElementsRoutingModule } from './form-elements-routing.module';
import {SharedModule} from '../../../theme/shared/shared.module';
import { AppPrimeNgModule } from 'src/app/app.primeng.module';

@NgModule({
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    SharedModule,
    AppPrimeNgModule
  ],
  declarations: []
})
export class FormElementsModule { }
