import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import base_graphic from '../../assets/baseGraphic.png'
import Image from 'next/image'
import style from '../../styles/basegraphic.module.scss'

const BaseGraphic = () => {
  return(
    <div className={style.basegraphic}>
      <Container className="mt-5 pt-5">
        <Row md={12}>
         <Col md={6}>
          <Image 
            src={base_graphic}
            width={500}
            height={400}
            alt="base graphic"
            className={style.basegraphic_image}
          />
         </Col>

         <Col md={6}>
          <Col md={12} className="text-left">
            <Col  style={{ 
              color: "#3468cb", 
              fontSize: "19px", 
              fontWeight: 600
            }} 
            md={12}>Superioriy</Col>
            <Col md={8} className={style.basegraphic_title}>
              Smart System & Friendly Inteface
            </Col>

            <Col md={10} className={style.basegraphic_desc}>
              Tasking is very easy to use, besides that it also has many
              excellent features taht other task manager applications don't 
              have, so task management can be done easy
            </Col>

            <Button className={style.btn_graphic} style={{ 
              marginTop: "1rem",
              borderRadius: "6px"
            }}>Learn More</Button>
          </Col>
         </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BaseGraphic