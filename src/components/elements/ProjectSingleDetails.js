import React from 'react'
import { Badge } from 'react-bootstrap'

const localStyle = {
    label: {
        fontWeight: "bold"
    }
};

export default function ProjectSingleDetails(props) {
    return (
        <div>
            <div>
                <span style={localStyle.label}>Platforms : </span>
                {
                    props.details.platforms.map(platform => <Badge className="customBadge" pill variant="primary">{platform}</Badge> )
                }
            </div>
            <div>
                <span style={localStyle.label}>Status : </span>
                { [props.details.status] }
            </div>
            <div>
                <span style={localStyle.label}>Release Date : </span>
                <span>{ props.details.releaseDate }</span>
            </div>
        </div>
    )
}
