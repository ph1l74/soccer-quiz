import React, { useState, useEffect } from 'react';
import Answer from './Answer'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { nextQuestion, addAnswer } from '../Actions';

const Card = ({ questionData, num }) => {

    const [isVisible, setisVisible] = useState(false);
    const curQuestion = useSelector(state => state.curQuestion);
    const dispatch = useDispatch();

    useEffect(() => {
        curQuestion === num ? setisVisible(true) : setisVisible(false)
    })

    const handleClick = (e) => {
        const answerNumber = e.target.getAttribute("data-num")
        dispatch(nextQuestion(curQuestion + 1));
        dispatch(addAnswer(questionData.answers[answerNumber]))
    }

    return (
        <div className={`card sq-card ${isVisible ? "sq-visible" : "sq-invisible"}`}>
            <div className="card-image">
                <figure className="image is-16by9">
                    <div className="sq-card-cover" style={{ backgroundImage:  questionData.img ? `url(${questionData.img})` : `url(https://s.ill.in.ua/i/news/630x373/404/404915.jpg)` }} ></div>
                </figure>
                <div className="card-content is-overlay is-vertical-center is-horisontal-center sq-gradiented">
                    <div className="content has-text-centered">
                        <p className="title">{questionData.text}</p>
                    </div>
                </div>
            </div>
            {questionData.answers.map((a, i) => {
                return <Answer answerText={a} clickHandler={handleClick} key={`answer_${i}`} answerNumber={i}></Answer>
            })}
        </div>
    )
}

export default Card;