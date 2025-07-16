import back from '../images/dropdown-icon.svg';
import edit2 from '../images/edit-icon2.svg';


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

                <div className="txt">
                    <h4><img src={edit2} className="pencil-icon" alt="add a new section" />افزودن بخش جدید&nbsp;</h4>
                    <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
                </div>
            </div>
    )
}