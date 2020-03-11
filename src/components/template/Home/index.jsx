import React from 'react'
import './Style.css'
import Typed from 'react-typed';
import MediaQuery from 'react-responsive'

export default props =>
    <section id="home">
        <div className="container">
            <div className="content-types">
                <label className="text-fix-typed">Desenvolvimento de</label>
                <MediaQuery maxDeviceWidth={480}>
                    <br />
                </MediaQuery>
                <Typed
                    strings={['Sites', 'Aplicativos', 'Sistemas Web', 'Ecommerce']}
                    typeSpeed={150}
                    loop
                />
            </div>
        </div>

    </section>