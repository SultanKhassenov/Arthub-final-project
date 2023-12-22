import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

import '../styles/Navbar.css';

const MyNavbar = () => {
    const [scroll, setScroll] = useState(0);
    const location = useLocation();

    const sc1 = useMediaQuery({ query: '(min-width: 1200px)' });
    const sc2 = useMediaQuery({ query: '(min-width: 990px) and (max-width: 1200px)' });
    const sc3 = useMediaQuery({ query: '(min-width: 914px) and (max-width: 990px)' });
    const sc4 = useMediaQuery({ query: '(min-width: 841px) and (max-width: 913px)' });
    const sc5 = useMediaQuery({ query: '(min-width: 768px) and (max-width: 841px)' });
    const sc6 = useMediaQuery({ query: '(max-width: 768px) and (min-width: 678px)' });
    const sc7 = useMediaQuery({ query: '(max-width: 678px) and (min-width: 570px)' });
    const sc8 = useMediaQuery({ query: '(max-width: 570px) and (min-width: 470px)' });
    const sc9 = useMediaQuery({ query: '(max-width: 470px) and (min-width: 380px)' });
    const sc10 = useMediaQuery({ query: '(max-width: 380px) and (min-width: 330px)' });
    const sc11 = useMediaQuery({ query: '(min-width: 280px) and (max-width: 330px)' });
    const sc12 = useMediaQuery({ query: '(max-width: 280px)' });
  
    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    const isHomePage = location.pathname === '/';

    const scrollThreshold = sc12
        ? 0    
        : sc11
        ? 50
        : sc10
        ? 75    
        : sc9
        ? 100
        : sc8
        ? 125   
        : sc7
        ? 150
        : sc6
        ? 175    
        : sc5
        ? 200
        : sc4
        ? 225    
        : sc3
        ? 250
        : sc2
        ? 275    
        : sc1
        ? 300
        : 350;

  
    return (
            <Navbar expand="md" className={`fixed-top ${isHomePage ? (scroll > scrollThreshold ? 'scrolled fadeIn' : 'invisible') : 'scrolled'}`}>
                <Container>
                    <Navbar.Brand href="#" style={{height: '0px'}}>
                    <Link to="/" className="nav-link">
                        
                        <img src="https://media-public.canva.com/HmznM/MAEnV9HmznM/1/tl.png" width="auto"
                        height="40" className="logo2 d-inline-block align-top" style={{position: 'absolute'}}
                        />
                        <img src="images/logo.png"
                        width="auto" height="40" className="logo1 d-inline-block align-top"
                        />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" style={{padding: '0px', paddingRight: '5px', paddingLeft: '5px', border: 'none'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" className="d-block w-100" />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="search-btn btn-outline-success my-2 my-sm-0" type="submit">
                                        <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
                                        width="auto" height="20" className='searchImg'
                                        />
                                    </button>
                                </form>
                            <Nav.Item>
                                <Link to="/" className="nav-link">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/store" className="nav-link">Store</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/aboutUs" className="nav-link">About Us</Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Link to="/register" className="nav-link">Profile</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default MyNavbar;


