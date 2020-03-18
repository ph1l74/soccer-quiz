import React, { useState, useEffect } from 'react';
import Answer from './Answer'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux';
import { nextQuestion } from '../Actions';

const Card = ({ questionData, curNum, num, setCurNum }) => {

    const [isVisible, setisVisible] = useState(false);
    const countQuestion = useSelector(state => state.countQuestion);
    const dispatch = useDispatch();

    useEffect(() => {
        countQuestion === num ? setisVisible(true) : setisVisible(false)
    })

    const handleClick = (e) => {
        dispatch(nextQuestion(countQuestion + 1));
    }

    return (
        <div className={`card sq-card ${isVisible ? "sq-visible" : "sq-invisible"}`}>
            <div className="card-image">
                <figure className="image is-16by9">
                    <img src={questionData.img ? questionData.img : "https://s.ill.in.ua/i/news/630x373/404/404915.jpg"} />
                </figure>
                <div className="card-content is-overlay is-vertical-center is-horisontal-center sq-gradiented">
                    <div className="content has-text-centered">
                        <p className="title">{questionData.text}</p>
                    </div>
                </div>
            </div>
            {questionData.answers.map((a, i) => {
                return <Answer answerText={a} clickHandler={handleClick} key={`answer_${i}`}></Answer>
            })}
        </div>
    )
}

export default Card;