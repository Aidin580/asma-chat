import '../Components/Component-style/ModalWrapper.css';
import { useEffect, useState } from 'react';

export default function ModalWrapper({ children, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300);
  };

  return (
    <div
      className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={handleClose}
    >
        {children}
    </div>
  );
}
