import React from 'react';


const Dashboard = ({ totalIncome = 0, totalExpenses = 0, balance = 0 }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your personal finance dashboard!</p>
      <div style={{ marginTop: '1rem', fontWeight: 'bold' }}>
        💰 Total Income: <span style={{ color: '#2ecc71' }}>₹{totalIncome}</span>
      </div>
      <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
        💸 Total Expenses: <span style={{ color: '#e74c3c' }}>₹{totalExpenses}</span>
      </div>
      <div style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
        📊 Balance: <span style={{ color: balance >= 0 ? '#2ecc71' : '#e74c3c' }}>₹{balance}</span>
      </div>
    </div>
  );
};

export default Dashboard;
