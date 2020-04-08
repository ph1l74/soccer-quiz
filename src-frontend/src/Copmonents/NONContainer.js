import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';


function NonContainer() {

    const isLoading = useSelector(state => state.isLoading);


    return (
        <div className="main">
            <div className="sq-content">
                <section className="hero is-danger is-fullheight is-bold">
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
                        <div id="contentArea" className="container has-text-centered has-text-white">
                            <div className="columns is-centered">
                                <div className="content is-medium">
                                    <h1 className="has-text-white">404</h1>
                                    <p>
                                        Такой страницы не существует
                                    </p>
                                    <a className="button is-rounded" href="/">Вернуться на главную</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default NonContainer;
