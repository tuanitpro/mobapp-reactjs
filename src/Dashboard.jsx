import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser } from './services/authen'
import { getUsers } from './services/myService';
class Dashboard extends Component {
  state = { currentUser: '', data: [] }
  componentDidMount() {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      this.props.history.replace('/login')
    }
    this.setState({ currentUser })
  }

  componentWillMount() {
    // get data from api
    (async () => {
      const data = await getUsers()
      console.log(data)
      this.setState({ data })
    })()

  }

  render() {
    const { currentUser, data } = this.state
    return (
      <Fragment>
        <div className='container-fluid'>
          <h3>Dashboard</h3>
          <label>Welcome {currentUser}</label>
          <Link to='/login'>Logout</Link>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>address</th>
                <th>phone</th>
                <th>website</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item, key) => {
                return (<tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address.street} {item.address.city}</td>
                  <td>{item.phone}</td>
                  <td>{item.website}</td>
                  <td><Link to={'/detail/' + item.id} >detail</Link></td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Dashboard