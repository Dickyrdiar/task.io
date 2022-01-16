import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const PopupComponent = ({
  open, 
  onClose, 
  messageTitle
}) => {
  return (
    <Modal
      open={open}
    >
      <Modal.Body>
        <h5>{messageTitle}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>OK</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopupComponent