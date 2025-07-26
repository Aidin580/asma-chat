import back from '../images/dropdown-icon.svg';
import task_logo from '../images/task-logo.svg';
import dropdown from '../images/dropdown-icon.svg';

import { useEffect, useState } from 'react';
import './Modal-styles/Task.css';
import RippleEffect from '../Effect/RippleEffect';

export default function Task({ onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => setVisible(true), []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };

    const options = ['گزینه1', 'گزینه2', 'گزینه3', 'گزینه4'];
    const options2 = ['گزینه1', 'گزینه2', 'گزینه3', 'گزینه4', 'گزینه5'];

    const [showOptions, setShowOptions] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);

    const [value, setValue] = useState('دسته بندی ها');
    const [value2, setValue2] = useState('تیم ها');

    const handleSelect = (option) => {
        setValue(option);
        setShowOptions(false);
    };

    const handleSelect2 = (option2) => {
        setValue2(option2);
        setShowOptions2(false);
    };

    return (
        <div className={`modal-container-s ${visible ? 'fade-in' : 'fade-out'}`} onClick={(e) => e.stopPropagation()}>
            <div className="back-container">
                <button className="back-icon" onClick={handleClose}>
                    <img className="back-icon-style" src={back} alt="back" />
                </button>
            </div>

            <div className="txt">
                <p>
                    <img src={task_logo} className="pencil-icon" alt="add a new section" />
                    افزودن بخش جدید&nbsp;
                </p>
                <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
            </div>

            <div className="task-values">
                <div className="first-value">
                    <RippleEffect className="add-new-value">افزودن دسته بندی جدید</RippleEffect>

                    <input
                        type="text"
                        id="dropdown-btn2"
                        value={value}
                        onClick={() => {
                            setShowOptions(!showOptions);
                            setShowOptions2(false);
                        }}
                        readOnly
                    />

                    <ul className={`dropdown-options2 ${showOptions ? 'show' : ''}`}>
                        {options.map((option, i) => (
                            <li key={i} onClick={() => handleSelect(option)}>{option}</li>
                        ))}
                    </ul>

                    <label htmlFor="dropdown-btn2" className="option-keeper2">
                        <div className="dropdown-cont">
                            <img className={`dropdown ${showOptions ? 'rotate' : ''}`} src={dropdown} alt="dropdown-icon" />
                        </div>
                    </label>
                </div>

                <div className="second-value">
                    <RippleEffect className="add-new-value">افزودن تیم جدید</RippleEffect>

                    <input
                        type="text"
                        id="dropdown-btn3"
                        value={value2}
                        onClick={() => {
                            setShowOptions2(!showOptions2);
                            setShowOptions(false);
                        }}
                        readOnly
                    />

                    <ul className={`dropdown-options2 ${showOptions2 ? 'show' : ''}`}>
                        {options2.map((option2, i) => (
                            <li key={i} onClick={() => handleSelect2(option2)}>{option2}</li>
                        ))}
                    </ul>

                    <label htmlFor="dropdown-btn3" className="option-keeper2">
                        <div className="dropdown-cont">
                            <img className={`dropdown ${showOptions2 ? 'rotate' : ''}`} src={dropdown} alt="dropdown-icon" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}