import { useEffect, useState } from 'react';
import back from '../images/dropdown-icon.svg';
import accadd from '../images/accadd.svg';
import user_logo from '../images/user-logo.svg';
import user1 from '../images/users/user1.svg';
import user2 from '../images/users/user2.svg';
import user3 from '../images/users/user3.svg';
import user4 from '../images/users/user4.svg';
import user5 from '../images/users/user5.svg';
import delete_icon from '../images/delete.svg';

import './Modal-styles/SuggestedMembers.css';
import RippleEffect from '../Effect/RippleEffect';

export default function MemberSetting({ onClose }) {

    const [visible, setVisible] = useState(false);
    const handleClose = () => {
            setVisible(false);
            setTimeout(onClose, 300);
    };
    useEffect(() => setVisible(true), []);

    return (
            <div className={`modal-container-sm ${visible ? 'fade-in' : 'fade-out'}`} onClick={e => e.stopPropagation()}>
                <div className="back-container">
                    <button className="back-icon" onClick={handleClose}><img className="back-icon-style" src={back} alt="back" /></button>
                </div>

                <div className="txt-sm">
                    <p><img src={accadd} className="acc-add-icon" alt="add a new section" />اعضا پیشنهادی&nbsp;</p>

                    <input className="search-input" type="text" placeholder="جستوجو کنید..." />
                </div>

                <div className="sm-list">
                    <div className="ml-scroll">

                        <div className="user1 users">
                            <div className="user-img-container">
                                <img className="user-img" src={user1} alt="user1-user-img" />
                            </div>

                            <div className="user-information">
                                <div className="user-name-id">
                                    <p className="member-name">علی نعیمی</p>
                                    <p className="member-username">naemiorg@</p>
                                </div>

                                <div className="user-skills">

                                </div>
                            </div>

                            <div className="delete-user">
                                <RippleEffect className="centerize2">
                                <img className="delete-user-img" src={delete_icon} alt="user1-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>
                        
                        <div className="user2 users">
                            <div className="user-img-container">
                                <img className="user-img" src={user2} alt="user1-user-img" />
                            </div>

                            <div className="user-information">
                                <div className="user-name-id">
                                    <p className="member-name">عارف طالبی</p>
                                    <p className="member-username">areftg@</p>
                                </div>

                                <div className="user-skills">

                                </div>
                            </div>

                            <div className="delete-user">
                                <RippleEffect className="centerize2">
                                <img className="delete-user-img" src={delete_icon} alt="user1-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>
                        
                        <div className="user3 users">
                            <div className="user-img-container">
                                <img className="user-img" src={user3} alt="user1-user-img" />
                            </div>

                            <div className="user-information">
                                <div className="user-name-id">
                                    <p className="member-name">محمد امین درون پرور</p>
                                    <p className="member-username">dxport@</p>
                                </div>

                                <div className="user-skills">

                                </div>
                            </div>

                            <div className="delete-user">
                                <RippleEffect className="centerize2">
                                <img className="delete-user-img" src={delete_icon} alt="user1-section-edit-button" />
                                </RippleEffect>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="users-for-adding">
                    <div>
                        <p>سایر اعضا<img src={user_logo} className="user-logo-icon" alt="add a new section" /></p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
    )
}