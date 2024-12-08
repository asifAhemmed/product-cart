import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import ProductBoard from "./components/productBoard/ProductBoard";
import FilterProvider from "./providers/FilterProvider";
import ProductsProvider from "./providers/ProductsProvider";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsProvider>
        <FilterProvider>
          <ProductBoard />
        </FilterProvider>
      </ProductsProvider>
      <Footer />
    </>
  );
};

export default App;
