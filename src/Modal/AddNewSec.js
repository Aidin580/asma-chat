import { useState, useEffect } from 'react';
import add from '../images/add.svg';
import pin from '../images/pin.svg';
import close from '../images/close.svg';
import dropdown from '../images/dropdown-icon.svg';
import '../Modal/Modal-styles/AddNewSec.css';
import RippleEffect from '../Effect/RippleEffect';

export default function AddNewSec({ onClose, onOpenSuggestedMembers, onAddSection, selectedUsers }) {
  const [visible, setVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showLayer, setShowLayer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState('برنامه نویسی وب');
  const [text, setText] = useState('توضیحات: ');
  const [title, setTitle] = useState('');

  const marginLeft = selectedUsers.length >= 8 ? '5px' : '15px';
  const options = ['برنامه نویسی وب', 'برنامه نویسی بک اند', 'طراحی گرافیک', 'بازی سازی', 'هک و امنیت'];

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.startsWith('توضیحات: ')) setText(val);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !imagePreview) return alert('نام بخش و تصویر الزامی است.');
    onAddSection({
      nameFa: title,
      nameEn: text.replace('توضیحات: ', ''),
      logo: imagePreview,
      className: 'custom-section',
      logoStyle: {}
    });
  };

  useEffect(() => setVisible(true), []);
  useEffect(() => {
    if (!imagePreview) return;
    setShowLayer(false);
    const timer = setTimeout(() => setShowLayer(true), 50);
    return () => clearTimeout(timer);
  }, [imagePreview]);

  return (
    <div className={`modal-container ${visible ? 'fade-in' : 'fade-out'}`} onClick={e => e.stopPropagation()}>
      <div className="close-container">
        <button className="close-icon" onClick={() => { setVisible(false); setTimeout(onClose, 300); }}>
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="txt">
        <p><img src={add} alt="add" />افزودن بخش جدید&nbsp;</p>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <div className="first-input">
            <input type="text" placeholder="نام بخش جدید را وارد کنید" spellCheck={false} value={title} onChange={(e) => setTitle(e.target.value)} />
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
                  readOnly
                  onClick={() => setShowOptions(!showOptions)}
                />
                <ul className={`dropdown-options ${showOptions ? 'show' : ''}`}>
                  {options.map((option, i) => (
                    <li key={i} onClick={() => { setValue(option); setShowOptions(false); }}>{option}</li>
                  ))}
                </ul>
                <label htmlFor="dropdown-btn" className="option-keeper">
                  <div className="dropdown-cont">
                    <img className={`dropdown ${showOptions ? 'rotate' : ''}`} src={dropdown} alt="dropdown-icon" />
                  </div>
                </label>
              </div>

              <div className="members">
                <RippleEffect onClick={onOpenSuggestedMembers} className="add-new-user" title="افزودن فرد جدید">
                  افزودن فرد جدید
                </RippleEffect>

                <div className={`members-preview ${selectedUsers.length >= 8 ? 'tight-margin' : ''}`} style={{ paddingRight: marginLeft }} dir='rtl'>
                  <div className="p-container"><p>اعضای پیش فرض</p></div>
                  <div className="members-images">
                    {selectedUsers.slice(0, 8).map((m, i) => (
                      <img key={i} src={m.img} alt={`member-${i}`} className="member-img" style={{ left: `${i * 13}px`, zIndex: i }} />
                    ))}
                    {selectedUsers.length > 8 && (
                      <div className="more-members" style={{ left: `${8 * 13}px`, zIndex: 8 }}>
                        +{selectedUsers.length - 8}
                      </div>
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
            <RippleEffect className="add-new-sec" onClick={handleSubmit}>
              افزودن بخش جدید<img className="add2" src={add} alt="add" />
            </RippleEffect>
          </div>
        </form>
      </div>
    </div>
  );
}
