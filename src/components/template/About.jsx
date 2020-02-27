import React from 'react'
import './About.css'

export default props =>
    <section id="about">
        <div className="container">
            <h1>Sobre</h1>
            <label className="text-name-about">Bruno Alves</label>
            <label className="text-about">
                Desenvolvedor Full Stack<br />
                Programador e desenvolvedor há mais de 5 anos atuando diretamente no mercado.
                    Apaixonado por desenvolvimento web e mobile,
                    com uma experiência sólida na parte de front-end web/mobile,
                    bases sólidas em JavaScript, TypeScript, Angular,
                    React, ionic3, html5, css, sass, PHP e Ruby on Rails.
            </label>
            <label className="contact">
                Telefone / <a className="whatsapp" href="https://wa.me/5562998442772" target="_blank">Whatsapp</a> : (62) 99844-2772<br/>
                Goiânia - Goiás
            </label>
        </div>
    </section>