import React from 'react'
import './Skill.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import rorimage from '../../images/ror.png'
import ProgressSkill from '../ProgressSkill'

export default props =>
    <section id="skill">
        <div className="container">
            <h1>Habilidades</h1>
            <ProgressSkill icon="angular" width="90" />
            <ProgressSkill icon="react" width="70" />
            <ProgressSkill icon="html5" width="100" />
            <ProgressSkill icon="css3-alt" width="100" />
            <ProgressSkill icon="sass" width="100" />
            <ProgressSkill icon="js" width="100" />
            <ProgressSkill icon="php" width="80" />
            <div className="row">
                <div className="col-md-1">
                    <img className="img-rails" src={rorimage} alt="Ruby On Rails" />
                </div>
                <div className="col-md-11">
                    <ProgressBar animated now={90} />
                </div>
            </div>

            <ProgressSkill icon="android" width="100" />
            <ProgressSkill icon="apple" width="100" />
        </div>
    </section>