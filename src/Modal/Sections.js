import back from '../images/dropdown-icon.svg';
import edit2 from '../images/edit-icon2.svg';
import add from '../images/add.svg';

import { useEffect, useState } from 'react';
import '../Modal/Modal-styles/Sections.css';
import RippleEffect from '../Effect/RippleEffect';

export default function Sections({ onClose, onOpenaddNewSec, sections = [], onOpenEditSection }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`modal-container-s ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={e => e.stopPropagation()}
    >
      <div className="back-container">
        <button className="back-icon" onClick={handleClose} aria-label="بازگشت">
          <img className="back-icon-style" src={back} alt="back" />
        </button>
      </div>

      <div className="txt mbc">
        <p>
          <img src={edit2} className="pencil-icon" alt="edit icon" />
          مدیریت بخش ها&nbsp;
        </p>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="sections-list">
        <div className="scroll3-container">
          <div className="scroll3">
            {sections.map(section => (
              <div key={section.id} className={`${section.className} sec-list-item`}>
                <div className="section-logo-container">
                  <img className="section-logo-img" src={section.logo} alt={`${section.nameFa} logo`} />
                </div>

                <div className="section-information">
                  <p>{section.nameFa}</p>
                  <p>دسته‌بندی: {section.category || 'ندارد'}</p>
                  <p>تعداد اعضا: {section.members?.length || 0}</p>
                </div>

                <div className="edit-section">
                  <RippleEffect
                    className="centerize"
                    onClick={() => onOpenEditSection(section)}
                    aria-label={`ویرایش بخش ${section.nameFa}`}
                  >
                    <img className="edit-section-logo" src={edit2} alt="edit" />
                  </RippleEffect>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="add-one-btn-container">
          <RippleEffect
            className="make-sec"
            onClick={onOpenaddNewSec}
            aria-label="ساخت بخش جدید"
          >
            ساخت بخش جدید
            <img src={add} alt="add new section button" />
          </RippleEffect>
        </div>
      </div>
    </div>
  );
}