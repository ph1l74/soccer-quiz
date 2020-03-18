import React from 'react';
import MainContainer from './Copmonents/MainContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers';
import './App.css';

const initState = {
  questions: [],
  isLoading: false,
  curQuestion: 0,
  answers: []
}
const store = createStore(rootReducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {

  return (
    <Provider store={store}>
      <MainContainer></MainContainer>
    </Provider>
  );
}

export default App;
