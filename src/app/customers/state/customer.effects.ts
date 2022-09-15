import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CustomerService } from "../customer.service";


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
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map(customers => ({
                    type: '[Customer] Load Customers Success',
                    payload: customers
                })),
                catchError(() => EMPTY)
            ))
    ))

    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) { }

}