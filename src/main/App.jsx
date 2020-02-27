import './App.css'
import React from 'react'

import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Home from '../components/template/Home'
import About from '../components/template/About'
import Service from '../components/template/Service'
import Skill from '../components/template/Skill'
import Project from '../components/template/Project'
import Contact from '../components/template/Contact'

export default props =>
    <div className="app">
        <Main>
            <Home />
            <About />
            <Service />
            <Skill />
            <Project />
            <Contact />
        </Main>
        <Footer />
    </div>