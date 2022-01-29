import React from 'react'
import HeaderHome from './elements/headerHome'
import SideBar from './elements/sidebar'
import style from '../styles/home/basehome.module.scss'

const baseHome = ({children}) => {
  return (
    <>
     <div className={style.borderhome}>
      <HeaderHome />
      <SideBar projectName="Task.io" />
      <main>
        <div>
          {children}
        </div>
      </main>
     </div>
    </>
  )
}

export default baseHome