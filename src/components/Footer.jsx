import React, {Component, Fragment} from 'react'

export default class Footer extends Component{
  render (){
    return (
<Fragment>

<div className="light-bg py-5" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left">
                    <p className="mb-2"> <span className="ti-location-pin mr-2"></span> 1485 Pacific St, Brooklyn, NY 11216 USA</p>
                    <div className=" d-block d-sm-inline-block">
                        <p className="mb-2">
                            <span className="ti-email mr-2"></span> <a className="mr-4" href="mailto:support@mobileapp.com">support@mobileapp.com</a>
                        </p>
                    </div>
                    <div className="d-block d-sm-inline-block">
                        <p className="mb-0">
                            <span className="ti-headphone-alt mr-2"></span> <a href="tel:51836362800">518-3636-2800</a>
                        </p>
                    </div>

                </div>
                <div className="col-lg-6">
                    <div className="social-icons">
                        <a href="#"><span className="ti-facebook"></span></a>
                        <a href="#"><span className="ti-twitter-alt"></span></a>
                        <a href="#"><span className="ti-instagram"></span></a>
                    </div>
                </div>
            </div>

        </div>

    </div>

      <footer className="my-5 text-center">
     
      <p className="mb-2"><small>COPYRIGHT © 2017. ALL RIGHTS RESERVED. MOBAPP TEMPLATE BY <a href="https://colorlib.com">COLORLIB</a></small></p>

      <small>
          <a href="#" className="m-2">PRESS</a>
          <a href="#" className="m-2">TERMS</a>
          <a href="#" className="m-2">PRIVACY</a>
      </small>
  </footer>
  </Fragment>
    )
  }
}