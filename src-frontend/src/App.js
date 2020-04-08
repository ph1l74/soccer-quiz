import React, { useEffect, useState } from 'react';
import MainContainer from './Copmonents/MainContainer';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom'
import rootReducer from './Reducers';
import './App.css';

const initState = {
  rubrics: [],
  isLoading: false,
  curQuestion: 0,
  answers: []
}
const store = createStore(rootReducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  const [rubrics, setRubrics] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch("/data/data.json")
        .then((res) => res.json())
        .then((data) => {
          setRubrics(data);
        })

    };
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={() => <MainContainer rubricPath={"hui"} />}></Route>
        {rubrics.map((r, i) => (
          <Route
            path={"/" + r.path}
            exact component={
              () => <MainContainer rubricPath={r.path} />
            }
            key={"rub_" + i}
          />
        ))}
        <div></div>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
