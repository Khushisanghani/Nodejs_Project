import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './Login';

function Home() {
    return (
        <Container className="mt-2">
            <Row>
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center align-items-center text-center"
                    style={{ minHeight: '100px' }}
                >
                    <div>
                        <h1>Welcome to My POS system</h1>
                        <h4 md={6}>
                           Sell better, manage your entire business, and join the digital revolution.
                        </h4>
                    </div>
                </Col>
                <Col md={6}>
                    <Login/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
