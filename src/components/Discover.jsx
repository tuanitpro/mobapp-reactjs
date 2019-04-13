import React, { Component, Fragment } from 'react'

export default class Discover extends Component {
  render() {
    return (
      <Fragment>
        <div className="section">

          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="box-icon"><span className="ti-mobile gradient-fill ti-3x"></span></div>
                <h2>Discover our App</h2>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel exercitationem eveniet vero maxime ratione </p>
                <a href="#" className="btn btn-primary">Read more</a>
              </div>
            </div>
            <div className="perspective-phone">
              <img src="img/perspective.png" alt="perspective phone" className="img-fluid" />
            </div>
          </div>

        </div>
      </Fragment>
    )
  }
}