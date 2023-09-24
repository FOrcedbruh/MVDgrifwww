import style from './../../styles/ComponentStyles/Profile.module.css';
import newsLine from './../../images/newsLine.svg';
import { instance } from '../AuthorizationData';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Profile: React.FC = () => {

    const [correctProfile, setCorrectProfile] = useState<boolean>(false);
    const [nameValue, setNamevalue] = useState<string>('');
    const [lnameValue, setLnameValue] = useState<string>('');
    const [usernameValue, setUsernameValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [regionValue, setRegionValue] = useState<string>('');
    const [cityValue, setCityValue] = useState<string>('');
    const [schoolValue, setSchoolValue] = useState<string>('');



    const correctProfileHandler = () => {
        setCorrectProfile(true);
        if (correctProfile) {
            setCorrectProfile(false);

        }
    }



    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNamevalue(e.target.value);
    }
    const lnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLnameValue(e.target.value);
    }
    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsernameValue(e.target.value);
    }
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    }
    const regionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegionValue(e.target.value);
    }
    const cityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCityValue(e.target.value);
    }
    const schoolHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSchoolValue(e.target.value);
    }






    /*const authAPI = {
        // профиль
        me(token: string) {
            // const token = localStorage.getItem('token')
            return instance.get('user/profile/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }
    }

    useEffect(() => {
        const token: string = '3ae7399c2fb938265eb2c46438e8f5862ac3f776';
        authAPI.me(token).then(res => res.data);
    })*/

    const news: Array<string> = [
        'Придумали, как сделать лампы накаливания более энергоэффективными и долговечными', 'В России разработали систему для настройки оптимальной работы головного мозга', 'Проблема процессоров Intel'
    ]

    return (
        <>
            <section className={`${style.window} profile`}>
                <div className={style.topSector}>
                    <div className={style.userData}>
                        
                        <h2> <span>Личные</span> данные</h2>
                        <Avatar />
                        <ul>
                            <li>Имя: {nameValue}
                                { correctProfile && <input type="text" value={nameValue} onChange={e => {nameHandler(e)}} name='name'/>}
                            </li>
                            <li>Фамилия: {lnameValue}
                                {correctProfile && <input type="text" value={lnameValue} onChange={e => {lnameHandler(e)}} name='last_name'/>}
                            </li>
                            <li>Пользователь: {usernameValue}
                                {correctProfile && <input type="text" value={usernameValue} onChange={e => {usernameHandler(e)}} name='username'/>}
                            </li>
                            <li>Почта: {emailValue}
                                {correctProfile && <input type="email" value={emailValue} onChange={e => {emailHandler(e)}} name='email'/>}
                            </li>
                            <li>Регион: {regionValue}
                                {correctProfile && <input type="region" value={regionValue} onChange={e => {regionHandler(e)}} name='region'/>}
                            </li>
                            <li>Город: {cityValue}
                                {correctProfile && <input type="city" value={cityValue} onChange={e => {cityHandler(e)}} name='city'/>}
                            </li>
                            <li>Школа: {schoolValue}
                                {correctProfile && <input type="school" value={schoolValue} onChange={e => {schoolHandler(e)}} name='city'/>}
                            </li>
                            <li>Дата рождения: 

                            </li>
                        </ul>
                        <Button variant='outlined' color='secondary' onClick={correctProfileHandler} >{correctProfile ? <p>Подтвердить изменения</p> : <p>Редактировать профиль</p>}</Button>
                    </div>
                    <div className={style.newsWin}>
                        <article>
                            НОВОСТИ
                        </article>
                        <img src={newsLine}/>
                        <div className={style.newItems}>
                            {news.map(item => {return (<div className={style.newItem}>
                                {item}
                            </div>)})}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default Profile;