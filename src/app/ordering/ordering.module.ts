import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderingRoutingModule } from './ordering-routing.module';

import { TakeawayComponent } from './takeaway/takeaway.component';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        OrderingRoutingModule,
        Ng2SmartTableModule,
      FormsModule
    ],
    declarations: [
        TakeawayComponent
    ]
})
export class OrderingModule { }
