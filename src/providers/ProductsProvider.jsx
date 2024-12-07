/* eslint-disable react/prop-types */
import { ProductContext } from "../context/context";
import { useProducts } from "../hooks";


const ProductsProvider = ({children}) => {
    const { products, loading, error} = useProducts();
    return (
        <ProductContext.Provider value={{products, loading, error} }>
            { children }
        </ProductContext.Provider>
    );
};

export default ProductsProvider;