import add from '../images/add.svg';
import pin from '../images/pin.svg';

import { useState, useEffect } from 'react';
import '../Modal/Modal-styles/AddNewSec.css';

export default function AddNewSec({ onClose }) {
  const [visible, setVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showLayer, setShowLayer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('');
  const options = ['گزینه اول', 'گزینه دوم', 'گزینه سوم'];

  const handleSelect = (option) => {
    setValue(option);
    setShowOptions(false);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!imagePreview) return;
    setShowLayer(false);
    const timer = setTimeout(() => setShowLayer(true), 50);
    return () => clearTimeout(timer);
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
      <div className={`modal-content ${visible ? 'scale-in' : 'scale-out'}`} onClick={(e) => e.stopPropagation()}>

        <div className="close-icon">
          <button onClick={handleClose}>بستن</button>
        </div>

        <div className="txt">
          <h4><img src={add} alt="add a new section" />افزودن بخش جدید&nbsp;</h4>
          <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
        </div>

        <div className="inputs">
          <form>
            <div className="first-input">
              <input type="text" spellCheck={false} />
            </div>

            <div className="rest-of-form">
              <div className="img-picker">
                <label className="the-picker" dir="rtl">
                  <p className={`picker-text ${imagePreview ? 'hide' : 'show'}`}>افزودن عکس</p>
                  <p className={`picker-text ${imagePreview ? 'hide' : 'show'}`}>فرمت توصیه شده: SVG</p>
                  <p className={`picker-text ${imagePreview ? 'hide' : 'show'}`}>رنگ توصیه شده: سفید</p>
                  <img src={pin} className={`picker-text ${imagePreview ? 'hide' : 'show'}`} alt="pin" />
                  <input type="file" accept="image/*" onChange={handleImageChange} hidden />

                  {imagePreview && (
                    <div className={`preview-keeper ${showLayer ? 'show' : ''}`}>
                      <img src={imagePreview} alt="Preview" className={`img-preview ${showLayer ? 'show' : ''}`} />
                    </div>
                  )}
                </label>
              </div>

              <div className="rest-of-form2">
                 <div style={{ position: 'relative', width: '300px', direction: 'rtl' }}>
                  <input
                    type="text"
                    value={value}
                    onClick={() => setShowOptions(!showOptions)}
                    readOnly
                    style={{ width: '100%', padding: '8px', borderRadius: '5px' }}
                  />
                  {showOptions && (
                    <ul style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      left: 0,
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      marginTop: '5px',
                      zIndex: 1000,
                      listStyle: 'none',
                      padding: '5px 0',
                    }}>
                      {options.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelect(option)}
                          style={{
                            padding: '8px 12px',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = '#eee'}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
