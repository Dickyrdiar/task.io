import React, {useState, useEffect} from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import styles from '../../styles/navbar.module.scss'
import Link from 'next/link'


const NavigationBar = () => {
		// const router = useRouter()
		const [header, setHeader] = useState(styles.header)
		
		const listenScrollEvent = (event) => {
			if (window.scrollY < 73) {
				return setHeader(styles.header)
			} else if (window.scrollY > 70) {
				return setHeader(styles.header2)
			}
		}

		useEffect(() => {
			window.addEventListener('scroll', listenScrollEvent)

			return () => {
				window.removeEventListener('scroll', listenScrollEvent)
			}
		}, [])
     
    return (
			<div className={styles.navbar}>
				<Navbar className="navbar" style={{ position: "sticky" }} sticky="top" expand="lg">
					<Container>
						<Navbar.Brand href="/">
								Task.io
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav"  className={styles.navbar_menu}>
								<Nav className="m-auto">
										<Nav.Link href="#home">Project</Nav.Link>
										<Nav.Link href="#comunity">Comunity</Nav.Link>
										<Nav.Link href="#tools">Tools</Nav.Link>
										<Nav.Link href="#about">About</Nav.Link>
								</Nav>
								
								<Nav className="justify-content-end">
									<Nav.Link href="/Login">		
										<Button className={styles.btn_navbar_login} style={{ 
												borderRadius: "6px"
										}}>Login</Button>
									</Nav.Link>
									
									<Nav.Link href="#signup">	
										<Button className={styles.btn_navbar_signup} style={{ 
													borderRadius: "6px"
											}}>SignUp
										</Button>								
									</Nav.Link>
								</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
    )
}

export default NavigationBar