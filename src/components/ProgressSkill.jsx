import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProgressSkill.css'

export default class ProgressSkill extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1">
                    <FontAwesomeIcon className="icon-service" icon={["fab", this.props.icon]} />
                </div>
                <div className="col-md-11">
                    <ProgressBar animated now={this.props.width} />
                </div>
            </div>
        )
    }
}

