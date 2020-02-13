import './App.css'
import React from 'react'

import Main from '../components/template/Main'
import Footer from '../components/template/Footer'
import Home from '../components/template/Home'

export default props =>
    <div className="app">
        <Main>
            <Home />
        </Main>
        <Footer />
    </div>