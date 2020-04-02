import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import {Stepper} from "dumb-component";
import Modal from 'react-bootstrap/Modal'
import {ApplicationLabel} from "dumb-component";

class RegisterForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModel:false
        }
    }
    updateState(updatedState) {
        const state = this.state;
        this.setState({
            ...state,
            ...updatedState
        })
    }
    render () {
        const {register, showPassword } = this.props;
        const {showModel} = this.state;
        return (
            <div class="row">
                    <Modal
                        show={showModel}
                        onHide={() => this.updateState({showModel: false})}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Terms and Conditions Page
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p class="my-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Cras semper auctor neque vitae. Vestibulum lectus mauris ultrices eros in cursus. Euismod quis viverra nibh cras pulvinar mattis nunc. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Odio facilisis mauris sit amet massa vitae. Mattis rhoncus urna neque viverra. At risus viverra adipiscing at in tellus. Mattis ullamcorper velit sed ullamcorper morbi. Aliquet risus feugiat in ante metus dictum at tempor commodo. Et malesuada fames ac turpis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Ut enim blandit volutpat maecenas volutpat blandit. Justo donec enim diam vulputate ut pharetra. Elit sed vulputate mi sit. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
                          </p>
                          <p class="my-3">
                            Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Fermentum dui faucibus in ornare quam viverra. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Arcu cursus vitae congue mauris rhoncus. Arcu non odio euismod lacinia at quis risus. Laoreet suspendisse interdum consectetur libero. Porttitor massa id neque aliquam vestibulum. Sit amet tellus cras adipiscing enim. Libero justo laoreet sit amet cursus sit. Aliquet nec ullamcorper sit amet risus nullam eget felis. Amet massa vitae tortor condimentum. Massa sapien faucibus et molestie ac feugiat.
                          </p>
                          <p class="my-3">
                            Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Porta non pulvinar neque laoreet suspendisse. Vel turpis nunc eget lorem dolor sed viverra. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Amet nisl suscipit adipiscing bibendum. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Ante in nibh mauris cursus mattis molestie a iaculis. Viverra aliquet eget sit amet tellus cras. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. At volutpat diam ut venenatis tellus in metus vulputate eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sed nisi lacus sed viverra tellus in hac. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Et pharetra pharetra massa massa. Nisi lacus sed viverra tellus. Fringilla ut morbi tincidunt augue interdum velit.
                          </p>
                          <p class="my-3">
                            Nulla at volutpat diam ut venenatis tellus in metus vulputate. Est placerat in egestas erat imperdiet sed euismod. Pellentesque habitant morbi tristique senectus et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Eget magna fermentum iaculis eu non diam phasellus vestibulum. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Adipiscing diam donec adipiscing tristique risus nec feugiat. Pharetra convallis posuere morbi leo. Et netus et malesuada fames ac turpis egestas. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Aliquam malesuada bibendum arcu vitae elementum. Lobortis mattis aliquam faucibus purus in massa. Porttitor massa id neque aliquam vestibulum. Sapien pellentesque habitant morbi tristique senectus et netus.
                          </p>
                          <p class="my-3">
                            Sed cras ornare arcu dui vivamus. Nullam non nisi est sit amet facilisis magna etiam tempor. At varius vel pharetra vel. Aenean sed adipiscing diam donec adipiscing. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Eget arcu dictum varius duis at consectetur lorem donec. In mollis nunc sed id semper risus in hendrerit. Arcu non odio euismod lacinia at quis. Condimentum id venenatis a condimentum vitae. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <button class="btn btn-primary custom-button" onClick={()=>this.updateState({showModel: false})}>Agree</button>
                        </Modal.Footer>
                    </Modal>
                    <div class="col-lg-4 col-md-12 d-none d-lg-block">
                        <div class="py-3">
                            <div class="card shadow rounded">
                              <div class="card-body">
                                    <h5 class="card-title">Content</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Some Content</h6>
                                    <div class="card-text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Leo in vitae turpis massa sed elementum tempus egestas sed. Sodales ut etiam sit amet nisl. Ultrices mi tempus imperdiet nulla. Urna id volutpat lacus laoreet non curabitur. Egestas erat imperdiet sed euismod nisi porta. Donec ac odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in. Elit ut aliquam purus sit amet. Aliquet porttitor lacus luctus accumsan. Purus faucibus ornare suspendisse sed nisi. Erat pellentesque adipiscing commodo elit. Sapien eget mi proin sed libero enim sed faucibus turpis. Nullam eget felis eget nunc lobortis mattis aliquam. Et netus et malesuada fames ac turpis egestas sed. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Faucibus scelerisque eleifend donec pretium vulputate sapien nec.</p>
                                    </div>
                                    <a href="#" class="card-link">Card link</a>
                                    <a href="#" class="card-link">Another link</a>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-12 register-form">
                            <div class="py-3 px-3 mt-2 shadow py-5 mb-3 bg-white rounded">
                                <ApplicationLabel text="Quantum" />
                                <div class="text-center mb-3">
                                    <span class="heading">Already signed up? </span>
                                    <Link class="link big" to="/login">Log in</Link>
                                </div>
                                <div class="form-group row py-sm-3 mb-0">
                                    <div class="col-sm-9 offset-sm-3">
                                        <div class="btn-group btn-group-toggle row" style={{width: "100%"}}>
                                          <label class={register.segment === "personal" ? "btn btn-secondary custom-button active" : "btn btn-secondary custom-button"}>
                                            <input type="radio" name="segment" onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: "personal"})}} checked={register.segment === "personal" ? true:  false}/> Personal
                                          </label>
                                          <label class={register.segment === "business" ? "btn btn-secondary custom-button active" : "btn btn-secondary custom-button"}>
                                            <input type="radio" name="segment" onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: "business"})}} checked={register.segment === "business" ? true : false}/> Business
                                          </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row py-sm-3 mb-0">
                                    <label class="col-sm-3 col-form-label">Email Address</label>
                                    <div class="col-sm-9">
                                        <input
                                            type="text"
                                            class="form-control"
                                            autoComplete="off"
                                            name="emailAddress"
                                            onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: value})}}
                                            value={register.emailAddress || ""}
                                            placeholder="Email Address"/>
                                    </div>
                                </div>
                                <div class="form-group row py-sm-3 mb-0">
                                    <label class="col-sm-3 col-form-label">Password</label>
                                    <div class="input-group col-sm-9">
                                        <input
                                            type={showPassword ? "text": "password"}
                                            name="password"
                                            class="form-control"
                                            onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: value})}}
                                            value={register.password || ""}
                                            placeholder="Password"/>
                                        <div class="input-group-append">
                                            <span class="input-group-text show-hide-password" onClick={this.props.updateState.bind(this, {"showPassword" : !showPassword})}>
                                                {showPassword ? 
                                                    <i class="fa fa-eye-slash" aria-hidden="true" />:
                                                    <i class="fa fa-eye" aria-hidden="true" />
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row py-sm-3 py-2 mb-0">
                                    <label class="col-sm-3 col-form-label">Confirm Password</label>
                                    <div class="col-sm-9">
                                       <input
                                        type={showPassword ? "text": "password"}
                                        name="confirmPassword"
                                        class="form-control"
                                        onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: value})}}
                                        value={register.confirmPassword || ""}
                                        placeholder="Confirm Password"/>
                                    </div>
                                </div>
                              <div class="form-group row py-sm-3 py-2 mb-0">
                                    <label class="col-sm-3 col-form-label">Country of residence</label>
                                    <div class="col-sm-9">
                                       <input
                                        type="text"
                                        name="countryOfResidence"
                                        class="form-control"
                                        onChange={(e) => {const {name, value} = e.target; this.props.updateRegisterState({[name]: value})}}
                                        value={register.countryOfResidence || ""}
                                        placeholder="Country of residence"/>
                                    </div>
                                </div>
                                <div class="form-group row pb-sm-3 pb-3 mb-0">
                                    <div class="col-sm-3"/>
                                    <div class="col-sm-7 checkbox-format">
                                        <input type="checkbox" class="form-check-input " />
                                        <label class="form-check-label">
                                            I agree to the <span onClick={() => this.updateState({showModel: true})} class="model-link">Terms of Service</span> and <span onClick={() => this.updateState({showModel: true})} class="model-link">Privacy Policy</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group row py-sm-3 py-2 mb-0">
                                    <div class="form-group col-sm-6">
                                        <button class="btn btn-primary form-control custom-button" onClick={() => {this.props.history.push("/register/business/onboarding")}}>
                                            <i class="fa fa-lock mr-3" aria-hidden="true" />
                                            Register
                                        </button>
                                    </div>
                                    <div class="form-group col-sm-6">
                                      <button class="btn btn-primary form-control custom-button" onClick={() => {this.props.history.push("/")}}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default withRouter(RegisterForm);