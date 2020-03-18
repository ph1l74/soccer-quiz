import React from 'react';

const Answer = ({ answerText, clickHandler }) => (
    <footer className="card-footer">
        <a href="#" onClick={clickHandler} className="card-footer-item sq-answer">{answerText}</a>
    </footer>
)

export default Answer;