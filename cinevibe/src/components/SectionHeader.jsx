import React from 'react';
import './SectionHeader.css';

export default function SectionHeader({ title, subtitle, accent }) {
  return (
    <div className="section-header">
      {accent && <span className="section-accent">{accent}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  );
}
