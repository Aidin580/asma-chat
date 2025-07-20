import back from '../images/dropdown-icon.svg';
import edit2 from '../images/edit-icon2.svg';
import add from '../images/add.svg';
import sjm from '../images/sjm-vip-logo.svg';
import salon_star from '../images/salon-star-logo.svg';
import animation from '../images/animation-logo.svg';
import leader_chat from '../images/Leaders-chat-logo.svg';
import ceo from '../images/ceo-chat-logo.svg';


import { useEffect, useState } from 'react';
import '../Modal/Modal-styles/Sections.css';


export default function Sections({ onClose }) {

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
                <h4><img src={edit2} className="pencil-icon" alt="add a new section" />مدیریت بخش ها&nbsp;</h4>
                <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
            </div>

            <div className="sections-list">
                <div className="scroll3-container">
                    <div className="scroll3">

                        <div className="sjm-vip">

                        </div>

                        <div className="salon-star">

                        </div>

                        <div className="animation">

                        </div>

                        <div className="leader-chat">

                        </div>

                        <div className="ceo-chat">

                        </div>
                        
                    </div>
                </div>
                <div className="add-one-btn-container">
                    <button className="make-sec">ساخت بخش جدید<img src={add} alt="add new section button" /></button>
                </div>
            </div>
        </div>
    )
}