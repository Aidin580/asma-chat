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

import './Screen-styles/Home.css';
import { useEffect } from 'react';

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

        const buttons = document.querySelectorAll(".btn2");
        buttons.forEach(btn => {
            btn.addEventListener("click", handleClick);
        });

        return () => {
            buttons.forEach(btn => {
                btn.removeEventListener("click", handleClick);
            });
        };
    }, []);
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

        const buttons = document.querySelectorAll(".btn3");
        buttons.forEach(btn => {
            btn.addEventListener("click", handleClick);
        });

        return () => {
            buttons.forEach(btn => {
                btn.removeEventListener("click", handleClick);
            });
        };
    }, []);

    return (
        <div className="container2">
            <div className="content2">
                <div className="asma-logo2">
                    <img src={logo} alt="logo and Name" />
                </div>
                <div className="saying-welcome2">
                    <h1 className="twc2">TOGETHER WE CAN</h1>
                    <p className="togetxt2">به چت سازمانی گروه اسما خوش آمدید,وارد حساب کاربری خود شوید.</p>
                </div>

                <div className="pages">
                    <div className="scroll">
                        <div className="sjm-vip">
                            <img src={sjm} alt="sjm vip logo" />
                            <h3>بخش ویژه سامانه جامع</h3>
                            <p>SJM VIP CHANNEL</p>
                            <button className="btn2">ورود به بخش<img src={enter} alt='enter logo'/></button>
                        </div>

                        <div className="salon-star">
                            <img src={salon} style={{ width: "4vw" }} alt="salon star logo" />
                            <h3>بخش ویژه سالن استار</h3>
                            <p>SALON STAR CHANNEL</p>
                            <button className="btn2">ورود به بخش<img src={enter} alt='enter logo'/></button>
                        </div>

                        <div className="animation">
                            <img src={animation} style={{ width: "3.3vw" }} alt="animation logo" />
                            <h3>بخش ویژه انیمیشن</h3>
                            <p>ANIMATION CHANNEL</p>
                            <button className="btn2">ورود به بخش<img src={enter} alt='enter logo'/></button>
                        </div>

                        <div className="leader-chat">
                            <img src={leaders} style={{ width: "3.3vw" }} alt="leaders chat logo" />
                            <h3>چت ویژه لیدرها</h3>
                            <p>LEADERS CHAT</p>
                            <button className="btn2">ورود به بخش<img src={enter} alt='enter logo'/></button>
                        </div>

                        <div className="ceo-chat">
                            <img src={ceo} style={{ width: "3.3vw" }} alt="ceo chat logo" />
                            <h3>چت ویژه مدیران</h3>
                            <p>CEO CHAT</p>
                            <button className="btn2">ورود به بخش<img src={enter} alt='enter logo'/></button>
                        </div>
                    </div>
                </div>

                <div className="home-setting">
                    <button className="btn3">تنظیمات چت&nbsp;&nbsp;&nbsp;&nbsp;<img src={gear} style={{ width: "0.9vw" }} alt="chat setting" /></button>

                    <button className="btn3">تنظیمات شخصی&nbsp;&nbsp;&nbsp;<img src={accset} style={{ width: "1vw" }} alt="account setting" /></button>

                    <button className="btn3">ساخت بخش جدید&nbsp;&nbsp;&nbsp;<img src={add} style={{ width: "1vw" }} alt="add a new section" /></button>
                </div>

                <div className="online-users">
                    <p className="online-per">اعضای آنلاین</p>
                    <p className="online-en">ONLINE USERS</p>
                    <div className="scroll2">

                        <div>yrtreyy</div>
                        
                        <div>yryrttr</div>
                        
                        <div>ytrtryyef</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>


<div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                        
                        <div>esdlksnflk/j</div>
                    </div>
                </div>
            </div>
        </div>
    )
}