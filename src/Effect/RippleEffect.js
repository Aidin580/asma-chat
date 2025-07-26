import { useRef } from 'react';
import './RippleEffect.css';

export default function RippleEffect({ children, onClick, className = '', ...rest }) {
  const ref = useRef();

  const handleClick = (e) => {
    const container = ref.current;
    if (!container) return;

    const { left, top } = container.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - left}px`;
    ripple.style.top = `${e.clientY - top}px`;

    container.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
    onClick?.(e);
  };

  return (
    <div
      ref={ref}
      className={`ripple-effect-container ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </div>
  );
}
