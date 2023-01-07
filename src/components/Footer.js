import React from 'react'
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className='navbar-child fixed-bottom navBg'>
        <Row>
          <Col className="text-center py-3 text-white">Copyright &copy; MusicKito</Col>
        </Row>
      </footer>
    </div>
  )
}

export default Footer
