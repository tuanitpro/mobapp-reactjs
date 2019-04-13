import React, { Component, Fragment } from 'react'
import { logout } from './services/authen'
class Login extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
      isSubmit: false,
      Model: {
        UserName: '',
        Password: ''
      }
    }
  }

  componentDidMount(){
    logout()
  }  

  onChangeUserName(evt) {
    const value = evt.target.value
    const { Model } = this.state
    Model.UserName = value
    this.setState({ Model })
  }

  onChangePassword(evt) {
    const value = evt.target.value
    const { Model } = this.state
    Model.Password = value
    this.setState({ Model })
  }
  onSubmit() {
    const { Model } = this.state
    if (Model.UserName && Model.Password) {
      // call api login
      if(Model.UserName==='admin' && Model.Password === 'admin'){
        localStorage.setItem('currentUser', Model.UserName)
        this.props.history.replace('/dashboard')
      } else {
        this.setState({errorMessage: 'Tên đăng nhập hoặc mật khẩu không đúng'})         
      }

    } else {      
      this.setState({errorMessage: 'Vui lòng nhập username hoặc password'})         
    }
  }

  render() {
    const {errorMessage} = this.state
    return (
      <Fragment>
        <form>
          <div className="col-md-6">
            <h3>Login Page</h3>
            <div className="form-group">
              <label htmlFor="UserName">Username</label>
              <input type="text" className="form-control" id="UserName" placeholder="Username" onChange={evt => this.onChangeUserName(evt)} />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="password" autoComplete="false" className="form-control" id="Password" placeholder="Password" onChange={evt => this.onChangePassword(evt)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={(evt) => this.onSubmit(evt)}>Sign in</button>
            <span className='label label-danger'>{errorMessage}</span>
          </div>
        </form>
      </Fragment>

    )
  }
}


export default Login