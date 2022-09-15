import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CustomerAddComponent } from './customer-add/customer-add.component';

import { CustomerComponent } from './customer/customer.component';

import { CustomerEditComponent } from './customer-edit/customer-edit.component';

import { CustomerListComponent } from './customer-list/customer-list.component';

import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { customerReducer } from './state/customer.reducer';



const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];



@NgModule({

  declarations: [

    CustomerAddComponent,

    CustomerComponent,

    CustomerEditComponent,

    CustomerListComponent,

  ],

  imports: [

    CommonModule,

    RouterModule.forChild(customerRoutes),

    StoreModule.forFeature('customer', customerReducer),

  ],

})

export class CustomersModule { }