import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CustomerService } from "../customer.service";


@Injectable()
export class CustomerEffect {

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