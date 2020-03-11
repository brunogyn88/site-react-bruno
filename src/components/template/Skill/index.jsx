import React from 'react'
import './Style.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import rorimage from '../../../images/ror.png'
import ProgressSkill from '../../ProgressSkill'

export default props =>
    <section id="skill">
        <div className="container">
            <h1>Habilidades</h1>
            <ProgressSkill icon="angular" width="90" name="Angular" />
            <ProgressSkill icon="react" width="70" name="React" />
            <ProgressSkill icon="html5" width="100" name="Html5" />
            <ProgressSkill icon="css3-alt" width="100" name="Css" />
            <ProgressSkill icon="sass" width="100" name="Sass" />
            <ProgressSkill icon="js" width="100" name="Javascript" />
            <ProgressSkill icon="php" width="80" name="Php" />
            <div className="row">
                <div className="col-md-2">
                    <img className="img-rails" src={rorimage} alt="Ruby On Rails" />
                    <label className="text-name">Rails</label>
                </div>
                <div className="col-md-10">
                    <ProgressBar animated now={90} />
                </div>
            </div>
            <ProgressSkill icon="node" width="80" name="Node" />
            <ProgressSkill icon="android" width="100" name="Android" />
            <ProgressSkill icon="apple" width="100" name="iOS" />
        </div>
    </section>