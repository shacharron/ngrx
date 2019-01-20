export function reducer(state, action) {
    switch (action.type) {

        case "REMMBER_USER_NAME":
            console.log('state ' + JSON.stringify(state));
            console.log('action ' + action.payload);
            return {
                ...state,
                remmberUserName: action.payload
            };
        default:
            return state;
    }

}