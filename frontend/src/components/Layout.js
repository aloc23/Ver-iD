import React from "react";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-root">
      <header className="layout-header">
        <h1 className="layout-title">Ver-iD</h1>
      </header>
      <main className="layout-main">
        {children}
      </main>
      <footer className="layout-footer">
        <span>&copy; 2025 Ver-iD</span>
      </footer>
    </div>
  );
}
