const intialState = [];
export const MovieReducer = (state=intialState, action)=> {
    switch (action.type) {
        case "GET_MOVIES":
            return action.payload
        case "Filter_MOVIES":
            return state.filter(m=>m.id!==action.payload)
        case "ADD_MOVIE":
            return [state,action.payload]
        default:
            return state;
    }
}