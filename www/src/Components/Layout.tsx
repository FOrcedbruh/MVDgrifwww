import style from './../styles/ComponentStyles/Layout.module.css';
import { NavLink, Link } from 'react-router-dom'
import gerb from './../images/logo-gerb.svg';
import grif from './../images/logo-grif.svg';
import line from './../images/logo-line.svg';





const Layout: React.FC = () => {
    return (
        <header className={style.window}>
            <div className={style.logo}>
                <img src={gerb}/>
                <img src={line}/>
                <img src={grif}/>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to='/тесты'>Тесты</NavLink>
                    </li>
                    <li>
                        <NavLink to='/олимпиада'>Олимпиада</NavLink>
                    </li>
                    <li>
                        <NavLink to='/поддержка'>Поддержка</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={style.profile}>
                <Link to='войти'>Войти</Link>
                <Link to='регистрация'><span>Регистрация</span></Link>
            </div>
        </header>
    )
}

export default Layout;