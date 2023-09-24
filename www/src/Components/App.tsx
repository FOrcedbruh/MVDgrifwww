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
import { useInView }from 'react-intersection-observer'
import Profile from "./Pages/Profile";


const Main: React.FC = () => {

    const {ref, inView, entry} = useInView({
        threshold: 0.3
    })

    return (
        <div className={`welcome ${inView ? "view" : ""}`} ref={ref}>
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
    }

    useEffect(() => {
        window.addEventListener('scroll', progress);

        return () => {window.removeEventListener('scroll', progress)};
    }, []);

    return (
        <>
            <section className="wrapper">
                <div className="progressBar" style={{width: `${percent}%`}}></div>
                <Layout />
                <main className="container">
                    <Main />
                    <img src={mainGrif} className="mainGrif"/>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/Профиль" element={<Profile />}/>
                        <Route path='/Тесты' element={<TestCategories />}/>
                        <Route path="Тесты/:title" element={<Quiz />}/>
                        <Route path='/Регистрация' element={<Register />}/>
                        <Route path='/Войти' element={<Login />}/>
                    </Routes>
                </main>
                <TopButton />
            </section>
        </>
        
    )
}


export default App;