export const myReducer = (state, action) => {
    switch (action.type) {
        case('count'):
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state;
    }

}
