import React from 'react'
import './Style.css'
import ScrollAnimation from 'react-animate-on-scroll';
import suprem from '../../../images/suprem.jpg'
import maispetro from '../../../images/maispetro.jpg'
import showmusic from '../../../images/showmusic.jpg'

export default props =>
    <section id="project">
        <div className="container">
            <h1>Projetos</h1>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="/#" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={suprem} className="logo-project" alt="Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="/#" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={maispetro} className="logo-project" alt="Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="/#" rel="noopener noreferrer" target="_blank" className="box-project">
                            <img src={showmusic} className="logo-project" alt="Suprem Cash" />
                        </a>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>