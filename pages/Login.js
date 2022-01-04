import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from '../styles/login_style/baselogin.module.scss'


const Login = () => {
  return (
    <div className={style.baselogin}>
      <Container className="mt-5 pt-5 ml-4 pl-4">
        <Row md={12}>
          <Col md={6}>
            Form login is here
          </Col>

          <Col md={6}>
            <p>This is image</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login