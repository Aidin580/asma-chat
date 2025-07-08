import './Screen-styles/Login.css'
import logo from '../images/Logo&Name.svg';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Login() {

    const Navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("این فیلد نمیتواند خالی باشد"),
            password: Yup.string().required("این فیلد نمیتواند خالی باشد"),
        }),
        onSubmit: (values) => {
            console.log(values);
            if (values.email === "test@test.com" && values.password === "1234") {
                Navigate("./home");
            } else {
                alert("اطلاعات نامعتبر است");
            }
        }
    })

    useEffect(() => {
        const btn = document.querySelector(".btn");
        if (!btn) return;

        const handleClick = function(e) {
            let ripple = document.createElement("span");
            ripple.classList.add("ripple");
            this.appendChild(ripple);
            let x = e.clientX - e.currentTarget.offsetLeft;
            let y = e.clientY - e.currentTarget.offsetTop;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => {
            ripple.remove();
            }, 300);
        };

        btn.addEventListener("click", handleClick);

        return () => {
            btn.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="container">
            <div className="content">
                <div className="asma-logo">
                    <img src={logo} alt="logo and Name" />
                </div>

                <div className="welcome-texts">
                    <h1 className="twc">TOGETHER WE CAN</h1>
                    <p className="togetxt">به چت سازمانی گروه اسما خوش آمدید,وارد حساب کاربری خود شوید.</p>
                    <p className="togetxt">همکار گرامی, نام کاربری و پسورد خود را از لیدر گروه خودتان بگیرید.</p>
                </div>

                <div className="form-keeper">
                    <form onSubmit={formik.handleSubmit}>

                        <div className="txt-inputs">

                        
                            <input
                                className="in"
                                type="text"
                                name="email"
                                placeholder="نام کاربری,شماره تماس یا ایمیل خود را وارد کنید"
                                autoCapitalize='none'
                                autoComplete="off"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                spellCheck={false}
                            />
                            {
                                formik.touched.email && formik.errors.email ? (<p style={{color: "red"}}>{formik.errors.email}</p>) : null
                            }


                            <input
                                className="in"
                                type="password"
                                name="password"
                                placeholder="رمز عبور خود را وارد کنید"
                                autoCapitalize='none'
                                autoCorrect='off'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                spellCheck={false}
                            />
                            {
                                formik.touched.password && formik.errors.password ? (<p style={{color: "red"}}>{formik.errors.password}</p>) : null
                            }


                        </div>
                        <div className="submit">
                            <button className="btn" type="submit">ورود به حساب کاربری</button>
                            <p className="sub-txt">رمزت رو فراموش کردی؟از لیدر گروهت بپرس</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}