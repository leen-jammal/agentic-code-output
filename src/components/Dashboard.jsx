import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="dashboard-content">
        <section className="dashboard-section">
          <h2>Overview</h2>
          <p>Welcome to the admin dashboard. Here you can manage your data and settings.</p>
        </section>
        <section className="dashboard-section">
          <h2>Analytics</h2>
          <p>Data analytics will be displayed here.</p>
        </section>
        <section className="dashboard-section">
          <h2>Settings</h2>
          <p>Configure your settings here.</p>
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Admin Dashboard</p>
      </footer>
    </div>
  );
}

export default Dashboard;