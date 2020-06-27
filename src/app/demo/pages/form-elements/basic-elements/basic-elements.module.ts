import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicElementsRoutingModule } from './basic-elements-routing.module';
import { BasicElementsComponent } from './basic-elements.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { AppPrimeNgModule } from '../../../../app.primeng.module';

@NgModule({
  imports: [
    CommonModule,
    BasicElementsRoutingModule,
    SharedModule,
    AppPrimeNgModule,
    NgbDropdownModule
  ],
  declarations: [BasicElementsComponent]
})
export class BasicElementsModule { }
