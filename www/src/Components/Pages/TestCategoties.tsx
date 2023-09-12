import style from './../../styles/ComponentStyles/TestCategories.module.css';
import grif from './../../images/testGrif.svg';
import { Link } from 'react-router-dom';



const TestItem: React.FC = () => {
    return (
        <section className={style.categories}>
            <div>
                <h3>Основы программирования</h3>
                <article>
                    <p><Link to='./основы_программирования'>уровень: легкий</Link></p>
                </article>
            </div>
        </section>
    )
}


const TestCategories: React.FC = () => {




    return (
        <section className={style.window}>
            <div className={style.tests}>
                <h1>Тесты</h1>
                <TestItem />
            </div>
            <div className={style.grif}>
                <img src={grif}/>
            </div>
        </section>
    )
}



export default TestCategories;