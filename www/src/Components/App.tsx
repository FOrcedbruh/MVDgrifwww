import { Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "./Pages/Register";
import mainGrif from './../images/main-grif.svg';
import Login from "./Pages/Login";
import { TestCategories }from "./Pages/TestCategoties";
import Quiz from "./Quiz";
import Home from "./Pages/Home";
import { useState, useEffect } from "react";
import TopButton from "./TopButton";




const Main: React.FC = () => {
    return (
        <div className='welcome'>
            <p>
                <span>
                    ГРИФ.
                </span>
                первый полностью  бесплатный ресурс повышения уровня знаний в сфере IT. 
            </p>
        </div>
    )
}



const App: React.FC = () => {

    const [percent, setPercent] = useState<number>(0);

    const progress: any = () => {
        const windowScroll: number = window.scrollY;
        const height: number = 2398;
        setPercent(percent + (windowScroll / height) * 100);
        console.log(windowScroll);
    }

    useEffect(() => {
        window.addEventListener('scroll', progress);

        return () => {window.removeEventListener('scroll', progress)};
    }, []);

    return (
        <section className="wrapper">
            <div className="progressBar" style={{width: `${percent}%`}}></div>
            <Layout />
            <main className="container">
                <Main />
                <img src={mainGrif} className="mainGrif"/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path='/Регистрация' element={<Register />}/>
                    <Route path='/Войти' element={<Login />}/>
                    <Route path='/Тесты' element={<TestCategories />}/>
                    <Route path="Тесты/:title" element={<Quiz />}/>
                </Routes>
                <TopButton />
            </main>
        </section>
    )
}


export default App;