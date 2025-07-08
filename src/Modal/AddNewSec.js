import add from '../images/add.svg';
import pin from '../images/pin.svg';


import { useState, useEffect } from 'react';
import '../Modal/Modal-styles/AddNewSec.css';

export default function AddNewSec({ onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const fileInput = document.getElementById('fileInput');
    const placeholderText = document.getElementById('placeholderText');
    const previewImage = document.getElementById('previewImage');

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = function (event) {
        previewImage.src = event.target.result;
        previewImage.style.display = 'block';
        placeholderText.style.display = 'none';
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    if (fileInput) {
      fileInput.addEventListener('change', handleFileChange);
    }

    // پاک‌سازی برای جلوگیری از حافظه‌ی اضافی
    return () => {
      if (fileInput) {
        fileInput.removeEventListener('change', handleFileChange);
      }
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
      <div className={`modal-content ${visible ? 'scale-in' : 'scale-out'}`} onClick={(e) => e.stopPropagation()}>

        <div className="close-icon">
          <button onClick={handleClose}>بستن</button>
        </div>

        <div className="txt">
          <h4><img src={add} alt="add a new section" />افزودن بخش جدید&nbsp;</h4>
          <p>| مدیر لیدر گرامی,قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
        </div>

        <div className="inputs">
          <form>
            <div className="first-input">
              <input type="text" spellCheck={false} />
            </div>

            <div className="rest-of-form">
              <div className="img-picker" id="imageBox">
                <label className="the-picker" dir="rtl">
                  <p>افزودن عکس</p>
                  <p>فرمت توصیه شده: SVG</p>
                  <p>رنگ توصیه شده: سفید</p>
                  <img src={pin} alt='pin-image' width="3vw" />
                  <input type="file" accept="image/*" hidden />
                </label>
              </div>

              <div className="rest-of-form2">
                <input type="text" />
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
