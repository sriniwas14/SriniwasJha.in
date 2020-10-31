import React from 'react'
import { Badge } from 'react-bootstrap'

export default function ProjectCard(props) {
    return (
        <div className="cs_ProjectCard">
            <img className="img-fluid" src={props.project.src} />
            <div className="cs_ProjectCard_details">
                {
                    props.project.badges.map(badge => <Badge pill variant="primary">{badge}</Badge> )
                }
            </div>
            <h4>{props.project.title}</h4>
            <p>{props.project.description}</p>
        </div>
    )
}
