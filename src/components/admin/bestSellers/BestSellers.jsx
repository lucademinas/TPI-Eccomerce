import React from 'react';

const BestSellers = () => (
  <div className="card p-4 my-4">
    <h5>Best Sellers</h5>
    {[
      { name: 'Lorem Ipsum', price: '$129.50', orders: 150 },
      { name: 'Lorem Ipsum', price: '$89.90', orders: 95 },
      { name: 'Lorem Ipsum', price: '$110.50', orders: 99 },
    ].map((item, index) => (
      <div key={index} className="d-flex justify-content-between border-bottom py-2">
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.orders} ventas</span>
      </div>
    ))}
  </div>
);

export default BestSellers;