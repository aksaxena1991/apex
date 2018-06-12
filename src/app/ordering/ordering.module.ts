import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingRoutingModule } from './ordering-routing.module';

import { TakeawayComponent } from './takeaway/takeaway.component';
import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        OrderingRoutingModule,
      FormsModule
    ],
    declarations: [
        TakeawayComponent
    ]
})
export class OrderingModule { }
