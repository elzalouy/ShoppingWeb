import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../httpServices/products";
import { ProductsActions } from "../store/products";
const Products = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Products);
  useEffect(() => {
    const fetch = async () => {
      const result = await getProducts();
      dispatch(ProductsActions.onChangeProducts(result.data));
    };
    fetch();
  }, [dispatch]);
  return (
    <div className="container p-5 ">
      <div className="row">
        {products?.map((item) => (
          <ProductCard key={item._id} item={item} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Products;
