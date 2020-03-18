import React from 'react';

const Answer = ({ answerText, clickHandler, answerNumber }) => (
    <footer className="card-footer">
        <a href="#" onClick={clickHandler} className="card-footer-item sq-answer" data-num={answerNumber}>{answerText}</a>
    </footer>
)

export default Answer;