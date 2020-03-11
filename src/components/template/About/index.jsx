import React from 'react'
import './Style.css'

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
                Telefone / <a className="whatsapp" rel="noopener noreferrer" href="https://wa.me/5562998442772" target="_blank">Whatsapp</a> : (62) 99844-2772<br />
                Goiânia - Goiás
            </label>
        </div>
    </section>