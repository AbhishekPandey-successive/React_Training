import React,{createContext,useState} from 'react';
import ShoppingCart from './ShoppingCart';

const ShoppingCartContext= createContext();

const ShoppingCartProvider = ({children}) => {
 const [cart, setCart]=useState([]);


return (
    <ShoppingCartContext.Provider value={[cart,setCart]}>
        {children}
    </ShoppingCartContext.Provider>
)


}

export default ShoppingCartProvider
export {ShoppingCartContext}