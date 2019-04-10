import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'


import {loginUser} from '../../actions/authActions'
import Axios from 'axios';



class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            resendEmail:'',
            resetPassword:false,
            errors:{}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.showInput = this.showInput.bind(this)
        this.Resend = this.Resend.bind(this)

    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
        }
    }

    showInput(e){
        e.preventDefault()
        this.setState({resetPassword: true})
    }

    Resend(e){
        e.preventDefault()
        Axios.post('/resendToken',{email:this.state.resetEmail})
        .then(res => {
            alert('an email has been sent to this adress')
            this.setState({resetPassword: false})
        })
        .catch(err => {
            alert('there was a problem')
        })
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user, this.props.history)
        

        
    }

    render() {
        const emailInput =<div> <input type="email"
        className="form-control"
        name="resetEmail"
        placeholder="Enter email"
        value={this.state.resendEmail}
        onChange={this.onChange}
        />
        <button onClick={this.Resend} className="btn btn-lg btn-success btn-block" >Confirm</button>
        </div>


        const {errors}= this.state
        return (
            <div className="container">
            {this.state.errors.other?<div class="alert alert-primary" role="alert">
                {this.state.errors.other}
                </div>: null
            }
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"> Please Sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Adress</label>
                                <input type="email"
                                className={classnames('form-control', {
                                    'is-invalid': errors.email
                                })}
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChange}
                                />
                                {errors.email && <div className = "invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Password</label>
                                <input type="password"
                                className={classnames('form-control', {
                                    'is-invalid': errors.password
                                })}
                                name="password"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={this.onChange}
                                />
                                {errors.password && <div className = "invalid-feedback">{errors.password}</div>}
                            </div>
                            <button onClick={this.showInput}className="btn btn-lg btn-danger btn-block" >Reset password</button>
                            {this.state.resetPassword? emailInput: null}
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                           
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        auth:state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {loginUser})(withRouter(Login));