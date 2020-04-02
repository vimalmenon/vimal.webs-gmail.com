import * as React from "react";
import {
  withRouter,
  Switch,
  Route
} from "react-router-dom";


import Landing from "./pages/landing";
import LogIn from "./pages/login";
import Register from "./pages/register/register";
import Header from "./pages/common/header";
import Footer from "./pages/common/footer";
import Welcome from "./pages/welcome";
import WelcomeUpdated from "./pages/welcome-updated";

import FooterOne from "./pages/common/footer-one";
import HeaderOne from "./pages/common/header-one";

import Dashboard from "./pages/dashboard/dashboard";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login : {
                emailAddress : null,
                password: null,
            },
            register : {
                emailAddress : null,
                password:  null,
                confirmPassword: null,
                countryOfResidence : "Hong Kong",
                segment : "personal"
            }
        };
    }
    onUpdate (updatedState) {
        let state = this.state;
        this.setState({
            ...state,
            ...updatedState
        });
    }
    render () {
        const {login, register} = this.state;
        const {pathname} = this.props.location;
        return (
             <Switch>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <HeaderOne />
                    <div class={(pathname !== "/login" && !pathname.startsWith("/register") && pathname !== "/") ? "col-sm-12" : "custom-background-image d-flex align-items-center col-sm-12"}>
                        <div class="container-lg">
                            <Switch>
                                <Route path="/login">
                                    <LogIn 
                                        login={login}
                                        onUpdate={this.onUpdate.bind(this)} />
                                </Route>
                                <Route path="/register">
                                    <Register 
                                        register={register}
                                        onUpdate={this.onUpdate.bind(this)}/>
                                </Route>
                                <Route path="/welcome">
                                    <Landing />
                                </Route>
                                <Route exact path="/">
                                    {/*<WelcomeUpdated />*/}
                                    <Welcome />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <FooterOne />
                </Route>
            </Switch>
        );
    }
}

export default withRouter(Main);