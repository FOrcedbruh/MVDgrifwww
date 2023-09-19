import style from './../../styles/ComponentStyles/Register.module.css'
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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


    let [clas, setClas] = useState<string>('');


    const handleClass = (e: SelectChangeEvent) => {
        setClas(e.target.value as string)
    }

    let [gender, setGender] = useState<string>('');

    const handleGender = (e: SelectChangeEvent) => {
        setGender(e.target.value as string);
    }

    return (
        <section className={style.aura}>
            <section className={style.regWin}>
            <form>
            <h1>Регистрация</h1>
            <section className={style.inputWindows}>
                    <section className={style.inputs}>
                        <div className={style.regDiv}>
                            <label htmlFor="name">Ваше ФИО</label>
                            <input type="text" placeholder='Иванов Иван Иванович...' name='name' onChange={e => {nameHandler(e)}} onBlur={e => {blurHandler(e)}}/>
                            {(nameDirty && nameError) && <section className={style.error}>{nameError}</section>}
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="email">Email</label>
                            <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="Ваша почта..."/>
                            {(emailDirty && emailError) && <section className={style.error}>{emailError}</section>}
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="region">Ваш Регион</label>
                            <input type="text" name='region' placeholder='Ваш Регион...'/>
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="city">Ваш Город</label>
                            <input type="text" name='city' placeholder='Ваш Город...'/>
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="gender">Ваш пол</label>
                            <Select label="Ваш пол" color='secondary' value={gender} onChange={handleGender} style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                <MenuItem value={"Мужской"}>Мужской</MenuItem>
                                <MenuItem value={"Женский"}>Женский</MenuItem>
                            </Select>
                        </div>
                    </section>
                    <section className={style.inputs}>
                        <div className={style.regDiv}>
                            <label htmlFor="class">Ваш класс</label>
                            <Select label="Ваш класс" color='secondary' value={clas} onChange={handleClass} style={{width: 100}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard">
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>

                            </Select>
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="school">Ваша школа(полное название)</label>
                            <input type="text" name='school' placeholder='Ваша школа...'/>
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="password">Придумайте пароль</label>
                            <input onChange={e => passworHandler(e)} onBlur={e => blurHandler(e)} type={`${eye ? "password" : "text"}`} name="password" placeholder="Ваш пароль..."/>
                            <div onClick={() => {setEye(!eye)}} className={style.eye}>{eye ? <VisibilityOutlinedIcon color='secondary'/> : <VisibilityOffOutlinedIcon color='secondary'/>}</div>
                            {(passwordDirty && passwordError) && <section className={style.error}>{passwordError}</section>}
                        </div>
                        <div className={style.regDiv}>
                            <label htmlFor="date">Дата рождения</label>
                            <input type="date" placeholder='Дата рождения'/>
                        </div>
                    </section>
            </section>
                <button type='submit' className={style.regBtn} disabled={!formValid}>Зарегистрироваться</button>
            </form>
            <p>У вас уже есть аккаунт?<Link to='/войти'>Войти</Link></p>
        </section>
        </section>
        
    )
}


export default Register;