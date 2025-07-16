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

import './Screen-styles/Home.css';
import { useState, useEffect } from 'react';

import ModalWrapper from '../Components/ModalWrapper';
import AddNewSec from '../Modal/AddNewSec';
import ChatSetting from '../Modal/ChatSetting';
import PersonalSetting from '../Modal/PersonalSetting';
import Sections from '../Modal/Sections';

export default function Home() {
  useEffect(() => {
    const handleClick = function (e) {
      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
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

    const buttons2 = document.querySelectorAll(".btn2");
    buttons2.forEach(btn => btn.addEventListener("click", handleClick));
    const buttons3 = document.querySelectorAll(".btn3");
    buttons3.forEach(btn => btn.addEventListener("click", handleClick));

    return () => {
      buttons2.forEach(btn => btn.removeEventListener("click", handleClick));
      buttons3.forEach(btn => btn.removeEventListener("click", handleClick));
    };
  }, []);

  const [modalPage, setModalPage] = useState(null);

  function handleCloseModal() {
    setModalPage(null);
  }

  function handleOpenSectionsFromChatSetting() {
    setModalPage('sections');
  }

  function handleCloseSections() {
    setModalPage('chatSetting');
  }

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
            <div className="sjm-vip">
              <img src={sjm} alt="sjm vip logo" />
              <h3>بخش ویژه سامانه جامع</h3>
              <p>SJM VIP CHANNEL</p>
              <button className="btn2">ورود به بخش<img src={enter} alt='enter logo' /></button>
            </div>

            <div className="salon-star">
              <img src={salon} style={{ width: "4vw" }} alt="salon star logo" />
              <h3>بخش ویژه سالن استار</h3>
              <p>SALON STAR CHANNEL</p>
              <button className="btn2">ورود به بخش<img src={enter} alt='enter logo' /></button>
            </div>

            <div className="animation">
              <img src={animation} style={{ width: "3.3vw" }} alt="animation logo" />
              <h3>بخش ویژه انیمیشن</h3>
              <p>ANIMATION CHANNEL</p>
              <button className="btn2">ورود به بخش<img src={enter} alt='enter logo' /></button>
            </div>

            <div className="leader-chat">
              <img src={leaders} style={{ width: "3.3vw" }} alt="leaders chat logo" />
              <h3>چت ویژه لیدرها</h3>
              <p>LEADERS CHAT</p>
              <button className="btn2">ورود به بخش<img src={enter} alt='enter logo' /></button>
            </div>

            <div className="ceo-chat">
              <img src={ceo} style={{ width: "3.3vw" }} alt="ceo chat logo" />
              <h3>چت ویژه مدیران</h3>
              <p>CEO CHAT</p>
              <button className="btn2">ورود به بخش<img src={enter} alt='enter logo' /></button>
            </div>
          </div>
        </div>

        <div className="home-setting" style={{ userSelect: "none" }}>
          <button className="btn3" onClick={() => setModalPage('chatSetting')}>
            تنظیمات چت&nbsp;&nbsp;&nbsp;&nbsp;<img src={gear} style={{ width: "0.9vw" }} alt="chat setting" />
          </button>

          <button className="btn3" onClick={() => setModalPage('personalSetting')}>
            تنظیمات شخصی&nbsp;&nbsp;&nbsp;<img src={accset} style={{ width: "1vw" }} alt="account setting" />
          </button>

          <button className="btn3" onClick={() => setModalPage('addNewSection')}>
            ساخت بخش جدید&nbsp;&nbsp;&nbsp;<img src={add} style={{ width: "1vw" }} alt="add a new section" />
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

        {/* مودال‌ها به صورت یکجا در ModalWrapper */}
        {modalPage && (
          <ModalWrapper onClose={handleCloseModal}>
            {modalPage === 'addNewSection' && (
              <AddNewSec onClose={handleCloseModal} />
            )}
            {modalPage === 'chatSetting' && (
              <ChatSetting
                onClose={handleCloseModal}
                onOpenSections={() => setModalPage('sections')}
              />
            )}
            {modalPage === 'personalSetting' && (
              <PersonalSetting onClose={handleCloseModal} />
            )}
            {modalPage === 'sections' && (
              <Sections onClose={handleCloseSections} />
            )}
          </ModalWrapper>
        )}

      </div>
    </div>
  );
}
