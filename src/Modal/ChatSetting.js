import close from '../images/close.svg';
import gear from '../images/gear.svg';
import hamburger_list from '../images/hamburger-list.svg';
import star from '../images/star.svg';
import membeers from '../images/members.svg';

import '../Modal/Modal-styles/ChatSetting.css';
import RippleEffect from '../Effect/RippleEffect';

export default function ChatSetting({ onClose, onOpenSections, onOpenMemberSetting, onOpenTask }) {
  const sections = [
    {
      title: 'بخش ها',
      desc: 'مدیریت و ویرایش و سازماندهی بخش های چت',
      icon: hamburger_list,
      onClick: onOpenSections,
    },
    {
      title: 'مدیریت اعضاء',
      desc: 'ویرایش اطلاعات، افزودن، حذف و تنظیمات کلی مربوط به اعضاء',
      icon: membeers,
      onClick: onOpenMemberSetting,
    },
    {
      title: 'تسک ها',
      desc: 'تنظیم تمام گزینه های مربوط به تسک ها و مشاهده تسک های در جریان',
      icon: star,
      onClick: onOpenTask,
      id: 'last',
    },
  ];

  return (
    <div className="modal-container-cs">
      <div className="close-container">
        <button className="close-icon" onClick={onClose}>
          <img src={close} alt="close" />
        </button>
      </div>

      <div className="txt">
        <p><img src={gear} alt="gear icon" />&nbsp;تنظیمات چت&nbsp;</p>
        <p>| مدیر لیدر گرامی, قبل از هرگونه تغییر لطفا با اعضا هماهنگ کنید.</p>
      </div>

      <div className="settings">
        {sections.map(({ title, desc, icon, onClick, id }, i) => (
          <div key={i} className={title === 'بخش ها' ? 'sections' : title === 'مدیریت اعضاء' ? 'members-settings' : 'tasks'}>
            <RippleEffect className="label-effect" {...(id ? { id } : {})} onClick={onClick}>
              <div className="texts-keeper">
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
              <div className="icon-keeper">
                <img src={icon} alt={`${title}-icon`} />
              </div>
            </RippleEffect>
          </div>
        ))}
      </div>
    </div>
  );
}