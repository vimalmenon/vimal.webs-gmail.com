import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

const Welcome = (props) => {
    return (
        <div class="row welcome-page">
            <div class="col-sm-12 my-3">
                <div class="row">
                    <div class="col-lg-7 col-md-12">
                        <div class=" row pt-5 mt-3 shadow bg-white rounded">
                            <div class="col-sm-12">
                                <div class="row my-3  px-3">
                                    <div class="col-sm-12">
                                        <h2 class="h2">Welcome to Quantum</h2>
                                        <div class="my-3">
                                            Creating a wallet takes no more than a few minutes. Store your money in multiple currencies, exchange between them, send it to other wallets, or transfer your fiat money right from your HSBC bank account.
                                        </div>
                                        <div class="col-sm-4 my-3">
                                            <button class="btn custom-button btn-block" onClick={() => {props.history.push("/register")}}>
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 background-gray">
                                <div class="row my-3 px-3">
                                    <div class="col-sm-12">
                                        <div class="my-4">
                                            <h5 class="h5">
                                                <span class="highlight"></span>
                                                How it Works
                                            </h5>
                                        </div>
                                        <div class="mb-4">
                                            We collect some basic details about you and your Business. Once you are verified with in our application, you will be granted access to all the exciting features.
                                        </div>
                                        <div  class="mb-4">
                                            Send funds around the globe or exchange various currencies all within the  Quantum app.  We encourage higher learning by providing instant access to analytics & charts for various currencies & assets curated specifically by renowned HSBC SMEs.
                                        </div>
                                        <div  class="mb-4">
                                            Store, Withdraw, Send, and Spend Your Funds globally all with in one single application.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default withRouter(Welcome);