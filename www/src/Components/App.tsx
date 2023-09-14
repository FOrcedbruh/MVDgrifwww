import { Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "./Pages/Register";
import mainGrif from './../images/main-grif.svg';
import Login from "./Pages/Login";
import { TestCategories }from "./Pages/TestCategoties";
import Quiz from "./Quiz";
import Home from "./Pages/Home";

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
    return (
        <section className="wrapper">
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
            </main>
        </section>
    )
}


export default App;