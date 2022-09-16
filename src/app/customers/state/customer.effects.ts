import { provideCloudinaryLoader } from "@angular/common";
import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { EMPTY, Observable, of } from "rxjs";
import { map, mergeMap, catchError, exhaustMap, concatMap } from "rxjs/operators";
import { CustomerService } from "../customer.service";
import * as customerActions from "../state/customer.actions";
import { Customer } from "../customer.model";

@Injectable()
export class CustomerEffect {

    // @Effect()
    // loadCustomers$: Observable<Action> = this.actions$.pipe(
    //     ofType<customerActions.LoadCustomers>(
    //         customerActions.CustomerActionTypes.LOAD_CUSTOMERS
    //     ),
    //     mergeMap((actions: customerActions.LoadCustomers) =>
    //         this.customerService.getCustomers().pipe(
    //             map(
    //                 (customers: Customer[]) =>
    //                     new customerActions.LoadCustomersSuccess(customers)
    //             ),
    //             catchError(err => of(new customerActions.LoadCustomersFail(err)))
    //         )
    //     )
    // );

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType('[Customer] Load Customers'),
        exhaustMap(() => this.customerService.getCustomers()
            .pipe(
                map(customers => ({
                    type: '[Customer] Load Customers Success',
                    payload: customers
                })),
                catchError(() => EMPTY)
            ))
    ));

    @Effect()
    deleteCustomer$: Observable<Action> = this.actions$.pipe(
        ofType<customerActions.DeleteCustomer>(
            customerActions.CustomerActionTypes.DELETE_CUSTOMER
        ),
        map((action: customerActions.DeleteCustomer) => action.payload),
        mergeMap((id: number) =>
            this.customerService.deleteCustomer(id).pipe(
                map(() => new customerActions.DeleteCustomerSuccess(id)),
                catchError(err => of(new customerActions.DeleteCustomerFail(err)))
            )
        )
    );
    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) { }

}