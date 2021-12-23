import { createContext, useContext, useEffect, useReducer } from "react";
import { getCookie, setCookie } from "../hooks/useCookie";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_ITEM':
            let addItem = [...state, action.item]
            setCookie('cart', addItem)
            return getCookie('cart')
        case 'BUY_NOW':
            let buyNow = [...state, action.item]
            setCookie('cart', buyNow)
            return getCookie('cart')
        case 'REMOVE_ITEM':
            let removeItem = [...state];
            removeItem.splice(action.index, 1)
            setCookie('cart', removeItem)
            return getCookie('cart')
        default:
            throw new Error(`unknown action ${action.type}`)
    }
}

export const CartProvider = ({ children }) => {

    const initialState = getCookie('cart')

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);