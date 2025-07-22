import { useRef } from 'react';
import './RippleEffect.css';

export default function RippleEffect({ children, onClick, className = '', ...rest }) {
  const containerRef = useRef(null);

  const handleClick = (e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });

    if (onClick) onClick(e);
  };

  return (
    <div
      className={`ripple-effect-container ${className}`}
      onClick={handleClick}
      ref={containerRef}
      {...rest}
    >
      {children}
    </div>
  );
}
