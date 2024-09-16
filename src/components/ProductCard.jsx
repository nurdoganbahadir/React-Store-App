import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { title, category, thumbnail, price, id } = product;
  return (
    <div
      className="cursor-pointer"
      onClick={(id) => navigate(`${id}`, { state: product })}
    >
      <div className="w-full rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
        <img
          src={thumbnail}
          alt={title}
          title={title}
          className="h-[200px] w-full object-fit lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="flex-1">
          <h3 className="text-sm text-gray-700 line-clamp-1">{title}</h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-1">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;
