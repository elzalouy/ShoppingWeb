import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsActions } from "../store/products";
const Product = (props) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.Products);
  useEffect(() => {
    dispatch(ProductsActions.onSelectProduct({ id: props.match.params.id }));
  }, [dispatch]);
  return (
    <div className="row">
      <div className="card col-md-10 m-1">
        <img className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Product name</h5>
          <p className="card-text">السعر : 1000</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
