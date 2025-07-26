import logo from '../images/Logo&Name.svg';
import sjm from '../images/sjm-vip-logo.svg';
import salon from '../images/salon-star-logo.svg';
import animation from '../images/animation-logo.svg';
import leaders from '../images/Leaders-chat-logo.svg';
import ceo from '../images/ceo-chat-logo.svg';
import enter from '../images/home-menu-enter-logo.svg';
import gear from '../images/gear.svg';
import accset from '../images/accset.svg';
import add from '../images/add.svg';
import amin from '../images/amin.png';
import ali from '../images/ali.png';
import sadra from '../images/sadra.png';
import user1 from '../images/users/user1.svg';
import user2 from '../images/users/user2.svg';
import user3 from '../images/users/user3.svg';

import './Screen-styles/Home.css';
import { useState, useEffect, useMemo, useCallback } from 'react';
import RippleEffect from '../Effect/RippleEffect';

import ModalWrapper from '../Components/ModalWrapper';
import AddNewSec from '../Modal/AddNewSec';
import ChatSetting from '../Modal/ChatSetting';
import PersonalSetting from '../Modal/PersonalSetting';
import Sections from '../Modal/Sections';
import MemberSetting from '../Modal/MemberSetting';
import Task from '../Modal/Task';
import SuggestedMembers from '../Modal/SuggestedMembers';
import ModalWrapper2 from '../Components/ModalWrapper2';
import EditSections from '../Modal/EditSections';

