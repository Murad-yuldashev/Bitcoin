import React from "react";
import Logoimg from '../Images/logo.png';
import { Container, Row, Col } from 'reactstrap';

export default function Logo() {

    return (
        <>
            <Container>
                <Row>
                    <Col md='12' className="text-center mt-5">
                        <img src={Logoimg} alt="logotip" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}