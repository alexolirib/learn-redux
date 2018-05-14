export const inc=()=>({
    type: "COUNT_INC"
})

export const exp = () =>({
    type: "COUNT_EXP"
})

export  const setup = (e) =>({
    type: "COUNT_SET",
    
    payload: parseInt(e.target.value)
})

export const reset = () =>({
    type: "COUNT_RESET"
})