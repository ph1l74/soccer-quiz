import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { startLoading, addData, stopLoading } from '../Actions';
import axios from 'axios';


function MainContainer() {
    const getQuestions = useSelector(state => state );
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();


    useEffect(() => {

        const fetchData = async () => {
            dispatch(startLoading());
            const res = await axios("http://localhost:80/api/coef");
            dispatch(addData(res.data));
            dispatch(stopLoading());
            console.log(getQuestions)
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
                                {getQuestions.questions && getQuestions.questions.length > 0 ? (
                                    <div
                                        className="column is-one-column-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                                        {getQuestions.questions.map((q, i) => {
                                            return <Card questionData={q} key={`card_${i}`} num={i}></Card>
                                        })}
                                    </div>)
                                    : (<div></div>)}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainContainer;
