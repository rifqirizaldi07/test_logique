import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import Logos from  "../assets/logo.png"

const HomeScreen = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={6} lg={5} xs={12}>
                    <Card className="card-screen">
                        <Card.Body>
                            <div className="container">
                                <h2 className="text-center text-white">Musik Kito</h2>
                                <div className="mt-4 mb-4">
                                <Card.Img src={Logos} className="logo-screen"/>
                                </div>
                                <div className="col-md-12 mt-4 text-center">
                                    <Button className="button-screen col-md-10" onClick={() => navigate("/music")}>Click To Music</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen