import { useState } from 'react';
import { useEffect } from 'react';

const useFilteredData = () => {

    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        const fetchFilteredData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
                if (!response.ok) {
                    throw new Error(`Fetching data failed: ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setFilteredData(data);
            } catch (err) {
                console.log(err);
            }
           
        }
        fetchFilteredData();
    },[selectedCategory]);


    return {filteredData,setFilteredData, selectedCategory, setSelectedCategory};

}

export default useFilteredData;