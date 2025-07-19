import close from '../images/close.svg';
import gear from '../images/gear.svg';
import hamburger_list from '../images/hamburger-list.svg';
import star from '../images/star.svg';
import membeers from '../images/members.svg';

import '../Modal/Modal-styles/ChatSetting.css';

export default function ChatSetting({ onClose, onOpenSections, onOpenMemberSetting, onOpenTask }) {

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-container-cs">
      <div className="close-container">
        <button className="close-icon" onClick={handleClose}>
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="txt">
        <h4><img src={gear} alt="gear icon" />&nbsp;تنظیمات چت&nbsp;</h4>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="settings">
        <div className="sections">
          <label onClick={() => {
              onOpenSections();
          }}>
            <div className="texts-keeper">
              <h5>بخش ها</h5>
              <p>مدیریت و ویرایش و سازماندهی بخش های چت</p>
            </div>
            <div className="icon-keeper">
              <img src={hamburger_list} alt="hamburger-icon" />
            </div>
          </label>
        </div>

        <div className="members-settings">
          <label onClick={() => {
            onOpenMemberSetting();
          }}>
            <div className="texts-keeper">
              <h5>مدیریت اعضاء</h5>
              <p>ویرایش اطلاعات، افزودن، حذف و تنظیمات کلی مربوط به اعضاء</p>
            </div>
            <div className="icon-keeper">
              <img src={membeers} alt="members-icon" />
            </div>
          </label>
        </div>

        <div className="tasks">
          <label id="last" onClick={() => {
            onOpenTask();
          }}>
            <div className="texts-keeper">
              <h5>تسک ها</h5>
              <p>تنظیم تمام گزینه های مربوط به تسک ها و مشاهده تسک های در جریان</p>
            </div>
            <div className="icon-keeper">
              <img src={star} alt="star-icon" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}