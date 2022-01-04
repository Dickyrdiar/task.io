import React from 'react'
import style from '../../styles/basefooter.module.scss'
import { Col, Container, Row, Button } from 'react-bootstrap'

const BaseFooter = () => {
  return (
    <div className={style.basefooter}>
      <footer className="page-footer font-small blue pt-4 mt-4">
        <div className="container-fluid text-right">
            <div className="row">
                <div className="col-md-3 mt-md-0 mt-5">
                    <h5 className={style.footer_title}>Footer Content</h5>
                    <p>Here you can use rows and columns to organize your footer content.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className={style.footer_title}>About</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!">About Us</a></li>
                        <li><a href="#!">Feature</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className={style.footer_title}>Support Us</h5>
                    <ul className="list-unstyled text-left">
                        <li><a href="#!">FAQ</a></li>
                        <li><a href="#!">Contact Us</a></li>
                        <li><a href="#!">Support center</a></li>
                        <li><a href="#!">Security</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Task.io
        </div>
      </footer>
    </div>
  )
}

export default BaseFooter