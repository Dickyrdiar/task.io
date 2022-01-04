import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Styles from "../../styles/basefeature.module.scss"


const BaseFeature = () => {
  return(
   <div className={Styles.basefeature}>
      <Container className="mt-5 pt-5">
       <Row md={12}>
        <Col md={6} className={Styles.title_feature}>
          <Col md={10}>
            Work On big ideas togheter with your 
            team
          </Col>
        </Col>

        <Col md={6} className={Styles.desc_feature}>
          <Col md={12}>
            Bring yout team's work togheter in one your
            shared space's, Choose the project view that suits your style, 
            and collaborate no matter where you are 
          </Col>
        </Col>
       </Row>
      </Container>
   </div>
  )
}

export default BaseFeature