import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { API_BASE_URL } from '../../../api';

const SalesChart = () => {
  const [salesData, setSalesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('MENSUAL');

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(
          `${API_BASE_URL}/Dashboard/sales?period=${selectedPeriod}`, 
          {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setSalesData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching sales data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSalesData();
  }, [selectedPeriod])

  const chartData = {
    labels: salesData?.map(item => item.month) || [],
    datasets: [
      {
        label: 'Ventas',
        data: salesData?.map(item => item.sales) || [],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (loading) return <div>Cargando gráfico de ventas...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card p-4 my-4">
      <h5>Gráfico de Ventas</h5>
      <div className="mb-3">
        {['SEMANAL', 'MENSUAL', 'ANUAL'].map((label) => (
          <button 
            key={label} 
            className={`btn ${selectedPeriod === label ? 'btn-primary' : 'btn-outline-primary'} mx-1`}
            onClick={() => setSelectedPeriod(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;