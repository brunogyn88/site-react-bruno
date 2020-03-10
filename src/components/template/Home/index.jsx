import React from 'react'
import './Style.css'
import Typed from 'react-typed';

export default props =>
    <section id="home">
        <div className="container">
            <div className="content-types">
                <label className="text-fix-typed">Desenvolvedor de</label>
                <Typed
                    strings={['Sites', 'Aplicativos', 'Sistemas Web', 'Ecommerce']}
                    typeSpeed={150}
                    loop
                />
            </div>
        </div>

    </section>