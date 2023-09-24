import style from './../../styles/ComponentStyles/Profile.module.css';
import newsLine from './../../images/newsLine.svg';
import { instance } from '../AuthorizationData';
import { useEffect } from 'react';


const Profile: React.FC = () => {


    const authAPI = {
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
    })
    
    const privateInfo: Array<string> = ['Имя:', 'Пользователь:', 'Почта:', 'Регион:', 'Город:', 'Школа:', 'Дата рождения:'];

    const news: Array<string> = [
        'Придумали, как сделать лампы накаливания более энергоэффективными и долговечными', 'В России разработали систему для настройки оптимальной работы головного мозга', 'Проблема процессоров Intel'
    ]

    return (
        <>
            <section className={`${style.window} profile`}>
                <div className={style.topSector}>
                    <div className={style.userData}>
                        <h2> <span>Личные</span> данные</h2>
                        <ul>
                            {privateInfo.map(item => {return <li>{item}</li>})}
                        </ul>
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