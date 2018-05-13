var fieldStateDefault = { value: "Olá" }

//exportar as pure functions 
export default (state = fieldStateDefault, action) => {
    switch (action.type) {
        case 'CHANGED_VALUE':
            //sempre retorna um novo objeto e nunca altera o estado
            return { value: action.payload }
        default:
            return state
    }
}