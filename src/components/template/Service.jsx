import React from 'react'
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    <section id="service">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="content-service">
                        <FontAwesomeIcon className="icon-service" icon={["fas", "mobile"]} />
                        <label className="title-service">Desenvolvedor de Aplicativos</label>
                        <label className="subtitle-service">Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-service">
                        <FontAwesomeIcon className="icon-service" icon={["fas", "mobile"]} />
                        <label className="title-service">Desenvolvedor de Aplicativos</label>
                        <label className="subtitle-service">Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).</label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="content-service">
                        <FontAwesomeIcon className="icon-service" icon={["fas", "mobile"]} />
                        <label className="title-service">Desenvolvedor de Aplicativos</label>
                        <label className="subtitle-service">Desenvolvimento de Aplicativos para Celulares Android e iOS (iPhone).</label>
                    </div>
                </div>
            </div>
        </div>
    </section>
