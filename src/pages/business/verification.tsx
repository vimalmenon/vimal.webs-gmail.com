import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import {Stepper} from "dumb-component";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Verification extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            emailVerified : false,
            businessVerified: false,
            showModel : false
        };
    }
    updateState (updatedState) {
        const state = this.state;
        this.setState({
            ...state,
            ...updatedState
        })
    }
    render () {
        const {previous} = this.props;
        const {emailVerified, businessVerified, showModel} = this.state;
        return (
            <section class="col-sm-12">
                <div class="row">
                    <Modal show={showModel} onHide={() => {this.updateState({"showModel" : !showModel})}} size="lg">
                      <Modal.Header closeButton>
                        <Modal.Title>
                            Verification email sent
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Please check your email.</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={() => {this.updateState({"showModel" : !showModel})}}>
                            Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <div class="col-sm-12 py-2 my-2">
                        <h1 class="h1 text-center">Welcome to Quantum</h1>
                    </div>
                    <div class="col-sm-12 py-2 my-2">
                        <p class="text-center h5">Verify your email & Business now to send money, get paid, and spend oversee with our secured platform powered by HSBC</p>
                    </div>
                    <div class="col-sm-12 py-2 my-2">
                        <div class="row py-0 my-0">
                            {!emailVerified ? 
                                <div class="col-sm-12 d-flex justify-content-center my-2">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <button class="btn custom-button btn-block" onClick={() => {this.updateState({"emailVerified": !emailVerified, "showModel" : !showModel})}}>
                                            Verify Email 
                                            &nbsp; <i class="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div> :  
                                null
                            }
                             {emailVerified ?
                                <div class="col-sm-12 d-flex justify-content-center my-2">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <button class="btn custom-button-success btn-block" onClick={() => {this.updateState({"emailVerified": !emailVerified, "showModel" : !showModel})}}>
                                            Email Verified 
                                            &nbsp; <i class="fa fa-check" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>:
                                null
                            }
                            {!businessVerified ?
                                <div class="col-sm-12 d-flex justify-content-center my-2">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <button class="btn custom-button btn-block" onClick={()=>{this.updateState({"businessVerified": !businessVerified, "showModel" : !showModel})}}>
                                            Verify Business 
                                            &nbsp; <i class="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>:
                                null
                            }
                            {businessVerified ?
                                <div class="col-sm-12 d-flex justify-content-center my-2">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <button class="btn custom-button-success btn-block" onClick={() => {this.updateState({"businessVerified": !businessVerified})}}>
                                            Business Vertified 
                                            &nbsp; <i class="fa fa-check" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>:
                                null
                            }

                        </div>
                        <div class="row py-3 my-3">
                            <div class="col-sm-12 d-md-flex justify-content-md-around">
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <button class="btn custom-button-success btn-block">
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i> &nbsp;
                                        Send Money
                                    </button>
                                </div>
                                <div class="form-group col-lg-3 col-md-6 col-12">
                                    <button class="btn custom-button-success btn-block">
                                        <i class="fa fa-get-pocket" aria-hidden="true"></i> &nbsp;
                                        Receive Money
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-between">
                            <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                <button class="btn custom-button btn-block" onClick={previous}>
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    &nbsp; Previous
                                </button>
                            </div>
                            {(emailVerified && businessVerified) ? 
                                 <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                    <button class="btn custom-button btn-block" onClick={() => {this.props.history.push("/dashboard")}}>
                                        Continue to Dashboard &nbsp;
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>
                                </div>:
                                null
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Verification);