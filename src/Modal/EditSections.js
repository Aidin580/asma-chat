import add from '../images/add.svg';
import back from '../images/dropdown-icon.svg';
import edit2 from '../images/edit-icon2.svg';
import pin from '../images/pin.svg';
import dropdown from '../images/dropdown-icon.svg';

import { useState, useEffect } from 'react';
import RippleEffect from '../Effect/RippleEffect';

export default function EditSections({
  section,
  onClose,
  onSaveEdit,
  selectedUsers,
  onOpenSuggestedMembers,
}) {

    const [visible, setVisible] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const [value, setValue] = useState('');
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const membersInSection = selectedUsers.filter(user => section.members?.includes(user.id)) || [];

    const options = ['برنامه نویسی وب', 'برنامه نویسی بک اند', 'طراحی گرافیک', 'بازی سازی', 'هک و امنیت'];

    const marginLeft = selectedUsers.length >= 8 ? '5px' : '15px';

    useEffect(() => {
        setVisible(true);
        if (section) {
            setTitle(section.nameFa || '');
            setText(`توضیحات: ${section.nameEn || ''}`);

            if (typeof section.logo === 'string') {
            setImagePreview(section.logo);
            } else {
            setImagePreview(null);
            }

            setValue(section.category || 'برنامه نویسی وب');
            }
    }, [section]);


  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !imagePreview) {
      alert('نام بخش و تصویر الزامی است.');
      return;
    }

    const updatedSection = {
      ...section,
      nameFa: title,
      nameEn: text.replace('توضیحات: ', ''),
      logo: imagePreview,
      category: value,
      members: selectedUsers.map(u => u.id),
    };

    onSaveEdit(updatedSection);
  };

  return (
    <div className={`modal-container ${visible ? 'fade-in' : 'fade-out'}`} onClick={e => e.stopPropagation()}>

      <div className="back-container">
        <button className="back-icon" onClick={handleClose}>
          <img className="back-icon-style" src={back} alt="back" />
        </button>
      </div>

      <div className="txt">
        <p><img className="pencil-icon" src={edit2} alt="edit section" />ویرایش بخش&nbsp;</p>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="inputs">
        <form>
          <div className="first-input">
            <input
              type="text"
              placeholder="نام بخش جدید را وارد کنید"
              spellCheck={false}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="rest-of-form">
            <div className="img-picker">
                <label className="the-picker" dir="rtl">
                    {!imagePreview && (
                    <>
                        <p>افزودن عکس</p>
                        <p>فرمت توصیه شده: SVG</p>
                        <p>رنگ توصیه شده: سفید</p>
                        <img src={pin} alt="pin" />
                    </>
                    )}
                    <input type="file" accept="image/*" onChange={handleImageChange} hidden />
                    {imagePreview && (
                    <div className="preview-keeper show">
                        <img src={imagePreview} alt="Preview" className="img-preview show" />
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
                />

                <ul className={`dropdown-options ${showOptions ? 'show' : ''}`}>
                  {options.map((option, i) => (
                    <li key={i} onClick={() => handleSelect(option)}>{option}</li>
                  ))}
                </ul>

                <label htmlFor="dropdown-btn" className="option-keeper">
                  <div className="dropdown-cont">
                    <img
                      className={`dropdown ${showOptions ? 'rotate' : ''}`}
                      src={dropdown}
                      alt="dropdown-icon"
                    />
                  </div>
                </label>
              </div>

              <div className="members">
                <RippleEffect
                  onClick={() => {
                    onOpenSuggestedMembers();
                  }}
                  className="add-new-user"
                  title="افزودن فرد جدید"
                >
                  افزودن فرد جدید
                </RippleEffect>

                <div
                  className={`members-preview ${selectedUsers.length >= 8 ? 'tight-margin' : ''}`}
                  style={{ paddingRight: marginLeft }}
                  dir='rtl'
                >
                  <div className="p-container"><p>اعضای پیش فرض</p></div>
                  <div className="members-images">
                    {membersInSection.slice(0, 8).map((member, i) => (
                        <img
                            key={i}
                            src={member.img}
                            alt={`member-${i}`}
                            className="member-img"
                            style={{ left: `${i * 13}px`, zIndex: i }}
                        />
                    ))}
                    {membersInSection.length > 8 && (
                        <div className="more-members" style={{ left: `${8 * 13}px`, zIndex: 8 }}>
                            +{membersInSection.length - 8}
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
              ذخیره تغییرات
              <img className="add2" src={add} alt="save changes" />
            </RippleEffect>
          </div>
        </form>
      </div>
    </div>
  );
}