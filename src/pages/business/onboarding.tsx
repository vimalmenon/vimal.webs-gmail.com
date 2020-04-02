import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import {Stepper} from "dumb-component";

import BusinessDetails from "./business-details";
import UserDetails from "./user-details";
import DocumentUpload from "./document-upload";
import Verification from "./verification";

class Onboarding extends React.Component {
    constructor (props) {
        super(props);
        this.state ={
            currentIndex : 0
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
        const {currentIndex} = this.state;
        const Items = [
                {
                    title:"Business Registration",
                    Component : () => {
                        return (
                            <BusinessDetails next={() => {this.updateState({"currentIndex": 1})}}/>
                        );
                    }
                }, 
                {
                    title: "User Registration",  
                    Component : () => {
                        return (
                            <UserDetails previous={()=>{this.updateState({"currentIndex": 0})}} next={()=>{this.updateState({"currentIndex": 2})}}/>
                        );
                    }
                }, 
                {
                    title: "Document Upload",  
                    Component : () => {
                        return (
                            <DocumentUpload previous={()=>{this.updateState({"currentIndex": 1})}} next={()=>{this.updateState({"currentIndex": 3})}}/>
                        );
                    }
                }, {
                    title: "Verification",  
                    Component : () => {
                        return (
                            <Verification 
                                previous={()=>{this.updateState({"currentIndex": 2})}}/>
                        );
                    }
                }
            ];
        return (
            <section class="row">
                <div class="col-sm-12 py-3 px-5 my-3 background-white-gray rounded">
                    <div class="my-3">
                        <h2 class="h2">
                            <span class="highlight"></span>
                            Quantum Sign Up
                        </h2>
                    </div>
                    <div class="my-3 onboarding">
                       <Stepper 
                            items={Items}
                            currentIndex={currentIndex}
                            onClick={(key) => {this.updateState({currentIndex: key})}}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Onboarding);