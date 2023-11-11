import React from 'react';

import introLogo from "../../images/intro__logo.svg";

function Intro() {
    return (
        <div className="intro">
            <div className="intro__container">
                <div className="intro__info">
                    <div className="intro__text">
                        <h1 className="intro__title">Учебный проект студента<br />факультета<br />Веб-разработки.</h1>
                        <h2 className="intro__subtitle">Листайте ниже, чтобы узнать больше<br />про этот проект и его создателя.</h2>
                    </div>
                    <button className="intro__more">Узнать больше</button>
                </div>
                <img className="intro__logo" src={introLogo} alt="Intro logo"></img>
            </div>
        </div>
    )
}

export default Intro;