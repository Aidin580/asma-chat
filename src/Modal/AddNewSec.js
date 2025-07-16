import add from '../images/add.svg';
import pin from '../images/pin.svg';
import close from '../images/close.svg';
import dropdown from '../images/dropdown-icon.svg';

import { useState, useEffect } from 'react';
import '../Modal/Modal-styles/AddNewSec.css';

const importMembers = require.context('../images/members', false, /\.svg$/);
const members = importMembers
  .keys()
  .sort()
  .map(importMembers);

export default function AddNewSec({ onClose }) {
  const [visible, setVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showLayer, setShowLayer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('برنامه نویسی وب');
  const [text, setText] = useState('توضیحات: ');

  const options = ['برنامه نویسی وب', 'برنامه نویسی بک اند', 'طراحی گرافیک', 'بازی سازی', 'هک و امنیت'];
  const marginLeft = members.length >= 8 ? '5px' : '15px';

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.startsWith('توضیحات: ')) setText(val);
  };

  const handleSelect = (option) => {
    setValue(option);
    setShowOptions(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  useEffect(() => setVisible(true), []);

  useEffect(() => {
    if (!imagePreview) return;
    setShowLayer(false);
    const timer = setTimeout(() => setShowLayer(true), 50);
    return () => clearTimeout(timer);
  }, [imagePreview]);

  const getRippleHandler = () => function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  useEffect(() => {
    ['.btn4', '.btn5'].forEach(cls => {
      const buttons = document.querySelectorAll(cls);
      const handler = getRippleHandler();
      buttons.forEach(btn => btn.addEventListener('click', handler));
      return () => buttons.forEach(btn => btn.removeEventListener('click', handler));
    });
  }, []);

  return (
      <div className={`modal-container ${visible ? 'show' : 'unshow'}`} onClick={e => e.stopPropagation()}>
        <div className="close-container">
          <button className="close-icon" onClick={handleClose}><img src={close} alt="close" /></button>
        </div>

        <div className="txt">
          <h4><img src={add} alt="add a new section" />افزودن بخش جدید&nbsp;</h4>
          <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
        </div>

        <div className="inputs">
          <form>
            <div className="first-input">
              <input type="text" placeholder="نام بخش جدید را وارد کنید" spellCheck={false} />
            </div>

            <div className="rest-of-form">
              <div className="img-picker">
                <label className="the-picker" dir="rtl">
                  {['افزودن عکس', 'فرمت توصیه شده: SVG', 'رنگ توصیه شده: سفید'].map((t, i) => (
                    <p key={i} className={`picker-text ${imagePreview ? 'hide' : 'show'}`}>{t}</p>
                  ))}
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
                <div className="dropdown-container">
                  <input
                    type="text"
                    id="dropdown-btn"
                    value={value}
                    onClick={() => setShowOptions(!showOptions)}
                    readOnly
                    style={{ width: '100%', padding: '8px', borderRadius: '5px' }}
                  />

                  <ul className={`dropdown-options ${showOptions ? 'show' : ''}`}>
                    {options.map((option, i) => (
                      <li key={i} onClick={() => handleSelect(option)}>{option}</li>
                    ))}
                  </ul>

                  <label htmlFor="dropdown-btn" className="dr-btn-lbl">
                    <div className="dropdown-cont">
                      <img className={`dropdown ${showOptions ? 'rotate' : ''}`} src={dropdown} alt="dropdown-icon" />
                    </div>
                  </label>
                </div>

                <div className="members">
                  <button className="btn4" title="افزودن فرد جدید">افزودن فرد جدید</button>

                  <div className={`members-preview ${members.length >= 8 ? 'tight-margin' : ''}`} style={{ paddingRight: marginLeft }} dir='rtl'>
                    <div className="p-container"><p>اعضای پیش فرض</p></div>
                    <div className="members-images">
                      {members.slice(0, 8).map((src, i) => (
                        <img key={i} src={src} alt={`member-${i}`} className="member-img" style={{ left: `${i * 13}px`, zIndex: i }} />
                      ))}
                      {members.length > 8 && (
                        <div className="more-members" style={{ left: `${8 * 13}px`, zIndex: 8 }}>+{members.length - 8}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="description">
                  <textarea spellCheck="false" value={text} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="submit-btn">
              <button className="btn5">افزودن بخش جدید<img className="add2" src={add} alt="add a new section" /></button>
            </div>
          </form>
        </div>
      </div>
  );
}