import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.css";
import Products from "../Products/Products";
import { FetchDataFromApi } from "../../Utils/Api";
import { useEffect, useContext } from "react";
import { Context } from "../../Utils/Context";




const Home = () => {

  const {categories, setCategories , products , setProducts} = useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  },[]);


  const getCategories = () => {
    FetchDataFromApi ("/api/categories?populate=*" ).then((res) => {
      console.log(res) ;
      setCategories(res)
    });
      
  };

  const getProducts = () => {
    FetchDataFromApi ("/api/products?populate=*" ).then((res) => {
      console.log(res);
      setProducts(res);
    });
      
  };
        

        


    

  return (
    <>
      <Banner />
      <div className="home-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products = {products} headingText="POPULAR PRODUCTS" />
        </div>
      </div>
    </>
  );
};

export default Home;
