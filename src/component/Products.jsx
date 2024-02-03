import React from 'react';
import { UserAuth } from '../../config/AuthContext';

const Products = () => {
  const { products } = UserAuth();

  return (
    <div className="flex flex-wrap bg-white">
      {products.map((item, index) => (
        <div
          key={index}
          className={`p-4 py-10 text-center flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
          style={{backgroundColor:`${item.bg}`, color:`${item.color}`}}
        >
          <img src={item.img} alt="Dr Pepper" className="max-w-32 h-auto mb-6" />
          <h3 className="text-xl font-extrabold font-sans">{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
