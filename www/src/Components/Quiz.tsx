import style from './../styles/ComponentStyles/Quiz.module.css';
import { useState, useEffect } from 'react';
import Test from '../types/Test';
import { useNavigate } from 'react-router-dom';

interface CorrectType {
    correct: number;
}


const Questions: Array<Test> = [
    {
        title: "В каком году было крещение Руси?",
        variants: ["1988", "988", "960", "1380"],
        correct: 1
    },
    {
        title: "Как обозначается давление в физике?",
        variants: ["V", "P", "F", "p"],
        correct: 3
    },
    {
        title: "React - это...",
        variants: ["библиотека", "фреймворк", "плагин", "ключевое слово"],
        correct: 0
    },
    {
        title: "Самая большая страна в мире",
        variants: ["Германия", "Америка", "Швеция", "Россия"],
        correct: 3
    }
]






const Result: React.FC<CorrectType> = ({correct}) => {
    return (
        <div className={style.result}>
            <h1>Правильных  ответов <span>{correct}</span> / {Questions.length}</h1>
        </div>
    )
}





const Quiz: React.FC = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }


    const [step, setStep] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
    const question = Questions[step];

    const OnClickVariant = (index: number) => {
        console.log(step, index);
        setStep(step + 1);
        if (index === question.correct)
        {
            setCorrect(correct + 1);
        }
    }
    if (step > Questions.length - 1) {
        return (
            <Result correct={correct}/>
        )
    }

    const percentage = Math.round(step / Questions.length * 100);
    return (
        <section className={style.quizWin}>
            <div className={style.quiz}>
                <div className={style.progress} style={{width: `${percentage}%`}}></div>
                <h1>{question.title}</h1>
                <section className={style.variants}>
                    {question.variants.map((text, index) => (<li key={index} onClick={() => OnClickVariant(index)}>{text}</li>))}
                </section>
            </div>
        </section>
    )
}

export default Quiz;