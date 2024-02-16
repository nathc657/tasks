import React from "react";
import "./App.css";
import pic from "./Fishhh.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript ft NATHAN CHEN Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>WOAH HEADER???</h1>
            <img src={pic} alt="FISH PIC PLEASE??" width="100" height="50" />
            <ol>
                <li>GAAHHH</li>
                <li>EUGHHH</li>
                <li>BAHHHH</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World!
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="App-rectangle"></div>
                    </Col>
                    <Col>
                        <div className="App-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
