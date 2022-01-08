import React from 'react'
import { Container, Row, Col, Form, Card } from 'react-bootstrap'
import style from '../styles/login_style/baselogin.module.scss'
import Image from 'next/image'
import LoginImage from '../assets/image_4_login.png'

const Login = () => {
  return (
    <div className={style.baselogin}>
      <Container style={{
        padding: "16rem"
      }} className="text-center">
        <h6 className="text-center">Sign in To Task.io</h6>
        <Row md={12}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Col md={8}>
              <Form>
                <Form.Group className="mb-3 text-center">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="email is here" />
                </Form.Group>
              </Form>
              </Col>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Login