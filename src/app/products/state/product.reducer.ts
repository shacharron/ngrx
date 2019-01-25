import { Product } from "../product";
import * as fromRoot from '../../state/app.state'
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductionAction, ProductActionType } from "./product.action";
export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean,
    currentProduct: Product,
    products: Product[]

}

const getProductFeatureState = createFeatureSelector<ProductState>('products')

export const getShowProductCode =
    createSelector(getProductFeatureState, state => state.showProductCode);

export const getCurrentProduct =
    createSelector(getProductFeatureState, state => state.currentProduct);

export const getProducts =
    createSelector(getProductFeatureState, state => state.products);


const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
}

export function reducer(state = initialState, action: ProductionAction): ProductState {
    switch (action.type) {
        case ProductActionType.ToggleProductCode:
            //console.log('state ' + JSON.stringify(state));
            //console.log('action ' + action.payload);
            return {
                ...state,
                showProductCode: action.payload
            };

        case ProductActionType.SetCurrentProduct:
            return {
                ...state,
                currentProduct: { ...action.payload }
            };
        case ProductActionType.ClearCurrentProduct:
            return {
                ...state,
                currentProduct : null
            };
            case ProductActionType.initCurrentProduct:
            return {
                ...state,
                currentProduct : {
                    id:0,
                    productName : '',
                    productCode :'new',
                    description :'',
                    starRating :0
                }
            };
        default:
            return state;
    }

}