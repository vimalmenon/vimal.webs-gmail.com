import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

import {ApplicationLabel} from "dumb-component";

class LogIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showPassword: false,
            loginButton: 'disabled',
        };
        this.clearForm();
    }
    updateState (updatedState) {
        const state = this.state;
        this.setState({
            ...state,
            ...updatedState
        });
        
    }
    updateLoginState (updateState) {
        const {login, onUpdate} = this.props;
        if(login.emailAddress && login.password ) {
            this.setState({loginButton: ''})
        } else{
            this.setState({loginButton: 'disabled'})

        }
        onUpdate({"login": {...login, ...updateState}});
    }

    clearForm () {
        this.updateLoginState({
            emailAddress: null,
            password : null
        });
    }
    render () {
        const {login, onUpdate} = this.props;
        const {showPassword, loginButton} = this.state;
        return (
            <div class="row">
                <div class="col-sm-4">
                    <div className="py-3">
                        <div class="card shadow rounded">
                          <div class="card-body">
                            <h5 class="card-title">Content</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Some Content</h6>
                            <div class="card-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Leo in vitae turpis massa sed elementum tempus egestas sed. Sodales ut etiam sit amet nisl. Ultrices mi tempus imperdiet nulla. Urna id volutpat lacus laoreet non curabitur. Egestas erat imperdiet sed euismod nisi porta. Donec ac odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in. Elit ut aliquam purus sit amet. Aliquet porttitor lacus luctus accumsan. Purus faucibus ornare suspendisse sed nisi. Erat pellentesque adipiscing commodo elit. Sapien eget mi proin sed libero enim sed faucibus turpis. Nullam eget felis eget nunc lobortis mattis aliquam. </p>
                            </div>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 login-form">
                    <div class="py-3 px-3 mt-3 shadow py-5 mb-5 bg-white rounded">
                        <ApplicationLabel text="Quantum"/>
                        <div class="text-center mb-3">
                            <span class="heading">New to Quantum?</span> <Link class="link big" to="/register">Sign up</Link>
                        </div>
                        <div class="form-group row py-sm-3 mb-0">
                            <label class="col-sm-3 col-form-label">Email Address</label>
                            <div class="col-sm-9">
                                <input
                                    autoComplete="off"
                                    type="email"
                                    name="emailAddress"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(e) => {const {name, value} = e.target; this.updateLoginState({[name]: value})}}
                                    value={login.emailAddress || ""}/>

                            </div>
                        </div>
                        <div class="form-group row py-sm-3 mb-0">
                            <label class="col-sm-3 col-form-label">Password</label>
                            <div class="input-group col-sm-9">
                                <input
                                    autoComplete="off"
                                    type={showPassword ? "text": "password"}
                                    placeholder="Password"
                                    name="password"
                                    class="form-control"
                                    onChange={(e) => {const {name, value} = e.target; this.updateLoginState({[name]: value})}}
                                    value={login.password || ""}/>
                                {/* <div class="invalid-feedback">Incorrect Password!</div> */}
                                <div class="input-group-append">
                                    <span class="input-group-text show-hide-password" onClick={this.updateState.bind(this, {"showPassword" : !showPassword})}>
                                        {showPassword ? 
                                            <i class="fa fa-eye-slash" aria-hidden="true" />:
                                            <i class="fa fa-eye" aria-hidden="true"/>
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row py-sm-3 mb-0">
                            <div class="col-sm-6">
                                <button type="submit" class={`btn form-control custom-button ${loginButton}`}>
                                    <i class="fa fa-lock mr-3" aria-hidden="true" />
                                    Login
                                </button>
                            </div>
                            <div class="col-sm-6">
                              <button class="btn btn-primary form-control custom-button" onClick={() => {this.props.history.push("/")}}>Cancel</button>
                            </div>
                        </div>
                        <div class="form-group row py-sm-3 mb-0">
                            <div class="col-sm-6">
                                <input type="checkbox" />
                                <span class="px-sm-2 remember-device small">
                                    Remember this device 
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <div class="text-right"><a class="link" href="#">Forgot Password ?</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LogIn);