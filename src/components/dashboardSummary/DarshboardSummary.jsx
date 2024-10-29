import React from 'react';

const DashboardSummary = () => (
  <div className="row text-center my-4">
    {[
      { title: 'Total Pedidos', amount: '$25,500', change: '22.8%' },
      { title: 'Pedidos Activos', amount: '$12,500', change: '24.2%' },
      { title: 'Pedidos Completados', amount: '$10,000', change: '12.4%' },
      { title: 'Pedidos Devueltos', amount: '$3,000', change: '5.3%' },
    ].map((item, index) => (
      <div key={index} className="col-md-3">
        <div className="card p-3">
          <h5>{item.title}</h5>
          <p className="font-weight-bold">{item.amount}</p>
          <small className="text-muted">Comparado con 2023: {item.change}</small>
        </div>
      </div>
    ))}
  </div>
);

export default DashboardSummary;