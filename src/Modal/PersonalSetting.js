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


export default function PersonalSetting({ onClose }) {

    const [visible, setVisible] = useState(false);
    useEffect(() => {
            setVisible(true);
          }, []);
    const handleClose = () => {
            setVisible(false);
            setTimeout(onClose, 300);
    };

    return (
            <div className={`modal-container-ps ${visible ? 'show' : 'unshow'}`} onClick={(e) => e.stopPropagation()}>
                <div className="close-container">
                    <button className="close-icon" onClick={handleClose}><img src={close} alt="close" /></button>
                </div>

                <div className="txt">
                    <h4><img src={personal_setting} alt="add a new section" />تنظیمات شخصی&nbsp;</h4>
                    <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
                </div>

                <div className="profile-section">

                    <div className="user-profile">

                        <div className="ali-data-keeper">
                            <div className="user-name">
                                <p>علی نعیمی</p>
                            </div>

                            <div className="more-user-data">
                                <p className="role">سمت: مدیر&nbsp;<div className="role-color" /></p>
                                <p>NAEMIORG@</p>
                                <p>989212580537+</p>
                            </div>

                            <div className="edit-profile">
                                <EditIcon className="edit-icon" />ویرایش پروفایل 
                            </div>
                        </div>

                        <div className="user-image-keeper">
                            <img className="ali-pic" src={ali} alt="profile-picture" />
                        </div>

                    </div>

                    <div className="profile-settings">
                        <div className="settings2">
                            <div className="name-change">
                                <label>
                                    <div className="texts-keeper">
                                        <h5>ویراش نام کاربری</h5>
                                        <p>نام کاربری خود را ویرایش کنید</p>
                                    </div>
                                    <div className="icon-keeper">
                                        <img src={edit2} alt="edit-icon" />
                                    </div>
                                </label>
                            </div>

                            <div className="phone-change">
                                <label>
                                    <div className="texts-keeper">
                                        <h5>ویرایش شماره تماس</h5>
                                        <p>ویرایش شماره تماس نیازمند به تایید لیدر ها یا مدیران دارد.</p>
                                    </div>
                                    <div className="icon-keeper">
                                        <img src={phone} alt="phone-icon" />
                                    </div>
                                </label>
                            </div>
                            
                            <div className="pass-change">
                                <label>
                                    <div className="texts-keeper">
                                        <h5>ویرایش رمز عبور</h5>
                                        <p>ویرایش رمز عبور (در صورت فراموشی رمز عبور خود از لیدر تیم بپرسید)</p>
                                    </div>
                                    <div className="icon-keeper">
                                        <img src={lock} alt="lock-icon" />
                                    </div>
                                </label>
                            </div>

                            <div className="log-out-cont">
                                <label id="last">
                                    <div className="texts-keeper">
                                        <h5>ویرایش رمز عبور</h5>
                                    </div>
                                    <div className="icon-keeper">
                                        <img src={exit} alt="hamburger-icon" />
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}