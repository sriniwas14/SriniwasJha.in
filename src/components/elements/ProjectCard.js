import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomImage from './CustomImage'

export default function ProjectCard(props) {
    return (
        <Link to={`/projects/${props.project.projectId}`}>
            <div className="cs_ProjectCard">
                <CustomImage height={200} alt={props.project.description} className="img-fluid" src={props.project.src} />
                <div className="cs_ProjectCard_details">
                    {
                        props.project.badges.map(badge => <Badge key={badge} pill className="customBadge" variant="primary">{badge}</Badge> )
                    }
                </div>
                <h4>{props.project.title}</h4>
                <p>{props.project.description}</p>
            </div>
        </Link>
    )
}