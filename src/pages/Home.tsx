import {
    tshirts,
    sweaters,
    lowers,
   
    hoodies,
  } from "../data/products";
  
  import CategorySection from "../components/ProductSection/CategorySection";
  import ProductSection from "../components/ProductSection/ProductSection";
import Hero from "./Hero";
  
  function Home() {
    return (
        
        <div className="bg-[#f7f7f5]">
      <Hero />
  <CategorySection />

        <ProductSection
          title="T-Shirts"
          products={tshirts}
        />
  
        <ProductSection
          title="Sweaters"
          products={sweaters}
        />
  
        <ProductSection
          title="Lowers"
          products={lowers}
        />
  
      
  
        <ProductSection
          title="Hoodies"
          products={hoodies}
        />
  
      </div>
    );
  }
  
  export default Home;