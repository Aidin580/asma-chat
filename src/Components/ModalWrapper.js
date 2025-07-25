import '../Components/Component-style/ModalWrapper.css';
import { useEffect, useState } from 'react';

export default function ModalWrapper({ children, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300);
    }
  };

  return (
    <div
      className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`modal-content ${visible ? 'show' : 'unshow'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {typeof children === 'function' ? children({ handleClose }) : children}
      </div>
    </div>
  );
}