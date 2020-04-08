import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { startLoading, addData, stopLoading } from '../Actions';


function MainContainer({ rubricPath }) {

    const getQuizData = useSelector(state => state.rubrics.filter((r) => r.path === rubricPath)[0]);
    const getAnswers = useSelector(state => state.answers);
    const curQuestion = useSelector(state => state.curQuestion);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();


    useEffect(() => {

        const fetchData = async () => {
            dispatch(startLoading());
            const res = await fetch("/data/data.json")
                .then((res) => res.json())
                .then((data) => {
                    dispatch(addData(data));
                })
                .then(() => {
                    dispatch(stopLoading());
                });
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
                                    getQuizData && getQuizData.questions.length > 0 ? (
                                        <div
                                            className="column is-one-column-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                                            {getQuizData.questions.map((q, i) => {
                                                return <Card questionData={q} key={`card_${i}`} num={i}></Card>
                                            })}
                                            {
                                                curQuestion === getQuizData.questions.length ?
                                                    (
                                                        <div className="sq-results">
                                                            <div className="sq-results-header is-size-3">Молодец!</div>
                                                            <div className="sq-result-text is-size-5"></div>
                                                            <div className="sq-result-answers is-size-5">Твои ответы:</div>
                                                            {getAnswers.map((a, i) => (
                                                                <div className="sq-result-answer is-size-4">
                                                                    <div className="sq-result-answer-text">{a}</div>
                                                                    <span>—</span>
                                                                    <div className="sq-result-answer-coef">Коэф. {getQuizData.questions[i].coef}</div>
                                                                </div>
                                                            ))}
                                                            <div className="sq-result-aftertext is-size-5">{getQuizData.footerText }</div>
                                                            <a className="button is-rounded" href={getQuizData.buttonURL}>{getQuizData.buttonText}</a>
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
