import { Action } from "@ngrx/store";

import { Customer } from "../customer.model";

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = "[Customer] Load Customers",
  LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customers Success",
  LOAD_CUSTOMERS_FAIL = "[Customer] Load Customers Fail"
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

<<<<<<< HEAD
  constructor(public payload: Customer[]) { }
=======
  constructor(public payload: Customer[]) {}
>>>>>>> e3a2b11dbbfb6e5799e9ec7bdd3b3c02b6de51b5
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

<<<<<<< HEAD
  constructor(public payload: string) { }
}

export type CustomerAction = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;
=======
  constructor(public payload: string) {}
}

export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;

import { createAction, props } from '@ngrx/store';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);
>>>>>>> e3a2b11dbbfb6e5799e9ec7bdd3b3c02b6de51b5
