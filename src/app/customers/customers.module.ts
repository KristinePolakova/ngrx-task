import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { customerReducer } from "./state/customer.reducer";
import { CustomerEffect } from "./state/customer.effects";
import { CustomerComponent } from "./customer/customer.component";
import { CustomerListComponent } from "./customer-list/customer-list.component";

const customerRoutes: Routes = [{
  path: "", component: CustomerComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature("customers", customerReducer),
    EffectsModule.forFeature([CustomerEffect])
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent
  ]
})
export class CustomersModule { }