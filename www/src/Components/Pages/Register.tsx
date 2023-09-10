import style from './../../styles/ComponentStyles/Register.module.css'
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState<boolean>(false);
    const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string>('Email не может быть пустым!');
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым!');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState<string>('Имя не может быть пустым!');
    const [nameDirty, setNameDirty] = useState<boolean>(false);
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
    
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (e.target.value.length > 0) {
            setNameDirty(true);
            setNameError('');
            setFormValid(true);
        }
        if (!e.target.value) {
            setNameError('Имя не может быть пустым!');
        }
    }


    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            // @ts-ignore
            case 'password': 
                setPasswordDirty(true);
                // @ts-ignore
            case 'email':
                setEmailDirty(true);
            case 'name':
                setNameDirty(true);
                break;
        }
    }

    return (
        <section className={style.regWin}>
            <form>
                <h1>Регистрация</h1>
                <div>
                    <label htmlFor="name">Ваше ФИО</label>
                    <input type="text" placeholder='Иванов Иван Иванович...' name='name' onChange={e => {nameHandler(e)}} onBlur={e => {blurHandler(e)}}/>
                    {(nameDirty && nameError) && <section className={style.error}>{nameError}</section>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Ваша почта..."/>
                    {(emailDirty && emailError) && <section className={style.error}>{emailError}</section>}
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input onChange={e => passworHandler(e)} onBlur={e => blurHandler(e)} type={`${eye ? "password" : "text"}`} name="password" placeholder="Ваш пароль..."/>
                    <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                    {(passwordDirty && passwordError) && <section className={style.error}>{passwordError}</section>}
                </div>
                <button type='submit' className={style.regBtn} disabled={!formValid}>Зарегистрироваться</button>
            </form>
            <p>У вас уже есть аккаунт?<Link to='/войти'>Войти</Link></p>
        </section>
    )
}


export default Register;