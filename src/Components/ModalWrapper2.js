import '../Components/Component-style/ModalWrapper2.css';
import { useEffect, useState } from 'react';

export default function ModalWrapper2({ children, onClose }) {
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
  if (e.target.classList.contains('modal-overlay2')) {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  }};

  return (
    <div className={`modal-overlay2 ${visible ? 'fade-in2' : 'fade-out2'}`} onClick={handleOverlayClick}>
      <div className={`modal-content2 ${visible ? 'show2' : ''}`} onClick={(e) => e.stopPropagation()}>
        {typeof children === 'function' ? children({ handleClose }) : children}
      </div>
    </div>
  );
}