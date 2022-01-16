import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Nav, Button } from 'react-bootstrap'
import classNames from "classnames"

const SideBar = () => {
  return (
    <div className={classNames("sidebar", { "is-open": open })}>
      <div className="sidebar-header">
        <Button 
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
      </div>
    </div>
  )
}

export default SideBar