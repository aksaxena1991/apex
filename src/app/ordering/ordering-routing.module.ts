import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeawayComponent } from './takeaway/takeaway.component';
const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'takeaway',
        component: TakeawayComponent,
        data: {
          title: 'Takeaway Orders'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderingRoutingModule { }
