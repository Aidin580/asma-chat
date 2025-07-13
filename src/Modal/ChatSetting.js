import close from '../images/close.svg';
import add from '../images/add.svg';
import hamburger_list from '../images/hamburger-list.svg';
import star from '../images/star.svg';
import membeers from '../images/members.svg';


import { useEffect, useState } from 'react';
import '../Modal/Modal-styles/ChatSetting.css';


export default function ChatSetting({onClose}) {

    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
      }, []);
    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`modal-overlay ${visible ? 'fade-in' : 'fade-out'}`} onClick={handleClose}>
            <div className={`modal-content ${visible ? 'scale-in' : 'scale-out'} modal-content2`} onClick={(e) => e.stopPropagation()}>

                <div className="close-container">
                    <button className="close-icon" onClick={handleClose}><img src={close} alt="close" /></button>
                </div>

                <div className="txt">
                    <h4><img src={add} alt="add a new section" />تنظیمات چت&nbsp;</h4>
                    <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
                </div>

                <div className="settings">
                    <div className="sections">
                        <label>
                            <div className="texts-keeper">
                                <h5>بخش ها</h5>
                                <p>مدیریت و ویرایش و سازماندهی بخش های چت</p>
                            </div>
                            <div className="icon-keeper">
                                <img className="hamburger" src={hamburger_list} alt="hamburger-icon" />
                            </div>
                        </label>
                    </div>

                    <div className="members-settings">
                        <label>
                            <div className="texts-keeper">
                                <h5>مدیریت اعضاء</h5>
                                <p>ویرایش اطلاعات، افزودن، حذف و تنظیمات کلی مربوط به اعضاء</p>
                            </div>
                            <div className="icon-keeper">
                                <img className="hamburger" src={membeers} alt="hamburger-icon" />
                            </div>
                        </label>
                    </div>
                    
                    <div className="tasks">
                        <label id="last">
                            <div className="texts-keeper">
                                <h5>تسک ها</h5>
                                <p>تنظیم تمام گزینه های مربوط به تسک ها و مشاهده تسک های در جریان</p>
                            </div>
                            <div className="icon-keeper">
                                <img className="hamburger" src={star} alt="hamburger-icon" />
                            </div>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}