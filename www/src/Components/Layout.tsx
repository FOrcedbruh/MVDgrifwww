import style from './../styles/ComponentStyles/Layout.module.css';
import { NavLink, Link } from 'react-router-dom'
import gerb from './../images/logo-gerb.svg';
import grif from './../images/logo-grif.svg';
import line from './../images/logo-line.svg';
import { useState, MouseEvent } from 'react';
import ThemeThumb from './ThemeThumb';


const Home: React.FC = () => {
    return (
        <ul className={style.innerUl}>
            <li><Link to='/'>Общая информация</Link></li>
            <li><Link to='/'>Документы</Link></li>
            <li><Link to='/'>График</Link></li>
            <li><Link to='/'>Галерея</Link></li>
            <li><Link to='/'>Контакты</Link></li>
        </ul>
    )
}

const Materials: React.FC = () => {
    return (
        <ul className={style.innerUl}>
            <li>
                <Link to='/тесты'>Тестовые задания</Link>
            </li>
            <li>
                <Link to='/'>Работы</Link>
            </li>
            <li>
                <Link to='/'>Инструкция по прохождению тестовых заданий</Link>
            </li>
            <li>
                <Link to='/'>Рекомендуемая литература для подготовки</Link>
            </li>
        </ul>
    )
}




const Layout: React.FC = () => {

    const [home, setHome] = useState<boolean>(false);
    const [materials, setMaterials] = useState<boolean>(false);

    const homeHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(true);
    }
    const homeOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setHome(false);
    }
    const matHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(true);
    }
    const matOutHandler = (e: MouseEvent<HTMLLIElement>) => {
        setMaterials(false);
    }

    
    return (
        <header className={`${style.window} header`}>
            <div className={style.logo}>
                <img src={gerb}/>
                <img src={line}/>
                <img src={grif}/>
            </div>
            <nav>
                <ul className={style.main}>
                    <li onMouseOver={homeHandler} onMouseOut={homeOutHandler}>
                        <NavLink to='/' >Главная</NavLink>
                       {home  && <Home/>}
                    </li>
                    <li onMouseOver={matHandler} onMouseOut={matOutHandler}>
                        <NavLink to='/материалы'>Материалы</NavLink>
                        {materials && <Materials />}
                    </li>
                    <li>
                        <NavLink to='/олимпиада'>Олимпиада</NavLink>
                    </li>
                    <li>
                        <NavLink to='/поддержка'>Поддержка</NavLink>
                    </li>
                </ul>
            </nav>
            <ThemeThumb />
            <div className={style.profile}>
                <Link to='войти'>Войти</Link>
                <Link to='регистрация'><span>Регистрация</span></Link>
            </div>
        </header>
    )
}




export default Layout;