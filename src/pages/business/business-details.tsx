import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

class BusinessDetails extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showPassword : false
        };
    }

    render () {
        const {next} = this.props;
        return (
            <div class="helvetica col-sm-12">
                <div class="row">
                    <div class="col-sm-12">
                        <span class="segment-heading">Business Details</span>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <form class="form col-sm-12" role="form" autoComplete="off">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Business Name</label>
                                <input type="text" class="form-control" placeholder="Business Name"/>
                            </div>
                            <div class="form-group col-sm-6">
                            <label class="label-input" htmlFor="inputName">Registration Name</label>
                                <input type="text" class="form-control" placeholder="Registration Name"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Business Category</label>
                                <select class="form-control" size="0" placeholder="Business Category">
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-sm-12">
                                <span class="segment-heading">Business Address</span>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Address 1</label>
                                <input type="text" class="form-control" placeholder="Address 1"/>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Address 2</label>
                                <input type="text" class="form-control" placeholder="Address 2" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class="label-input" htmlFor="inputName">Country</label>
                                <select  class="form-control" size="0" placeholder="Country">
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
                        </div>
                        <hr />
                        <div class="row d-flex justify-content-end">
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

export default BusinessDetails;