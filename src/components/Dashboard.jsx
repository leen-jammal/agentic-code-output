import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Section 1</h2>
          <p>Content for section 1.</p>
        </section>
        <section className="dashboard-section">
          <h2>Section 2</h2>
          <p>Content for section 2.</p>
        </section>
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 Dashboard</p>
      </footer>
    </div>
  );
}

export default Dashboard;