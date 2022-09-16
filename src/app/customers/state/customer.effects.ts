import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, exhaustMap, concatMap } from "rxjs/operators";
import { CustomerService } from "../customer.service";
import * as customerActions from "../state/customer.actions";
import { CustomerActionTypes } from "../state/customer.actions";

@Injectable()
export class CustomerEffect {

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(CustomerActionTypes.LOAD_CUSTOMERS),
        exhaustMap(() => this.customerService.getCustomers()
            .pipe(
                map(customers => ({
                    type: CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS,
                    payload: customers
                })),
                catchError(() => EMPTY)
            ))
    ));


    deleteCustomer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CustomerActionTypes.DELETE_CUSTOMER),
            map((action: customerActions.DeleteCustomer) => action.payload),
            mergeMap((id: number) =>
                this.customerService.deleteCustomer(id).pipe(
                    map(() => new customerActions.DeleteCustomerSuccess(id)),
                    catchError(() => EMPTY)
                ))
        )
    );
    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) { }

}