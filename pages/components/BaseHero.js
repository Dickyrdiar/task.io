import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import styles from '../../styles/basehero.module.scss'
import Image_hero from '../../assets/base_hero_3.png'
import Image from 'next/image'

const BaseHero = () => {
  return (
    <div className={styles.basehero}>
      <Container className="mt-4">
        <Row md={12}>
          <Col md={6} className={styles.title_desc}>
            <Col md={7} className={styles.font_baseHero}>
              Manage your tasks quickly
            </Col>

            <Col md={10} mt={4} className={styles.font_desc}>
              use the shortest possible time to create tasks, use all 
              free features to make the most of them
            </Col>

            <Button className={styles.btn_hero} style={{ 
              marginTop: "1rem",
              borderRadius: "6px"
            }}>Learn More</Button>
          </Col>
          <Col md={6}>
            <Image 
              src={Image_hero} 
              width={600}
              height={500}
              alt="base image"
              className={styles.img_hero}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BaseHero