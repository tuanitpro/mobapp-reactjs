import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom';
class Header extends Component {   
  render() {
    return (
      <Fragment>
        <div className="nav-menu fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-dark navbar-expand-lg">
                  <a className="navbar-brand" href="index.html"><img src="img/logo.png" className="img-fluid" alt="logo" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                  <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item"> <a className="nav-link active" href="#home">HOME <span className="sr-only">(current)</span></a> </li>
                      <li className="nav-item"> <a className="nav-link" href="#features">FEATURES</a> </li>
                      <li className="nav-item"> <a className="nav-link" href="#gallery">GALLERY</a> </li>
                      <li className="nav-item"> <a className="nav-link" href="#pricing">PRICING</a> </li>
                      <li className="nav-item"> <a className="nav-link" href="#contact">CONTACT</a> </li>
                      <li className="nav-item"><Link to='/login' className="btn btn-outline-light my-3 my-sm-0 ml-lg-3">Login</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>


        <header className="bg-gradient" id="home">
          <div className="container mt-5">
            <h1>Mobile App Landing Page Template</h1>
            <p className="tagline">The one and only solution for any kind of mobila app landing needs. Just change the screenshots and texts and you are good to go. </p>
          </div>
          <div className="img-holder mt-3"><img src="img/iphonex.png" alt="phone" className="img-fluid" /></div>
        </header>

        <div className="client-logos my-5">
          <div className="container text-center">
            <img src="img/client-logos.png" alt="client logos" className="img-fluid" />
          </div>
        </div>

      </Fragment>
    )
  }
}

export default Header