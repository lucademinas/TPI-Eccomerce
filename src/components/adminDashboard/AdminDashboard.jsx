// src/AdminDashboard.js
import React from 'react';
import DashboardSummary from '../dashboardSummary/DarshboardSummary';
import SalesChart from '../salesChart/SalesChart';
import BestSellers from '../bestSellers/BestSellers';
import RecentPurchases from '../recentPurchases/RecentPurchases';

const AdminDashboard = () => {
  return (
    <div className="container my-4">
      <h1>Dashboard</h1>
      <p>Home {'>'} Dashboard</p>
      
      <DashboardSummary />
      <SalesChart />
      <BestSellers />
      <RecentPurchases />
    </div>
  );
};

export default AdminDashboard;