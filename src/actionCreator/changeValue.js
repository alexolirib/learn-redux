export var changeValue = (e) => (
    {
        type: "CHANGED_VALUE",
        payload : e.target.value // dado que vem na minha ação 
    }
)