import style from './../../styles/ComponentStyles/Register.module.css'
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('email не может быть пустым!');
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым!');
    const [formValid, setFormValid] = useState<boolean>(false);

    const [eye, setEye] = useState(true);


    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.name);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email!');
        }
        else {
            setEmailError('');
            setFormValid(true);
        }
    }


    
    const passworHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if(e.target.value.length < 3 || e.target.value.length > 15) {
            setPasswordError('Пароль должен быть длиннее 3 и меннее 15 символов!');
        }
        else if (!e.target.value) {
            setPasswordError('Пароль не должен быть пустым!');
        }
        else {
            setPasswordError('');
            setFormValid(true);
        }
    }


    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            // @ts-ignore
            case 'password': 
                setPasswordDirty(true);
            case 'email':
                setEmailDirty(true);
                break;
        }
    }

    return (
        <section className={style.aura}>
            <section className={style.regWin}>
            <form>
                <h1>Войти</h1>
                <div className={style.logDiv}>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Ваша почта..."/>
                    {(emailDirty && emailError) && <section className={style.error}>{emailError}</section>}
                </div>
                <div className={style.logDiv}>
                    <label htmlFor="password">Пароль</label>
                    <input onChange={e => passworHandler(e)} onBlur={e => blurHandler(e)} type={`${eye ? "password" : "text"}`} name="password" placeholder="Ваш пароль..."/>
                    <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                    {(passwordDirty && passwordError) && <section className={style.error}>{passwordError}</section>}
                </div>
                <button type='submit' className={style.regBtn} disabled={!formValid}>Войти</button>
            </form>
            <p>
            У вас еще нет аккаунта?
                <Link to='/регистрация'>Зарегистрироваться</Link>
            </p>
        </section>
        </section>
        
    )
}


export default Login;