import { useEffect, useState } from 'react';
import back from '../images/dropdown-icon.svg';
import accadd from '../images/accadd.svg';
import delete_icon from '../images/delete.svg';

import user1 from '../images/users/user1.svg';
import user2 from '../images/users/user2.svg';
import user3 from '../images/users/user3.svg';
import user4 from '../images/users/user4.svg';
import user5 from '../images/users/user5.svg';

import './Modal-styles/MemberSetting.css';
import RippleEffect from '../Effect/RippleEffect';

const initialUsers = [
  {
    id: 1,
    name: 'علی نعیمی',
    username: 'naemiorg@',
    img: user1,
    roleColorClass: 'user-role-color-golden',
  },
  {
    id: 2,
    name: 'عارف طالبی',
    username: 'areftg@',
    img: user2,
    roleColorClass: 'user-role-color-blue',
  },
  {
    id: 3,
    name: 'محمد امین درون پرور',
    username: 'dxport@',
    img: user3,
    roleColorClass: 'user-role-color-golden',
  },
  {
    id: 4,
    name: 'صدرا شعبان نژاد',
    username: 'sh14@',
    img: user4,
    roleColorClass: 'user-role-color-golden',
  },
  {
    id: 5,
    name: 'محمد امین صدیقی',
    username: 'aminsd@',
    img: user5,
    roleColorClass: 'user-role-color-blue',
  },
];

export default function MemberSetting({ onClose }) {
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');

  useEffect(() => setVisible(true), []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  // نمونه تابع حذف (فقط از state حذف می‌کند)
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // فیلتر کاربران بر اساس متن جستجو
  const filteredUsers = users.filter(user =>
    user.name.includes(search) || user.username.includes(search)
  );

  return (
    <div
      className={`modal-container-ms ${visible ? 'fade-in' : 'fade-out'}`}
      onClick={e => e.stopPropagation()}
    >
      <div className="back-container">
        <button className="back-icon" onClick={handleClose}>
          <img className="back-icon-style" src={back} alt="back" />
        </button>
      </div>

      <div className="txt-ms">
        <p>
          <img src={accadd} className="pencil-icon" alt="add a new section" />
          مدیریت اعضا&nbsp;
        </p>

        <input
          className="search-input"
          type="text"
          placeholder="جستوجو کنید..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="m-list">
        <div className="ml-scroll">
          {filteredUsers.map(user => (
            <div key={user.id} className="users">
              <div className="user-img-container">
                <img className="user-img" src={user.img} alt={`${user.name}-user-img`} />
              </div>

              <div className="user-information">
                <div className="user-name-id">
                  <p className="member-name">{user.name}</p>
                  <p className="member-username">
                    {user.username}
                    &nbsp;
                    <div className={user.roleColorClass}></div>
                  </p>
                </div>

                <div className="user-skills">{/* این بخش اگر لازم شد پر شود */}</div>
              </div>

              <div className="delete-user">
                <RippleEffect className="centerize2" onClick={() => handleDeleteUser(user.id)}>
                  <img className="delete-user-img" src={delete_icon} alt={`${user.name}-delete-button`} />
                </RippleEffect>
              </div>
            </div>
          ))}

          {filteredUsers.length === 0 && <p>موردی یافت نشد.</p>}
        </div>
      </div>
    </div>
  );
}