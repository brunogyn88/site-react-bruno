import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollAnimation from 'react-animate-on-scroll';

export default props =>
    <section id="service">
        <div className="container">
            <h1>Serviços</h1>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fas", "mobile-alt"]} />
                            <label className="title-service">Criação de Aplicativos</label>
                            <label className="subtitle-service">Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).</label>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fas", "code"]} />
                            <label className="title-service">Criação de Sites</label>
                            <label className="subtitle-service">Desenvolvedor de Sites, HotSites, especialista em HTML, CSS, JavaScript, PHP, Rails, MySql.</label>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fas", "file-code"]} />
                            <label className="title-service">Desenvolvedor Front-End</label>
                            <label className="subtitle-service">Especialista em HTML5, JavaScript, CSS, SASS, jQuery, BootStrap, AngularJS, React.js...</label>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fas", "laptop-code"]} />
                            <label className="title-service">Loja Virtual / Ecommerce</label>
                            <label className="subtitle-service">Criação de Loja Online, venda produtos ou receba pagamentos pela Internet.</label>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fas", "code"]} />
                            <label className="title-service">WordPress / Blog</label>
                            <label className="subtitle-service">Especialista WordPress e Programador PHP, criação de Blogs e Plugins.</label>
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-4">
                    <ScrollAnimation animateIn='bounceInRight' initiallyVisible={true}>
                        <div className="content-service">
                            <FontAwesomeIcon className="icon-service" icon={["fa", "keyboard"]} />
                            <label className="title-service">Desenvolvedor Back-End</label>
                            <label className="subtitle-service">Especialista em PHP, Ruby On Rails e Node</label>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    </section>
