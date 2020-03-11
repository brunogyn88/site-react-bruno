import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProgressSkill.css'

export default class ProgressSkill extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <FontAwesomeIcon className="icon-service-2" icon={["fab", this.props.icon]} />
                    <label className="text-name">{this.props.name}</label>
                </div>
                <div className="col-md-10">
                    <ProgressBar animated now={this.props.width} />
                </div>
            </div>
        )
    }
}

