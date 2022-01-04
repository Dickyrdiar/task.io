import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from '../../styles/basework.module.scss'
import Work from '../../assets/base_how_to.png'
import Image from 'next/image'

const BaseWork = () => {
  return (
    <div className={style.basework}>
      <Container className="mt-5 pt-5">
        <Row md={12}>
          <Col md={6} className="text-left">
            <Col  style={{ 
                color: "#3468cb", 
                fontSize: "19px", 
                fontWeight: 600
              }} 
            md={12}>How It's Works</Col>
            <Col md={8} className={style.basework_title}>
              How Tasking Work? We have 3 options
            </Col>

            <Col md={10} className={style.basework_desc}>
              Tasking is very easy to use, besides that it also has many
              excellent features taht other task manager applications don't 
              have, so task management can be done easy
            </Col>
          </Col>

          <Col md={6}>
            <Image 
              src={Work}
              width={600}
              height={500}
              alt="work image"
              className={style.basework_image}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BaseWork