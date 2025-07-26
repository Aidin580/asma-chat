import close from '../images/close.svg';
import personal_setting from '../images/Personal-Setting.svg';
import ali from '../images/ali.svg';
import { ReactComponent as EditIcon } from '../images/edit-icon.svg';
import edit2 from '../images/edit-icon2.svg';
import phone from '../images/phone-icon.svg';
import lock from '../images/lock-icon.svg';
import exit from '../images/log-out-icon.svg';

import { useEffect, useState } from 'react';
import '../Modal/Modal-styles/PersonalSetting.css';
import RippleEffect from '../Effect/RippleEffect';

const settingsItems = [
  {
    id: 'name-change',
    title: 'ویراش نام کاربری',
    desc: 'نام کاربری خود را ویرایش کنید',
    icon: edit2,
    alt: 'edit-icon',
  },
  {
    id: 'phone-change',
    title: 'ویرایش شماره تماس',
    desc: 'ویرایش شماره تماس نیازمند به تایید لیدر ها یا مدیران دارد.',
    icon: phone,
    alt: 'phone-icon',
  },
  {
    id: 'pass-change',
    title: 'ویرایش رمز عبور',
    desc: 'ویرایش رمز عبور (در صورت فراموشی رمز عبور خود از لیدر تیم بپرسید)',
    icon: lock,
    alt: 'lock-icon',
  },
];

export default function PersonalSetting({ onClose2 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose2, 300);
  };

  return (
    <div className={`modal-container-ps ${visible ? 'fade-in' : 'fade-out'}`}>
      <div className="close-container">
        <button className="close-icon" onClick={handleClose}>
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="txt">
        <p>
          <img src={personal_setting} alt="personal setting" />
          تنظیمات شخصی&nbsp;
        </p>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="profile-section">
        <div className="user-profile">
          <div className="ali-data-keeper">
            <div className="user-name">
              <p>علی نعیمی</p>
            </div>

            <div className="more-user-data">
              <p className="role">
                سمت: مدیر&nbsp;
                <div className="role-color"></div>
              </p>
              <p>NAEMIORG@</p>
              <p>989212580537+</p>
            </div>

            <div className="edit-profile">
              <EditIcon className="edit-icon" />
              ویرایش پروفایل
            </div>
          </div>

          <div className="user-image-keeper">
            <img className="ali-pic" src={ali} alt="profile-picture" />
          </div>
        </div>

        <div className="profile-settings">
          <div className="settings2">
            {settingsItems.map(({ id, title, desc, icon, alt }) => (
              <div className={id} key={id}>
                <RippleEffect className="ps-label-effect">
                  <div className="texts-keeper">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                  </div>
                  <div className="icon-keeper">
                    <img src={icon} alt={alt} />
                  </div>
                </RippleEffect>
              </div>
            ))}

            <div className="log-out-cont">
              <RippleEffect className="ps-label-effect" id="last">
                <div className="texts-keeper">
                  <h5>خروج از حساب</h5>
                </div>
                <div className="icon-keeper">
                  <img src={exit} alt="logout-icon" />
                </div>
              </RippleEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}