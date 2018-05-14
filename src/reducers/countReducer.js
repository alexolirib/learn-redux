const countStateDefault = { set: 1, number:  0}

export default (state = countStateDefault, action) => {
    switch(action.type){
        case"COUNT_INC":
            return {...state, number: state.number + state.set}
        case"COUNT_EXP":
            return {...state, number: state.number - state.set}
        case"COUNT_SET":
            if( isNaN(action.payload)){
                return {...state, set: 1}
            }
            return {...state, set: action.payload}
        case"COUNT_RESET":
            return {set: 1, number: 0}
        default:
            return state
    }
}