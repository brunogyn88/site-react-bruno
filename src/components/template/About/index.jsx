import React from 'react'
import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    <section id="about">
        <div className="container">
            <h1>Sobre</h1>
            <label className="text-name-about">Bruno Alves</label>
            <label className="text-about">
                Desenvolvedor Full Stack<br />
                Programador e desenvolvedor há mais de 5 anos atuando diretamente no mercado.
                    Apaixonado por desenvolvimento web e mobile,
                    com experiência sólida na parte de front-end web/mobile,
                    bases sólidas em JavaScript, TypeScript, Angular,
                    React, ionic, html5, css, sass, PHP, Ruby on Rails e Node.
            </label>
            <label className="contact">
                Email / brunogyn.eng@gmail.com<br />
                Goiânia - Goiás
            </label>
            <a href="https://www.linkedin.com/in/bruno-alves-sousa/" rel="noopener noreferrer" target="_blank" className="btn-social">
                <FontAwesomeIcon className="icon-service-2" icon={["fab", "linkedin"]} />
            </a>

        </div>
    </section>