import add from '../images/add.svg';
import pin from '../images/pin.svg';
import close from '../images/close.svg';
import dropdown from '../images/dropdown-icon.svg';


import member1 from '../images/members/member1.svg';
import member2 from '../images/members/member2.svg';
import member3 from '../images/members/member3.svg';
import member4 from '../images/members/member4.svg';
import member5 from '../images/members/member5.svg';
import member6 from '../images/members/member6.svg';
import member7 from '../images/members/member7.svg';


import { useState, useEffect } from 'react';
import '../Modal/Modal-styles/AddNewSec.css';

export default function AddNewSec({ onClose }) {
  const [visible, setVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showLayer, setShowLayer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('برنامه نویسی وب');
  const options = ['برنامه نویسی وب', 'برنامه نویسی بک اند', 'طراحی گرافیک', 'بازی سازی', 'هک و امنیت'];
  const members = [member1, member2, member3, member4, member5, member6, member7];
  const fixedText = "توضیحات: ";
  const [text, setText] = useState(fixedText)

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (!newValue.startsWith(fixedText)) return;

    setText(newValue);
  }

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

  useEffect(() => {
        const handleClick = function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        };

        const buttons = document.querySelectorAll(".btn4");
        buttons.forEach(btn => {
            btn.addEventListener("click", handleClick);
        });

        return () => {
            buttons.forEach(btn => {
                btn.removeEventListener("click", handleClick);
            });
        };
  }, []);
  useEffect(() => {
      const handleClick = function (e) {
          const ripple = document.createElement("span");
          ripple.classList.add("ripple");
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          ripple.style.left = `${x}px`;
          ripple.style.top = `${y}px`;

          this.appendChild(ripple);

          setTimeout(() => {
              ripple.remove();
          }, 600);
      };

      const buttons = document.querySelectorAll(".btn5");
      buttons.forEach(btn => {
          btn.addEventListener("click", handleClick);
      });

      return () => {
          buttons.forEach(btn => {
              btn.removeEventListener("click", handleClick);
          });
      };
  }, []);

  return (
    <div className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
      <div className={`modal-content ${visible ? 'scale-in' : 'scale-out'}`} onClick={(e) => e.stopPropagation()}>

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
                    {options.map((option, index) => (
                      <li key={index} onClick={() => handleSelect(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>

                  <label htmlFor="dropdown-btn" className="dr-btn-lbl">
                    <img className="dropdown" src={dropdown} alt="dropdown-icon" />
                  </label>
                </div>

                <div className="members">
                  <button className="btn4" title="افزودن فرد جدید">افزودن فرد جدید</button>
                  <div className="members-preview" dir='rtl'>
                    <div className="p-container">
                      <p>اعضای پیش فرض</p>
                    </div>
                    <div className="members-images">
                      {members.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`member-${index}`}
                          className="member-img"
                          style={{
                            left: `${index * 13}px`,
                            zIndex: index,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="description">
                  <textarea
                    spellCheck="false"
                    value={text}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
                <div className="submit-btn">
                  <button className="btn5">افزودن بخش جدید<img className="add2" src={add} alt="add a new section" /></button>
                </div>
          </form>
        </div>

      </div>
    </div>
  );
}
