import React from 'react'
import './Project.css'
import ScrollAnimation from 'react-animate-on-scroll';

export default props =>
    <section id="project">
        <div className="container">
            <h1>Projetos</h1>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                        <a href="#" className="box-project"></a>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>