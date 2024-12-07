import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import ProductBoard from "./components/productBoard/ProductBoard";
import ProductsProvider from "./providers/ProductsProvider";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductsProvider>
        <ProductBoard />
      </ProductsProvider>
      <Footer />
    </>
  );
};

export default App;
