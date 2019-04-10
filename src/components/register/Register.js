import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {registerUser} from '../../actions/authActions'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            errors:{}
            
            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({errors:nextProps.errors})
        }
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value})

        if(this.state.password.length <4 ){
            this.setState({PassErrors:'Password must be atleast 5 characters'})
        }else{
            this.setState({PassErrors:null})
        }
    }

    onSubmit(e){
        e.preventDefault()
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        }
        
        this.props.registerUser(newUser, this.props.history)

        // register(user).then(res => {
        //     this.props.history.push("/login")
        //     if(res) {
        //         this.setState({errors:res})
        //         console.log(this.errors)
        //     }
        // })
    }

    render() {
        const {errors}= this.state
        
        const {user} = this.props.auth
        return (
            <div className="container">
            
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal"> Please Sign up</h1>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                className={classnames('form-control', {
                                    'is-invalid': errors.name
                                })}
                                name="name"
                                placeholder="Enter Name"
                                value={this.state.name}
                                onChange={this.onChange}
                                />
                                {errors.name && <div className = "invalid-feedback">{errors.name}</div>}
                            </div>
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
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Register
                            </button>
                           
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register))