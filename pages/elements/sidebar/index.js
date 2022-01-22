import React, { useState } from 'react'
import style from '../../../styles/elements/sidebar.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Nav, Container } from 'react-bootstrap'
import sidebarMenu from './data'

const SideBar = () => {
  console.log('sidebar', sidebarMenu)

  return (
    <div className={style.sidebar}>
      <Container>
        <div className={style.sidebar_header}>
          <p className="pt-3 mt-3">sidebar header</p>
        </div>

        <div className={style.nav_item}>
          <Nav className="flex-column pt-2">
            {sidebarMenu.map((item) => (
              <Nav.Item>
                <Nav.Link href={item.path}>
                  {/* <FontAwesomeIcon icon={item.icon} /> */}
                  {item.icon}
                  {item.title}
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