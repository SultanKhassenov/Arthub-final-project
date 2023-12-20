import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel } from 'react-bootstrap';
import '../styles/Home.css';


const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <Carousel interval={10000000}>
       <Carousel.Item>
          <img src="images/3.0.jpg" className="d-block w-100" alt="Slide 2" />
          <Carousel.Caption>
           <img src="images/logo.png" alt="Logo"></img>
           <p className="mainText">Make your own gallery</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/1.jpg"className="d-block w-100" alt="Slide 3" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" className="d-block w-100" alt="Slide 4" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images/0.jpg" className="d-block w-100" alt="Slide 1" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 


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
            <img src="https://images.unsplash.com/photo-1623246123320-0d6636755796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTU2MnwwfDF8c2VhcmNofDI0fHxwdW1wa2luJTIwZGVzc2VydHxlbnwwfHx8fDE2OTY1MzY0MDV8MA&ixlib=rb-4.0.3&q=80&w=1080
                " height="300" width="auto"></img>
            <img src="https://images.unsplash.com/photo-1624000952068-8e605b61c84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNTU2MnwwfDF8c2VhcmNofDF8fHB1bXBraW4lMjBjYWtlfGVufDB8fHx8MTY5NjUzNzEwM3ww&ixlib=rb-4.0.3&q=80&w=1080"></img>         </div>
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
              <Link to="/signup">
                <button className="btn btn-success btn-lg" type="button" style={{ padding: '10px' }}>Get started</button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

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
