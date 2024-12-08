/* eslint-disable react/prop-types */

import { FilteredContext } from "../context/context";
import { useFilteredData } from "../hooks";

const FilterProvider = ({children}) => {
    const {filteredData,setFilteredData, selectedCategory, setSelectedCategory} = useFilteredData();
    return (
        <FilteredContext.Provider value={{filteredData, selectedCategory, setSelectedCategory,setFilteredData}}>
            {children}
        </FilteredContext.Provider>
    );
};

export default FilterProvider;