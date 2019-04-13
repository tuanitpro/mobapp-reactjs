import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser } from './services/authen'

class Dashboard extends Component {
  state = { currentUser: '' }
  componentDidMount() {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      this.props.history.replace('/login')
    }
    this.setState({ currentUser })
  }

  componentWillMount() {
    // get data from api
  }

  render() {
    const { currentUser } = this.state
    return (
      <Fragment>
        <h3>Dashboard</h3>
        <label>Welcome {currentUser}</label>
        <Link to='/login'>Logout</Link>
      </Fragment>
    )
  }
}

export default Dashboard