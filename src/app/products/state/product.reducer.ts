export function reducer(state, action) {
    switch (action.type) {

        case "TOGGLE_PRODUCT_CODE":
            console.log('state ' + JSON.stringify(state));
            console.log('action ' + action.payload);
            return {
                ...state,
                showProductCode: action.payload
            };
        default:
            return state;
    }

}