import React, { Component, Fragment } from 'react'

export default class Feature extends Component {
  render() {
    return (
      <Fragment>
        <div className="section light-bg" id="features">


          <div className="container">

            <div className="section-title">
              <small>HIGHLIGHTS</small>
              <h3>Features you love</h3>
            </div>


            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-face-smile gradient-fill ti-3x mr-3"></span>
                      <div className="media-body">
                        <h4 className="card-title">Simple</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-settings gradient-fill ti-3x mr-3"></span>
                      <div className="media-body">
                        <h4 className="card-title">Customize</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="card features">
                  <div className="card-body">
                    <div className="media">
                      <span className="ti-lock gradient-fill ti-3x mr-3"></span>
                      <div className="media-body">
                        <h4 className="card-title">Secure</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>
      </Fragment>
    )
  }
}