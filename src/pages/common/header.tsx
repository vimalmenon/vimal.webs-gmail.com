import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";


class Header extends React.Component {
    render () {
        const {pathname} = this.props.location;
        return (
          <>
            <nav class="topnav navbar navbar-expand-md py-0">
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link link-tag" href="#">Personal <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link link-tag" href="#">Business</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link link-tag" href="#">Global Banking and Markets</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link link-tag" href="#">Private Banking</a>
                  </li>
                </ul>
              </div>
              <div class="form-inline my-5 my-lg-0">
                {(pathname !== "/login" && pathname !== "/register") ? 
                  <React.Fragment>
                    <img style={{height:'15px', width:'20px', marginRight: '10px'}} src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" alt="hk-flag" />
                    <a class="language-text" href="#">Hong Kong</a>
                    <button 
                      class="btn-topnav mx-2 custom-button" 
                      onClick={() => {this.props.history.push("/register")}}>
                        Register
                    </button>
                    <button 
                      class="btn-topnav mx-2 custom-button" 
                      onClick={() => {this.props.history.push("/login")}}>
                        Log on
                    </button>
                  </React.Fragment>
                : 
                  null
                }
              </div>
            </nav>
            <nav class=" bottomnav navbar navbar-expand-md">
              <div class="collapse navbar-collapse" id="navbarText">
                <img style={{height:'30px', width:'140px', marginRight: '100px'}}src="data:image/png;base64,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" alt="HSBC Hong Kong Bank" onClick={() => {this.props.history.push("/")}}/>
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item  px-2">
                    <a class="nav-link mx-2" href="#">Banking</a>
                  </li>
                  <li class="nav-item  px-2">
                    <a class="nav-link  mx-2" href="#">Borrowing</a>
                  </li>
                  <li class="nav-item  px-2">
                    <a class="nav-link  mx-2" href="#">Investing</a>
                  </li>
                  <li class="nav-item  px-2">
                    <a class="nav-link  mx-2" href="#">Insurance</a>
                  </li>
                  <li class="nav-item  px-2">
                    <a class="nav-link  mx-2" href="#">Insights</a>
                  </li>
                  <li class="nav-item  px-2">
                    <a class="nav-link  mx-2" href="#">Offers</a>
                  </li>
                </ul>
              </div>
            </nav>
          </>
        );
    }
}

export default withRouter(Header);