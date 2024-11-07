import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../../api';

const RecentPurchases = () => {
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [loading, setLoading] = useState (true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentPurchases = async () => {
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
          throw new Error("Error fetching recent purchases");
        }

        const data = await response.json();
        setRecentPurchases(data.recentOrders || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recent purchases:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecentPurchases();
  }, []);

  if (loading) return <div>Cargando compras recientes...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card p-4 my-4">
      <h5>Compras Recientes</h5>
      {recentPurchases.map((purchase, index) => (
        <div 
          key={index} 
          className="d-flex justify-content-between border-bottom py-2"
        >
          <span>{purchase.clientName}</span>
          <span>{new Date(purchase.orderDate).toLocaleDateString()}</span>
          <span>${purchase.total.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentPurchases;