import React, { useState } from 'react'
import style from '../../../styles/elements/sidebar.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Nav, Container } from 'react-bootstrap'
import sidebarMenu from './data'

const SideBar = ({projectName}) => {
  // console.log('sidebar', sidebarMenu)

  return (
    <div className={style.sidebar}>
      <Container>
        <div className={style.sidebar_header}>
          <p style={{
            margin: "20px"
          }}>{projectName}</p>
        </div>

        <div className={style.nav_item}>
          <Nav className="flex-column pt-3 mr-3 pr-3">
            {sidebarMenu.map((item) => (
              <Nav.Item>
                <Nav.Link href={item.path} style={{
                  color: "#888c97",
                  fontSize: "13px", 
                  paddingLeft: "13px",
                  fontWeight: 400
                }}>                
                 <span>{item.icon}</span> 
                  <span style={{
                    paddingLeft: "12px"
                  }}>{item.title}</span>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      </Container>
    </div>
  )
}

export default SideBar