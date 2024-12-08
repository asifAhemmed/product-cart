import { useState, useEffect } from "react";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState({
    isLoading: false,
    message: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(loading => ({
          ...loading,
          isLoading: true,
          message: "Fetching Products...",
        }));
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(
            `Fetching data failed: ${response.status}: ${response.statusText}`
          );
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(loading => ({
            ...loading,
            isLoading: false,
          }));
      }
    };

    fetchProducts();
  }, []);


  return { products,setProducts, loading, error};
};

export default useProducts;
