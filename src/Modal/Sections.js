import back from '../images/dropdown-icon.svg';
import edit2 from '../images/edit-icon2.svg';
import add from '../images/add.svg';
import sjm from '../images/sjm-vip-logo.svg';
import salon_star from '../images/salon-star-logo.svg';
import animation from '../images/animation-logo.svg';
import leader_chat from '../images/Leaders-chat-logo.svg';
import ceo_chat from '../images/ceo-chat-logo.svg';


import { useEffect, useState } from 'react';
import '../Modal/Modal-styles/Sections.css';
import RippleEffect from '../Effect/RippleEffect';


export default function Sections({ onClose, onOpenaddNewSec }) {

    const [visible, setVisible] = useState(false);
    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
      };
    useEffect(() => setVisible(true), []);

    return (
        <div className={`modal-container-s ${visible ? 'fade-in' : 'fade-out'}`} onClick={e => e.stopPropagation()}>
            <div className="back-container">
                <button className="back-icon" onClick={handleClose}><img className="back-icon-style" src={back} alt="back" /></button>
            </div>

            <div className="txt mbc">
                <p><img src={edit2} className="pencil-icon" alt="add a new section" />مدیریت بخش ها&nbsp;</p>
                <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
            </div>

            <div className="sections-list">
                <div className="scroll3-container">
                    <div className="scroll3">

                        <div className="sjm-vip sec-list-item">
                            <div className="section-logo-container">
                                <img className="section-logo-img" src={sjm} alt="sjm-section-logo" />
                            </div>

                            <div className="section-information">
                                <p>بخش ویژه سامانه جامع</p>
                                <p>تعداد اعضاء: 2 نفر</p>
                                <p>تعداد تسک های فعال:3</p>
                            </div>

                            <div className="edit-section">
                                <RippleEffect className="centerize">
                                <img className="edit-section-logo" src={edit2} alt="sjm-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>

                        <div className="salon-star sec-list-item">
                            <div className="section-logo-container">
                                <img className="section-logo-img" src={salon_star} alt="sjm-section-logo" />
                            </div>

                            <div className="section-information">
                                <p>بخش ویژه سالن استار</p>
                                <p>تعداد اعضاء: ۳ نفر</p>
                                <p>تعداد تسک های فعال:۱</p>
                            </div>

                            <div className="edit-section">
                                <RippleEffect className="centerize">
                                <img className="edit-section-logo" src={edit2} alt="sjm-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>

                        <div className="animation sec-list-item">
                            <div className="section-logo-container">
                                <img className="section-logo-img" src={animation} alt="sjm-section-logo" />
                            </div>

                            <div className="section-information">
                                <p>بخش ویژه انیمیشن</p>
                                <p>تعداد اعضاء: ۸ نفر</p>
                                <p>تعداد تسک های فعال:۲</p>
                            </div>

                            <div className="edit-section">
                                <RippleEffect className="centerize">
                                <img className="edit-section-logo" src={edit2} alt="sjm-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>

                        <div className="leader-chat sec-list-item">
                            <div className="section-logo-container">
                                <img className="section-logo-img" src={leader_chat} alt="sjm-section-logo" />
                            </div>

                            <div className="section-information">
                                <p>چت ویژه لیدر ها</p>
                                <p>تعداد اعضاء: ۱۲ نفر</p>
                                <p>تعداد تسک های فعال:ندارد</p>
                            </div>

                            <div className="edit-section">
                                <RippleEffect className="centerize">
                                <img className="edit-section-logo" src={edit2} alt="sjm-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>

                        <div className="ceo-chat sec-list-item">
                            <div className="section-logo-container">
                                <img className="section-logo-img" src={ceo_chat} alt="sjm-section-logo" />
                            </div>

                            <div className="section-information">
                                <p>چت ویژه مدیران</p>
                                <p>تعداد اعضاء: 2 نفر</p>
                                <p>تعداد تسک های فعال:2</p>
                            </div>

                            <div className="edit-section">
                                <RippleEffect className="centerize">
                                <img className="edit-section-logo" src={edit2} alt="sjm-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="add-one-btn-container">
                    <RippleEffect className="make-sec" onClick={() => {onOpenaddNewSec()}}>ساخت بخش جدید<img src={add} alt="add new section button" /></RippleEffect>
                </div>
            </div>
        </div>
    )
}