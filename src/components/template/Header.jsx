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
        this.myRef = React.createRef()
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

    // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
    scrollToMyRef(e, name) {
        e.preventDefault()

        window.scrollTo(0, this.myRef.current.offsetTop)
        console.log(this)
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
                            <Col md={10}>
                                <nav>
                                    <a ref="cpDev1" onClick={e => this.scrollToMyRef(e, 'home')} href="/">Home</a>
                                    <a href="/institucional">Sobre mim</a>
                                    <a href="/servicos">Serviços</a>
                                    <a href="/servicos">Skills</a>
                                    <a href="/projetos">Projetos</a>
                                    <a href="/contato">Contato</a>
                                </nav>
                            </Col>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1280}>
                            <Col md={1} xs={4}>
                                <HamburgerArrow
                                    isActive={this.state.isActive}
                                    toggleButton={this.toggleButton}
                                    barColor="white"
                                    name="Slider"
                                />
                            </Col>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1280}>
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
                        </MediaQuery>
                    </Row>
                </div>
            </header>
        )
    }
}