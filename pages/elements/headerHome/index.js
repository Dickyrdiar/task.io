import React from 'react'
import { Navbar, Form, Container, Nav } from 'react-bootstrap'
import style from '../../../styles/elements/navbarhome.module.scss'

const HeaderHome = () => {
  return (
    <div className={style.borderhome}>
      <Navbar className="navabr" sticky="top" expand="lg">
        <Container>
         <Nav className="me-auto">
            <Form.Group className="mb-3 ml-4 pl-4" style={{marginLeft: "50px"}}>
              <Form.Control placeholder="Search a thing..."
                style={{
                  width: "236px", 
                  height: "30px"
                }}
              />
            </Form.Group>
         </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderHome