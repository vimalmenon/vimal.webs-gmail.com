import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

class UserDetails extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        const {next, previous} = this.props;
        return (
            <div class="col-sm-12">
                <div class="row helvetica">
                    <div class="col-sm-12">
                        <span class="segment-heading">Your Details</span>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <form class="form col-sm-12" role="form" autoComplete="off">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Legal First Name</label>
                                <input type="text" class="form-control" placeholder="Legal First Name"/>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Given Name</label>
                                <input type="text" class="form-control" placeholder="Given Name" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label  class="label-input" htmlFor="inputName">Legal Last Name</label>
                                <input type="text" class="form-control" placeholder="Legal Last Name" />
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Date of Birth</label>
                                <input type="text" class="form-control" placeholder="Date of Birth" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Role in Organisation</label>
                                <select class="form-control" size="0" placeholder="Role in Organisation">
                                </select>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-sm-12">
                                <span class="segment-heading">Your Address</span>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input"  htmlFor="inputName" autoComplete="off">Address 1</label>
                                <input type="text" class="form-control" placeholder="Address 1"/>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Address 2</label>
                                <input type="text" class="form-control" placeholder="Address 2" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label  class="label-input" htmlFor="inputName">Country</label>
                                <select class="form-control" size="0" placeholder="Country" >
                                </select>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">City</label>
                                <input type="text" class="form-control" placeholder="City" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Postal Code</label>
                                <input type="text" class="form-control" placeholder="Postal Code" />
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Phone</label>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Phone" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row d-flex justify-content-between">
                            <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                <button class="btn custom-button btn-block" onClick={previous}>
                                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    &nbsp; Previous
                                </button>
                            </div>
                            <div class="form-group col-lg-3 col-md-6 col-sm-6">
                                <button class="btn custom-button btn-block" onClick={next}>
                                    Next &nbsp;
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserDetails;