import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { startLoading, addData, stopLoading } from '../Actions';
import axios from 'axios';


function MainContainer() {
    const getQuestions = useSelector(state => state.questions);
    const getAnswers = useSelector(state => state.answers);
    const curQuestion = useSelector(state => state.curQuestion);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();


    useEffect(() => {

        const fetchData = async () => {
            dispatch(startLoading());
            const res = await axios("/api/coef");
            dispatch(addData(res.data));
            dispatch(stopLoading());
        };

        fetchData();
    }, []);

    return (
        <div className="main">
            <div className="sq-content">
                <section className="hero is-success is-fullheight is-bold">
                    {isLoading ? (
                        <div className="sq-loader-bg">
                            <div className="sq-loader">
                                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                            </div>
                        </div>
                    ) : (<div></div>)}
                    <div className="hero-head">
                        <header className="navbar">
                            <div className="container is-centered">
                                <div className="navbar-brand">
                                    <a className="navbar-item" href="#">
                                        <img src="img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="hero-body">
                        <div id="contentArea" className="container has-text-centered">
                            <div className="columns is-centered">
                                {
                                    getQuestions && getQuestions.length > 0 ? (
                                        <div
                                            className="column is-one-column-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                                            {getQuestions.map((q, i) => {
                                                return <Card questionData={q} key={`card_${i}`} num={i}></Card>
                                            })}
                                            {
                                                curQuestion === getQuestions.length ?
                                                    (
                                                        <div className="sq-results">
                                                            <div className="sq-results-header is-size-3">Молодец!</div>
                                                            <div className="sq-result-text is-size-5"></div>
                                                            <div className="sq-result-answers is-size-5">Твои ответы:</div>
                                                            {getAnswers.map((a, i) => (
                                                                <div className="sq-result-answer is-size-4">
                                                                    <div className="sq-result-answer-text">{a}</div>
                                                                    <span>—</span>
                                                                    <div className="sq-result-answer-coef">Коэф. {getQuestions[i].coef}</div>
                                                                </div>
                                                            ))}
                                                            <div className="sq-result-aftertext is-size-5">Задепозить 1000, получишь бонус ещё 1000₽. В итоге поставив 1000₽ на победу Барселоны получишь 2300₽!</div>
                                                            <a className="button is-rounded" href="http://ph1l74.com/">ЗАДЕПОЗИТИТЬ</a>
                                                        </div>
                                                    )
                                                    : (null)
                                            }
                                        </div>)
                                        : (null)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainContainer;
