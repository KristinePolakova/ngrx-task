import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as CustomerPageActions from '../state/customer.actions';

@Component({
  selector: "app-customer-list",
  templateUrl: "./customer-list.component.html",
  styleUrls: ["./customer-list.component.css"]
})
export class CustomerListComponent implements OnInit {
  customers: any;

  constructor(private store: Store) { }

  ngOnInit() {
    // this.store.dispatch({ type: "LOAD_CUSTOMERS" });
    // this.store.subscribe(state => (this.customers = state.customers.customers));

    this.store.dispatch(CustomerPageActions.loadCustomers());
  }
}