export default function Home() {
  const [modalPage, setModalPage] = useState(null);
  const [modalPage2, setModalPage2] = useState(null);
  const [previousModalPage, setPreviousModalPage] = useState(null);
  const [sections, setSections] = useState([
    {
      id: 1,
      nameFa: 'بخش ویژه سامانه جامع',
      nameEn: 'SJM VIP CHANNEL',
      logo: sjm,
      className: 'sjm-vip sections',
      logoStyle: {},
      category: 'برنامه نویسی وب',
      members: [1, 2, 3, 4, 5, 6],
    },
    {
      id: 2,
      nameFa: 'بخش ویژه سالن استار',
      nameEn: 'SALON STAR CHANNEL',
      logo: salon,
      className: 'salon-star sections',
      logoStyle: { width: '4vw' },
      category: 'برنامه نویسی بک اند',
      members: [3, 5, 6],
    },
    {
      id: 3,
      nameFa: 'بخش ویژه انیمیشن',
      nameEn: 'ANIMATION CHANNEL',
      logo: animation,
      className: 'animation sections',
      logoStyle: { width: '3.3vw' },
      category: 'طراحی گرافیکی',
      members: [1, 3, 5],
    },
    {
      id: 4,
      nameFa: 'چت ویژه لیدرها',
      nameEn: 'LEADERS CHAT',
      logo: leaders,
      className: 'leader-chat sections',
      logoStyle: { width: '3.3vw' },
      category: 'هک و امنیت',
      members: [1, 2, 5, 6],
    },
    {
      id: 5,
      nameFa: 'چت ویژه مدیران',
      nameEn: 'CEO CHAT',
      logo: ceo,
      className: 'ceo-chat sections',
      logoStyle: { width: '3.3vw' },
      category: 'هک و امنیت',
      members: [1, 2],
    },
  ]);

  const [editingSection, setEditingSection] = useState(null);

  const [selectedUsers, setSelectedUsers] = useState([
    { id: 1, name: 'علی نعیمی', username: 'naemiorg@', img: user1 },
    { id: 2, name: 'عارف طالبی', username: 'areftg@', img: user2 },
    { id: 3, name: 'محمد امین درون پرور', username: 'dxport@', img: user3 },
  ]);

  const membersOfEditingSection = useMemo(() => {
    if (!editingSection) return [];
    return selectedUsers.filter(user => editingSection.members.includes(user.id));
  }, [editingSection, selectedUsers]);

  // توابع ساده برای باز کردن مودال‌ها
  const openChatSetting = useCallback(() => setModalPage('chatSetting'), []);
  const openSections = useCallback(() => setModalPage('sections'), []);
  const openAddNewSection = useCallback(() => setModalPage('addNewSection'), []);
  const openPersonalSetting = useCallback(() => setModalPage2('personalSetting'), []);
  const openMemberSetting = useCallback(() => setModalPage('memberSetting'), []);
  const openTask = useCallback(() => setModalPage('task'), []);

  // توابع بستن مودال
  const handleCloseModal = () => setModalPage(null);
  const handleCloseModal2 = () => setModalPage2(null);

  // بستن مودال‌های میانی و باز کردن چت ستینگ
  const handleCloseSections = () => setModalPage('chatSetting');
  const handleCloseMemberSetting = () => setModalPage('chatSetting');
  const handleCloseTask = () => setModalPage('chatSetting');

  // بستن مودال SuggestedMembers و برگشت به مودال قبلی
  const handleCloseSuggestedMembers = () => {
    if (previousModalPage) {
      setModalPage(previousModalPage);
      setPreviousModalPage(null);
    } else {
      setModalPage(null);
    }
  };

  const handleCloseEditSections = () => setModalPage('sections');

  // کد رندر مودال ها در یک تابع مجزا
  const renderModalContent = (handleClose) => {
    switch (modalPage) {
      case 'addNewSection':
        return (
          <AddNewSec
            onClose={handleClose}
            onOpenSuggestedMembers={() => {
              setPreviousModalPage(modalPage);
              setModalPage('suggestedMembers');
            }}
            onAddSection={(newSection) => {
              setSections((prev) => [...prev, { ...newSection, id: Date.now() }]);
              handleClose();
            }}
            selectedUsers={selectedUsers}
          />
        );

      case 'chatSetting':
        return (
          <ChatSetting
            onClose={handleClose}
            onOpenSections={openSections}
            onOpenMemberSetting={openMemberSetting}
            onOpenTask={openTask}
          />
        );

      case 'sections':
        return (
          <Sections
            onClose={handleCloseSections}
            onOpenaddNewSec={openAddNewSection}
            sections={sections}
            setSections={setSections}
            onOpenEditSection={(section) => {
              setEditingSection(section);
              setModalPage('editSections');
            }}
          />
        );

      case 'memberSetting':
        return <MemberSetting onClose={handleCloseMemberSetting} />;

      case 'task':
        return <Task onClose={handleCloseTask} />;

      case 'suggestedMembers':
        return (
          <SuggestedMembers
            onClose={handleCloseSuggestedMembers}
            selectedUsers={membersOfEditingSection}
            setSelectedUsers={setSelectedUsers}
          />
        );

      case 'editSections':
        return (
          <EditSections
            section={editingSection}
            selectedUsers={selectedUsers}
            onClose={handleCloseEditSections}
            onOpenSuggestedMembers={() => {
              setPreviousModalPage(modalPage);
              setModalPage('suggestedMembers');
            }}
            onSaveEdit={(updatedSection) => {
              setSections((prevSections) =>
                prevSections.map((sec) => (sec.id === updatedSection.id ? updatedSection : sec))
              );
              handleCloseEditSections();
            }}
            onAddSection={(newSection) => {
              setSections((prev) => [...prev, { ...newSection, id: Date.now() }]);
              handleCloseEditSections();
            }}
          />
        );

      default:
        return null;
    }
  };

  // افکت ریپل روی دکمه‌ها (در صورت تمایل می‌تونید این رو به RippleEffect منتقل کنید)
  useEffect(() => {
    const handleClick = function (e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const buttons2 = document.querySelectorAll('.btn2');
    const buttons3 = document.querySelectorAll('.btn3');
    buttons2.forEach((btn) => btn.addEventListener('click', handleClick));
    buttons3.forEach((btn) => btn.addEventListener('click', handleClick));

    return () => {
      buttons2.forEach((btn) => btn.removeEventListener('click', handleClick));
      buttons3.forEach((btn) => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <div className="container2">
      <div className="content2">
        <div className="saying-welcome2">
          <img className="the-main-logo" src={logo} alt="logo and Name" />
          <h1 className="twc2">TOGETHER WE CAN</h1>
          <p className="togetxt2">به چت سازمانی گروه اسما خوش آمدید,وارد حساب کاربری خود شوید.</p>
        </div>

        <div className="pages">
          <div className="scroll">
            {sections.map((section) => (
              <div key={section.id} className={section.className}>
                <img
                  className="section-img"
                  src={section.logo}
                  alt={`${section.nameEn} logo`}
                  style={section.logoStyle}
                />
                <h3 className="section-h3">{section.nameFa}</h3>
                <p className="section-p">{section.nameEn}</p>
                <RippleEffect className="enter-section">
                  ورود به بخش
                  <img className="enter-section-img" src={enter} alt="enter logo" />
                </RippleEffect>
              </div>
            ))}
          </div>
        </div>

        <div className="home-setting" style={{ userSelect: 'none' }}>
          <button className="btn3" onClick={openChatSetting}>
            تنظیمات چت&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={gear} style={{ width: '0.9vw' }} alt="chat setting" />
          </button>

          <button className="btn3" onClick={openPersonalSetting}>
            تنظیمات شخصی&nbsp;&nbsp;&nbsp;
            <img src={accset} style={{ width: '1vw' }} alt="account setting" />
          </button>

          <button className="btn3" onClick={openAddNewSection}>
            ساخت بخش جدید&nbsp;&nbsp;&nbsp;
            <img src={add} style={{ width: '1vw' }} alt="add a new section" />
          </button>
        </div>

        <div className="online-users">
          <div className="on-text">
            <p className="online-per">اعضای آنلاین</p>
            <p className="online-en">ONLINE USERS</p>
          </div>
          <div className="scroll-keeper">
            <div className="scroll2">
              <div>
                <p>@dxport</p>
                <p>امین درون پرور</p>
                <img src={amin} alt="amin" />
              </div>

              <div>
                <p>@naemiorg</p>
                <p>علی نعیمی</p>
                <img src={ali} alt="ali" />
              </div>

              <div>
                <p>@SH14</p>
                <p>صدرا شعبان نژاد</p>
                <img src={sadra} alt="sadra" />
              </div>

              <div>
                <p>@naemiorg</p>
                <p>علی نعیمی</p>
                <img src={ali} alt="ali" />
              </div>

              <div>
                <p>@SH14</p>
                <p>صدرا شعبان نژاد</p>
                <img src={sadra} alt="sadra" />
              </div>

              <div>
                <p>@dxport</p>
                <p>امین درون پرور</p>
                <img src={amin} alt="amin" />
              </div>
            </div>
          </div>
        </div>

        {modalPage && (
          <ModalWrapper onClose={handleCloseModal}>
            {({ handleClose }) => renderModalContent(handleClose)}
          </ModalWrapper>
        )}

        {modalPage2 === 'personalSetting' && (
          <ModalWrapper2 onClose={handleCloseModal2}>
            {({ handleClose }) => <PersonalSetting onClose2={handleClose} />}
          </ModalWrapper2>
        )}
      </div>
    </div>
  );
}