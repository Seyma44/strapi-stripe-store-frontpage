import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                {data?.image?.data && (
                    <img
                        src={process.env.REACT_APP_STRAPI_APP_DEV_URL + data.image.data[0].url}
                        alt=""
                    />
                )}
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8378;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;
