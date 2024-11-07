import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../api';

const DashboardSummary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardSummary = async () => {
      try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Dashboard/summary`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("Error fetching dashboard summary");
        }

        const data = await response.json();
        setSummary(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard summary:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDashboardSummary();
  }, []);

  if (loading) return <div>Cargando resumen...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!summary) return null;

  return (
    <div className="row text-center my-4">
      {[
        { 
          title: 'Total Pedidos', 
          amount: summary.totalOrders, 
          change: '+22.8%' 
        },
        { 
          title: 'Total Productos', 
          amount: summary.totalProducts, 
          change: '+24.2%' 
        },
        { 
          title: 'Total Clientes', 
          amount: summary.totalClients, 
          change: '+12.4%' 
        },
        { 
          title: 'Ingresos Totales', 
          amount: `$${summary.totalRevenue.toFixed(2)}`, 
          change: '+5.3%' 
        },
      ].map((item, index) => (
        <div key={index} className="col-md-3">
          <div className="card p-3">
            <h5>{item.title}</h5>
            <p className="font-weight-bold">{item.amount}</p>
            <small className="text-muted">
              Comparado con 2024: {item.change}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummary;