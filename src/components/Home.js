import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';
import '../styles/Home.css';


const Home = () => {
  return (
    
    <div>
        <div className="home-banner">
            <p className="home-text1">FREE DELIVERY ON ORDERS</p>
            <p className="home-text2">OVER $10 - TO MOST POSTCODES!</p>
            <img src="//images.ctfassets.net/f1fikihmjtrp/59yzm4fk70eyuziAV37YZ4/600e9f14887cd97a65e62d4a0750214f/Utrecht_Homepage_Banners-Nov_M1.jpg" className="d-block w-100" alt={"Home"}></img>
        </div>



        {/*Main frame*/}
        <div className="mainFrame container-fluid padding">
            <div className="row padding">
                <div className="offset-lg-2 col-lg-4">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere! Quaerat odit, amet corporis vero libero laborum, mollitia at reiciendis sint omnis debitis quasi aliquam necessitatibus quibusdam facilis! Molestias, quidem!</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere! Quaerat odit, amet corporis vero libero laborum, mollitia at reiciendis sint omnis debitis quasi aliquam necessitatibus quibusdam facilis! Molestias, quidem!</p>
                    <br></br>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere! Quaerat odit, amet corporis vero libero laborum, mollitia at reiciendis sint omnis debitis quasi aliquam necessitatibus quibusdam facilis! Molestias, quidem!</p>
                    <br></br>
                </div>
                <div className="Pic1 col-lg-4">
                    <img src="https://www.artsupplies.co.uk/vendure-assets/new-homepage-cat-watermixable-oil-paints__preview.jpg?w=410&h=191&mode=crop&format=avif
                " height="300" width="auto"></img>
                    <img src="https://www.artsupplies.co.uk/vendure-assets/new-homepage-cat-traditional-oil-paint__preview.jpg?w=410&h=191&mode=crop&format=avif"></img>
                </div>
            </div>
        </div>

        {/* Additional content */}
        <div style={{ paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'bisque' }}>
            <Container>
                <div className="row">
                    <div className="col-lg-9 col-xl-10 col-md-9 col-xs-12 col-sm-12">
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere! Quaerat odit, amet corporis vero libero laborum, mollitia at reiciendis sint omnis debitis quasi aliquam necessitatibus quibusdam facilis! Molestias, quidem!</p>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-md-3 col-xs-12 col-sm-12 text-center">
                        <Link to="/store">
                            <button className="btn btn-success btn-lg" type="button" style={{ padding: '10px' }}>GO TO STORE</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>


        {/* Carousel */}
        <Carousel interval={5000}   style={{marginTop: '100px', marginBottom: '100px'}}>
        <Carousel.Item>
            <img src="https://www.artsupplies.co.uk/vendure-assets/new-website-homepage-banner-ds-set-sale-2023__preview.jpg?preset=full&w=1216&h=390&mode=crop&format=avif"
                 style={{filter: 'blur(2px) brightness(60%)'}} className="d-block w-100" alt="Slide 2" />
            <Carousel.Caption>
                <img src="images/logo.png" alt="Logo"></img>
                <p className="mainText">Art in every color: Your art supplies store</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="https://cdn01.allaboutart.co.uk/media/npljsu3p/saa-paint-homebanner.jpg?anchor=center&mode=crop&width=1980&height=810&rnd=132919837761770000&format=jpg&quality=55&bgcolor=white"
                 className="d-block w-100" alt="Slide 3" />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img src="https://images.ctfassets.net/f1fikihmjtrp/25BNrZKchk9y6nHChTmPsY/b2a9977f7b6fe079dfbae1170271e8e5/Utrecht_Homepage_Banners-July_M1.jpg" className="d-block w-100" alt="Slide 1" />
            <Carousel.Caption>

            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


        {/* Alert */}
        <Container className="text-center alert">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Lorem</h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla deleniti quibusdam soluta dicta qui temporibus illum totam doloremque ipsum consequuntur! Tempore impedit tenetur officia dolorum aspernatur aliquid nihil. Sapiente?</p>
                </div>
            </div>
        </Container>

      {/*Footer*/}
      <footer className="bg-dark py-5 mt-5">
        <Container className="text-light text-center">
          <img src='images/logo.png' className="display-5 mb-3" style={{width: '150px', heigth: 'auto'}}>
            
          </img>
          <br></br>
          <small className="text-white-50">
            &copy; by Sultan Khassenov
          </small>
        </Container>
        <br /><br />

        <section className="footer">
          <Container>
            <div className="row">
            <div className="row">
            <div className="col-md-4 col-4">
              <p className="text-left text-white footer-section-header">For customers</p>
              <ul className='list-unstyled'>
                <li><a href="#">Help</a></li>
                <li><a href="#">Question and answers</a></li>
                <li><a href="#">Orders and delivery</a></li>
                <li><a href="#">Refund</a></li>
                <li><a href="#">Prices and payment</a></li>
                <li><a href="#">Guarantees</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-4">
              <p className="text-left text-white footer-section-header">About</p>
              <ul className="list-unstyled text-left">
                <li><a href="#">About company</a></li>
                <li><a href="#">Privacy policy </a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Vacancies</a></li>
              </ul>
            </div>

            <div className="col-md-4 col-4">
              <p className="text-left text-white footer-section-header">Other information</p>
              <ul className="list-unstyled">
                <li><a href="#">Help</a></li>
                <li><a href="#">Question and answers</a></li>
                <li><a href="#">Orders and delivery</a></li>
                <li><a href="#">Refund</a></li>
                <li><a href="#">Prices and payment</a></li>
                <li><a href="#">Guarantees</a></li>
              </ul>
            </div>
          </div>
            </div>
          </Container>
        </section>
      </footer>

    
    </div>
  );
}

export default Home;

