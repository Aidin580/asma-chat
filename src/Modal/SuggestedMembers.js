import { useEffect, useState } from 'react';
import back from '../images/dropdown-icon.svg';
import accadd from '../images/accadd.svg';
import user_logo from '../images/user-logo.svg';
import user1 from '../images/users/user1.svg';
import user2 from '../images/users/user2.svg';
import user3 from '../images/users/user3.svg';
import user4 from '../images/users/user4.svg';
import user5 from '../images/users/user5.svg';
import add_icon from '../images/add.svg';
import added from '../images/added.svg';

import './Modal-styles/SuggestedMembers.css';
import RippleEffect from '../Effect/RippleEffect';

const suggestedUsers = [
  { id: 1, name: 'علی نعیمی', username: 'naemiorg@', img: user1 },
  { id: 2, name: 'عارف طالبی', username: 'areftg@', img: user2 },
  { id: 3, name: 'محمد امین درون پرور', username: 'dxport@', img: user3 },
];

const otherUsers = [
  { id: 4, name: 'صدرا شعبان نژاد', username: 'sh14@', img: user4 },
  { id: 5, name: 'محمد امین صدیقی', username: 'aminsd@', img: user5 },
];

export default function MemberSetting({ onClose, selectedUsers, setSelectedUsers }) {

  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const isSelected = (id) => selectedUsers.some(user => user.id === id);

  const toggleAdd = (user) => {
    if (isSelected(user.id)) {
      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const renderUser = (user) => (
    <div key={user.id} className={`user${user.id} users`}>
      <div className="user-img-container">
        <img className="user-img" src={user.img} alt={`${user.name}-user-img`} />
      </div>

      <div className="user-information">
        <div className="user-name-id">
          <p className="member-name">{user.name}</p>
          <p className="member-username">{user.username}</p>
        </div>
      </div>

      <div className="add-user">
        <RippleEffect className="centerize2" onClick={() => toggleAdd(user)}>
          <img
            className={`add-user-img ${isSelected(user.id) ? 'added' : ''}`}
            src={isSelected(user.id) ? added : add_icon}
            alt={isSelected(user.id) ? "user-added" : "user-add-button"}
          />
        </RippleEffect>
      </div>
    </div>
  );

  return (
    <div
      className={`modal-container-sm ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="back-container">
        <button className="back-icon" onClick={handleClose}>
          <img className="back-icon-style" src={back} alt="back" />
        </button>
      </div>

      <div className="txt-sm">
        <p>
          <img src={accadd} className="acc-add-icon" alt="add a new section" />
          اعضا پیشنهادی
        </p>
        <input className="search-input" type="text" placeholder="جستوجو کنید..." />
      </div>

      <div className="sm-list">
        <div className="ml-scroll">{suggestedUsers.map(renderUser)}</div>
      </div>

      <div className="users-for-adding">
        <div className="txt-sm2">
          <p id="mems">
            <img src={user_logo} className="user-logo-icon" alt="users" />
            سایر اعضا
          </p>
        </div>

        <div className="sm-list2">
          <div className="ml-scroll2">{otherUsers.map(renderUser)}</div>
        </div>
      </div>
    </div>
  );
}