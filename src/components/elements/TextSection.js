import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function TextSection(props) {
    return (
        <div className={"cs_Section "+(props.variant==='dark' ? "dark" : "light")}>
            <Container>
                <Row>
                    <Col sm={12}>
                {
                    props.heading!==undefined ? <h3 className="cs_Headline">{props.heading}</h3> : ""
                }
                
                {
                    props.render!== undefined ? (props.render) : (<p className="cs_Text">{props.text}</p>)
                }
                {
                    props.children
                }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
