import { useState } from 'react';
import './RippleEffect.css';

export default function RippleEffect({ children, onClick, className = '', ...rest }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <div className={`ripple-effect-container ${className}`} onClick={createRipple} {...rest}>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}
      {children}
    </div>
  );
}
