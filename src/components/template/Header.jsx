import './Header.css'
import React, { Component } from 'react'

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            activeClass: 'header'
        }
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 200) {
            this.setState({
                activeClass: 'header active-header'
            })
        }else{
            this.setState({
                activeClass: 'header'
            })
        }
    }

    componentDidMount() {
        window.onscroll = () => this.handleScroll()
    }

    render() {
        return (
            <header className={this.state.activeClass}>
                <div className="container-fluid">
                    <div className="row">
                        <a className="logo col-md-2" href="/"><img src="images/logo.png" alt="Smartek-Life" /></a>
                        <nav className="col-md-9">
                            <a href="/">Home</a>
                            <a href="/institucional">Sobre mim</a>
                            <a href="/servicos">Serviços</a>
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
        )
    }
}