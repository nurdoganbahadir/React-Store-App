import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({});

  const { id } = useParams(); //* dinamik routelardaki parametreyi yakalar. route ayarlaması yaparken ne isim verdiysek useParams ile onu yakalarız.


  const getDetailData = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailData();
  }, []);

  const { thumbnail, title, description, category, price, images} = state;
  return (
    <div className="mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 w-full ">
        <article className="mx-auto w-full block lg:flex mt-4 h-full 2xl:h-[70vh]  shadow-lg border rounded-md duration-300 hover:shadow-sm">
          <div className="grid grid-rows-4 gap-2 h-full w-full lg:w-7/12 p-4">
            <div className="w-full row-span-3">
              <img
                className="h-full w-full rounded-lg"
                src={thumbnail}
                alt={title}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 row-span-1">
              {images?.slice(0, 3).map((item, i) => (
                <div key={i}>
                  <img
                    className="h-[15vh] w-full rounded-lg"
                    src={item}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex flex-col justify-evenly p-4">
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">{title}</h3>
              <p className="text-gray-400 mt-1">{description}</p>
            </div>
            <div className="flex  mt-2 pt-3 ml-4 mr-2">
              <div className="">
                <span className="block text-gray-900">
                  Category : {category}{" "}
                </span>
                <span className="block  text-sm">Price : {price}$</span>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => navigate(-1)}
                className="border rounded-lg bg-labelColor text-white p-2"
              >
                Geri
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="border rounded-lg bg-main text-white p-2"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductDetail;
