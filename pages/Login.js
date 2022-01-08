import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import style from '../styles/login_style/baselogin.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClickLogin = () => {
    if (setEmail === 'user@task.io') {
      window.location.assign('home')
    } 
  }

  return (
    <div className={style.baselogin}>
      <Row md={12}>
        <Col md={6} style={{
          padding: "3rem"
        }}>
          <Container className="mt-4 pt-4">
            <Col md={7} ml={5} pl={5} className={style.baseform_title}
              style={{
                padding: "1rem"
              }}
            >
              Task.io
            </Col>

            <Col md={7} ml={5} pl={5}>
              <Container style={{ padding: "2rem" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formbaseEmail">
                    <Form.Label className={style.base_form_login}>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" /> 
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className={style.base_form_login}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button className={style.btn_login} style={{ 
                    marginTop: "1rem",
                    borderRadius: "6px"
                  }}>Login</Button>
                </Form>
              </Container>
            </Col>
          </Container>
        </Col>

        <Col md={6} className={style.baseleft_login}>
          <Container className="mt-5 pt-5">
            <Col md={10} style={{
              marginTop: "4rem"
            }} className={style.baseleft_login_title}>
              Welcome To The task.io
            </Col>

            <Col md={10} style={{
              marginTop: "2rem"
            }}>
              Bring yout team's work togheter in one your shared space's, Choose the project view that suits your style, and collaborate no matter where you are
            </Col>
          </Container>
        </Col>
      </Row>    
    </div>
  )
}

export default Login