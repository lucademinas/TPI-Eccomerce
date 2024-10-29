import React from 'react';

const RecentPurchases = () => (
  <div className="card p-4 my-4">
    <h5>Compras Recientes</h5>
    <table className="table">
      <thead>
        <tr>
          <th>Producto</th>
          <th>ID Compra</th>
          <th>Fecha</th>
          <th>Comprador</th>
          <th>Estado</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {[
          { product: 'Lorem Ipsum', id: '#52458', date: '5 Sep 2024', buyer: 'Juan Luis', status: 'Enviado', price: '$200.00' },
          { product: 'Lorem Ipsum', id: '#52457', date: '7 Sep 2024', buyer: 'Ramiro', status: 'Cancelado', price: '$300.00' },
          { product: 'Lorem Ipsum', id: '#52456', date: '10 Sep 2024', buyer: 'Valentina', status: 'Enviado', price: '$250.00' },
          { product: 'Lorem Ipsum', id: '#52455', date: '24 Ago 2024', buyer: 'Lucas', status: 'Enviado', price: '$180.00' },
          { product: 'Lorem Ipsum', id: '#52454', date: '24 Ago 2024', buyer: 'Roberto', status: 'Enviado', price: '$300.00' },
          { product: 'Lorem Ipsum', id: '#52453', date: '24 Ago 2024', buyer: 'Maria', status: 'Enviado', price: '$220.00' },
        ].map((purchase, index) => (
          <tr key={index}>
            <td>{purchase.product}</td>
            <td>{purchase.id}</td>
            <td>{purchase.date}</td>
            <td>{purchase.buyer}</td>
            <td>{purchase.status}</td>
            <td>{purchase.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="pagination d-flex justify-content-center">
      {['1', '2', '3', '4', '...', '10', 'Siguiente'].map((label, index) => (
        <button key={index} className="btn btn-outline-secondary mx-1">{label}</button>
      ))}
    </div>
  </div>
);

export default RecentPurchases;