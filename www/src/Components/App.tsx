import { Route, Link, Routes } from "react-router-dom";
import Layout from "./Layout";
import Register from "./Pages/Register";
import mainGrif from './../images/main-grif.svg';
import Login from "./Pages/Login";
import TestCategories from "./Pages/TestCategoties";
import Quiz from "./Quiz";




const App: React.FC = () => {
    return (
        <section className="wrapper">
            <Layout />
            <main className="container">
                <img src={mainGrif} className="mainGrif"/>
                <Routes>
                    <Route path="/"/>
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