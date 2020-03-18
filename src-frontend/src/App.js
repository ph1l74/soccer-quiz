import React, { useEffect, useState } from 'react';
import Card from './Copmonents/Card';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers';
import axios from 'axios';
import './App.css';

const store = createStore(rootReducer, { questions: [], countQuestion: 0 })

function App() {
  const [data, setData] = useState({ questions: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [curNum, setCurNum] = useState(0);


  useEffect(() => {
    setCurNum(0);
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios("http://localhost:80/api/coef");
      setData({ questions: res.data });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Provider store={store}>
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
                  {data.questions && data.questions.length > 0 ? (
                    <div
                      className="column is-one-column-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd">
                      {data.questions.map((q, i) => {
                        return <Card questionData={q} key={`card_${i}`} curNum={curNum} num={i} setCurNum={setCurNum}></Card>
                      })}
                    </div>)
                    : (<div></div>)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Provider>
  );
}

export default App;
