import './Header.css'
import React, { Component } from 'react'
import logo from '../../images/logo-bruno.png'
import { HamburgerArrow } from 'react-animated-burgers'
import MediaQuery from 'react-responsive'
import { Col, Row } from 'react-bootstrap'

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            activeClass: 'header',
            isActive: false
        }
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 200) {
            this.setState({
                activeClass: 'header active-header'
            })
        } else {
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
                    <Row>
                        <Col md={2} xs={8}>
                            <a className="logo" href="/"><img src={logo} className="logo-white" alt="Bruno Web" /></a>
                        </Col>
                        <MediaQuery minDeviceWidth={1280}>
                            <Col md={8}>
                                <nav>
                                    <a href="/">Home</a>
                                    <a href="/institucional">Sobre mim</a>
                                    <a href="/servicos">Serviços</a>
                                    <a href="/servicos">Skills</a>
                                    <a href="/projetos">Projetos</a>
                                    <a href="/contato">Contato</a>
                                </nav>
                            </Col>
                        </MediaQuery>
                        <Col md={1} xs={4}>
                            <MediaQuery maxDeviceWidth={1280}>
                                <HamburgerArrow
                                    isActive={this.state.isActive}
                                    toggleButton={this.toggleButton}
                                    barColor="white"
                                    name="Slider"
                                />
                            </MediaQuery>
                        </Col>
                        <Col md={12}>
                            <nav className={this.state.isActive ? 'active-menu' : ''}>
                                <a className="menu" href="/">Home</a>
                                <a className="menu" href="/institucional">Sobre mim</a>
                                <a className="menu" href="/servicos">Serviços</a>
                                <a className="menu" href="/servicos">Skills</a>
                                <a className="menu" href="/projetos">Projetos</a>
                                <a className="menu" href="/contato">Contato</a>
                            </nav>
                        </Col>
                    </Row>
                </div>
            </header>
        )
    }
}