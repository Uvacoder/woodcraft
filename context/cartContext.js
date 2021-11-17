import { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            let cartUpdate = [...state, action.item]
            return cartUpdate
        case 'BUY_NOW':
            cartUpdate = [...state, action.item]
            return [...state, action.item]
        case 'REMOVE_ITEM':
            cartUpdate = [...state];
            cartUpdate.splice(action.index, 1)
            return cartUpdate
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);