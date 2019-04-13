import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser } from './services/authen'
import { getUserById } from './services/myService';
class Dashboard extends Component {
  state = { currentUser: '', data: {} }
  componentDidMount() {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      this.props.history.replace('/login')
    }
    this.setState({ currentUser })
  }

  componentWillMount() {
    const { match: { params } } = this.props
    const id = Number.parseInt(params.id);
    (async () => {
      const data = await getUserById(id)

      this.setState({ data })
    })()

  }

  render() {
    const { currentUser, data } = this.state
    return (
      <Fragment>
        <div className='container-fluid'>
          <h3>Detail</h3>
          <label>Welcome {currentUser}</label>
          <Link to='/login'>Logout</Link>
          <br />
          Chi tiết User:  {data.username}
          <hr />

          <table className='table table-bordered'>
            <tr>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>              
              <td>{data.phone}</td>
              <td>{data.website}</td>
            </tr>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Dashboard