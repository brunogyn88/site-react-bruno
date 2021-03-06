import React from 'react'
import './Style.css'
import ScrollAnimation from 'react-animate-on-scroll';
import suprem from '../../../images/suprem.jpg'
import maispetro from '../../../images/maispetro.jpg'
import showmusic from '../../../images/showmusic.jpg'
import appsupremandroid from '../../../images/app-suprem-android.jpg'
import appsupremios from '../../../images/app-suprem-ios.jpg'

export default props =>
    <section id="project">
        <div className="container">
            <h1>Projetos</h1>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="https://suprem.cash/" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={suprem} className="logo-project" alt="Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="https://maispetro.com.br/" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={maispetro} className="logo-project" alt="Mais Petro" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="http://showmusic.me/" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={showmusic} className="logo-project" alt="Show Music" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="https://play.google.com/store/apps/details?id=suprem.cash" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={appsupremandroid} className="logo-project" alt="App Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="https://apps.apple.com/us/app/suprem-cash/id1488930727" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={appsupremios} className="logo-project" alt="App Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>