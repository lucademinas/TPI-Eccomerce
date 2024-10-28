import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const SalesChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
    datasets: [
      {
        label: 'Ventas',
        data: [120, 90, 130, 100, 150, 250],
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

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'line',
      data,
      options,
    });

    // Limpia el gráfico cuando el componente se desmonte
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="card p-4 my-4">
      <h5>Gráfico de Ventas</h5>
      <div className="mb-3">
        {['SEMANAL', 'MENSUAL', 'ANUAL'].map((label, index) => (
          <button key={index} className="btn btn-outline-primary mx-1">
            {label}
          </button>
        ))}
      </div>
      <canvas ref={chartRef} id="salesChart" />
    </div>
  );
};

export default SalesChart;