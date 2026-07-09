import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { _id, name, imageUrl, rate, type } = product;
    return (
      <div className="four wide column" key={_id}>
        <Link to={`/product/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta rate">* {rate}</div>
                <div className="meta">{type}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};
const ProductComponent2 = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { _id, name, imageUrl, rate, type } = product;
    return (
      <div className="four wide column" key={_id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta rate">* {rate}</div>
                <div className="meta">{type}</div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export {ProductComponent,ProductComponent2};
