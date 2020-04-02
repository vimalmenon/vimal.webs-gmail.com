import * as React from "react";
import {
  Link,
  withRouter,
  Switch,
  Route
} from "react-router-dom";

import Onboarding from "../business/onboarding";
import RegisterForm from "./register-form";

class Register extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showPassword : false
        };
        this.clearForm();
    }
    updateRegisterState (updateState) {
        const {register, onUpdate} = this.props;
        onUpdate({"register": {...register, ...updateState}});
    }
    updateState (updatedState) {
        const state = this.state;
        this.setState({
            ...state,
            ...updatedState
        });
    }
    clearForm () {
        this.updateRegisterState({
            emailAddress: null,
            password : null,
            confirmPassword : null,
            countryOfResidence : "Hong Kong",
            segment : "business"
        });
    }
    render () {
        const {register, match, location} = this.props;
        const {showPassword} = this.state;
		const {url} = match;
        return (
            <Switch>
                <Route exact path={`${url}/business/onboarding`} component={Onboarding} />
                <Route exact path={url}>
                    <RegisterForm
                        register={register}
                        showPassword={showPassword}
                        updateState={this.updateState.bind(this)}
                        updateRegisterState={this.updateRegisterState.bind(this)} />
                </Route>
            </Switch>
        );
    }
}

export default withRouter(Register);