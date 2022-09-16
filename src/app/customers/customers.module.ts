import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule, Actions } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './state/customer.reducer';
import { CustomerEffect } from './state/customer.effects';

const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({

  declarations: [
    CustomerComponent,
    CustomerListComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature('customer', customerReducer),
    EffectsModule.forFeature([CustomerEffect])
  ],

})

export class CustomersModule { }