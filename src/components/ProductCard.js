import React from "react";
import { arrayBufferToBase64 } from "../utils/imageConvert";
const ProductCard = ({ item }) => {
  return (
    <div className="card col-md-3 m-1">
      {item.image && (
        <img
          className="card-img-top"
          src={`data:${item.image.contentType};base64,${arrayBufferToBase64(
            item.image.data.data
          )}`}
          alt={item._id}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.product_name}</h5>
        <p className="card-text">السعر : {item.price}</p>
        <a href={`/product/${item._id}`} className="btn btn-primary">
          اذهب الى المنتج
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
