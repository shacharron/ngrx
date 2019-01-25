import { Action } from "@ngrx/store";
import { Product } from "../product";
export enum ProductActionType {
    // this string will apear the the dev tools 
    ToggleProductCode = '[product] toggle product code',
    SetCurrentProduct = '[product] Setc Current Product',
    ClearCurrentProduct = '[product] Clear Current Product  ',
    initCurrentProduct = '[product] init Current Product',
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionType.ToggleProductCode;
    constructor(public payload: boolean) {
    }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionType.SetCurrentProduct;
    constructor(public payload: Product) {
    }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionType.ClearCurrentProduct;
 
}
export class InitCurrentProduct implements Action {
    readonly type = ProductActionType.initCurrentProduct;
 
}


export type ProductionAction = ToggleProductCode| SetCurrentProduct | ClearCurrentProduct | InitCurrentProduct;
