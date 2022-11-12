import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPass = this.onChangeUserPass.bind(this);

    this.state = {
      email: "",
      pass: "",
    };
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserPass(e) {
    this.setState({ pass: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const loginObject = {
      email: this.state.email,
      pass: this.state.pass,
    };
  }

  render() {
    return (
      <main>
        <Container className="login-container">
          <Row>
            <Col sm="12" xs="12" md={{ span: 4, offset: 4 }}>
              <Row>
                <h2 className="text-center login-title">Iniciar Sesión</h2>
              </Row>
              <Row>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group className="mb-3 mt-5" controlId="formBasicUser">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={this.state.email}
                      onChange={this.onChangeUserEmail}
                      placeholder="Ingresa aquí tu email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      value={this.state.pass}
                      onChange={this.onChangeUserPass}
                      placeholder="Ingresa aquí tu contraseña"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-3"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Check type="checkbox" label="Recordar" />
                  </Form.Group>
                  <Button
                    className="w-100 mt-4"
                    variant="primary"
                    type="submit"
                  >
                    Ingresar
                  </Button>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
