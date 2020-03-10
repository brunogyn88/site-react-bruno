import './Style.css'
import React, { Component } from 'react'
import logo from '../../../images/logo-bruno.png'
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
  
    scrollToMyRef(e, name) {
        e.preventDefault()
        window.scrollTo({
            top: document.getElementById(name).offsetTop,
            behavior: "smooth"
        })
        this.setState({
            isActive: !this.state.isActive
        })
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
                                    <a onClick={e => this.scrollToMyRef(e, 'home')} href="/#">Home</a>
                                    <a onClick={e => this.scrollToMyRef(e, 'about')} href="/#">Sobre mim</a>
                                    <a onClick={e => this.scrollToMyRef(e, 'service')} href="/#" >Serviços</a>
                                    <a onClick={e => this.scrollToMyRef(e, 'skill')} href="/#" >Habilidades</a>
                                    <a onClick={e => this.scrollToMyRef(e, 'project')} href="/#" >Projetos</a>
                                    <a onClick={e => this.scrollToMyRef(e, 'contact')} href="/#">Contato</a>
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
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'home')} href="/#">Home</a>
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'about')} href="/#">Sobre mim</a>
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'service')} href="/#" >Serviços</a>
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'skill')} href="/#" >Habilidades</a>
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'project')} href="/#" >Projetos</a>
                                    <a className="menu" onClick={e => this.scrollToMyRef(e, 'contact')} href="/#">Contato</a>
                                </nav>
                            </Col>
                        </MediaQuery>
                    </Row>
                </div>
            </header>
        )
    }
}