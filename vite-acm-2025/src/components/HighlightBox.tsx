import React from 'react';

const HighlightBox: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => {
  return (
    <div
      className={`highlight-box p-4 mb-4 rounded shadow ${className || ''}`}
      style={{
        background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ef 100%)',
        borderLeft: '5px solid #2c3e50',
        color: '#222',
        fontWeight: 500,
        fontSize: '1.1rem',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default HighlightBox;
