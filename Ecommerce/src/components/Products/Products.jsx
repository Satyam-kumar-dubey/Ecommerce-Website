import "./Products.css";
import Product from "./Product/Product";

const Products = ({ products, innerpage, headingText }) => {
  return (
    <>
      <div className="products-container">
        {!innerpage && <div className="Products-heading">{headingText}</div>}
        <div className="Product-items">
          {products?.data?.map((item) => (
            <Product key={item.id} id={item.id} data={ item.attributes } />
          ))}

          {/* <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </div>
    </>
  );
};

export default Products;
