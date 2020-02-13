import './Header.css'
import React from 'react'

export default props =>
    <header className="header">
        <div className="container-fluid">
            <div className="row">
                <a className="logo col-md-2" href="/"><img src="images/logo.png" alt="Smartek-Life" /></a>
                <nav className="col-md-9">
                    <a href="/">Home</a>
                    <a href="/institucional">Sobre mim</a>
                    <a href="/servicos">Skills</a>
                    <a href="/projetos">Projetos</a>
                    <a href="/contato">Contato</a>
                </nav>
                <div className="hamburger hamburger--spin col-md-2">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>