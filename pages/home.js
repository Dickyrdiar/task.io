import React from 'react'
import HeaderHome from './elements/headerHome'
import SideBar from './elements/sidebar'
import style from '../styles/home/basehome.module.scss'
import { Container } from 'react-bootstrap'

const baseHome = ({children}) => {
  return (
    <>
     <div className={style.borderhome}>
      <HeaderHome />
      <SideBar projectName="Task.io" />
      <main>
        <div>
          <main style={{
            margin: '17%',
            paddingTop: '-20%'
          }}>
            <Container>
              This is the main content
            </Container>
          </main>
        </div>
      </main>
     </div>
    </>
  )
}

export default baseHome