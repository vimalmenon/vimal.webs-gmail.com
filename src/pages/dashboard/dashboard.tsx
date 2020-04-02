import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

import image from "../../images/simple-pie-chart.svg";

class Dashboard extends React.Component {
    
    render () {
        return (
            <section class="dashboard d-flex flex-column h-100">
                <header class="header p-2">
                    <span class="d-flex flex-row-reverse">
                        <i class="fa fa-user-circle mx-2" aria-hidden="true" />
                        <i class="fa fa-envelope mx-2" aria-hidden="true" />
                        <i class="fa fa-bell mx-2" aria-hidden="true" />
                    </span>
                </header>
                <section class="d-flex content flex-fill flex-wrap">
                    <aside class="sidebar p-2 d-flex flex-column h-100">
                        <div class="application-heading d-flex justify-content-center">
                            QUANTUM
                        </div>
                        <ul class="flex-fill p-3">
                            <li class="my-4">
                                <span class="active" />
                                <i class="fa fa-home mx-3" aria-hidden="true" />
                                Home
                            </li>
                            <li class="my-4">
                                <i class="fa fa-balance-scale mx-3" aria-hidden="true" />
                                View balances
                            </li>
                            <li class="my-4">
                                <i class="fa fa-cc-amex mx-3" aria-hidden="true" />
                                Make a payment
                            </li>
                            <li class="my-4">
                                <i class="fa fa-exchange mx-3" aria-hidden="true" />
                                Make a transfer
                            </li>
                            <li class="my-4">
                                <i class="fa fa-unlock-alt mx-3" aria-hidden="true" />
                                Manage deposits
                            </li>
                            <li class="my-4">
                                <i class="fa fa-book mx-3" aria-hidden="true" />
                                Manage reports
                            </li>
                            <li class="my-4">
                                <i class="fa fa-user-o mx-3" aria-hidden="true" />
                                Manager users
                            </li>
                        </ul>
                        <ul class="h-30 p-3">
                            <li class="my-4">
                                <i class="fa fa-life-ring mx-3" aria-hidden="true" />
                                Support
                            </li>
                            <li class="my-4">
                                <i class="fa fa-sign-out mx-3" aria-hidden="true" />
                                Logout
                            </li>
                        </ul>
                    </aside>
                    <section class="main flex-fill">
                        <div class="main-box h-100 p-3" style={{"overflow": "auto"}}>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h3 class="h3 my-3">Dashboard</h3>
                                </div>
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-sm-12" style={{fontWeight: "bold"}}>
                                                    5 Currency balances
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-sm-12">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between">
                                                                <span class="h5">SGD</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                            <div class="card-text d-flex justify-content-start">
                                                                <h2 class="h2">550,000.00</h2>
                                                                <span class="ml-1" style={{lineHeight: "48px", fontSize: "14px"}}>SGD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{marginBottom: "0px"}}>
                                                                <span class="h5">USD</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                            <div class="card-text d-flex justify-content-start">
                                                                <h5 class="h5">150,000.00</h5>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>USD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{marginBottom: "0px"}}>
                                                                <span class="h5">GBP</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                            <div class="card-text d-flex justify-content-start">
                                                                <h5 class="h5">150,000.00</h5>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>GBP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{marginBottom: "0px"}}>
                                                                <span class="h5">MYR</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                            <div class="card-text d-flex justify-content-start">
                                                                <h5 class="h5">150,000.00</h5>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>MYR</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{marginBottom: "0px"}}>
                                                                <span class="h5">VND</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                            <div class="card-text d-flex justify-content-start">
                                                                <h5 class="h5">150,000.00</h5>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>VND</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mt-3" style={{fontWeight: "bold"}}>
                                                    3 Live deposits
                                                </div>
                                                <div class="col-md-6 mt-3">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-start" style={{marginBottom: "0px"}}>
                                                                <span class="h5">150,000.00</span>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>USD</span>
                                                            </h5>
                                                            <div class="card-text">
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>Start Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>End Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>interest rate</span>
                                                                    <span style={{fontSize: "10px"}}>0.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-start" style={{marginBottom: "0px"}}>
                                                                <span class="h5">150,000.00</span>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>USD</span>
                                                            </h5>
                                                            <div class="card-text">
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>Start Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>End Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>interest rate</span>
                                                                    <span style={{fontSize: "10px"}}>0.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card my-1">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-start" style={{marginBottom: "0px"}}>
                                                                <span class="h5">150,000.00</span>
                                                                <span class="ml-1" style={{lineHeight: "30px", fontSize: "12px"}}>USD</span>
                                                            </h5>
                                                            <div class="card-text">
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>Start Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>End Date</span>
                                                                    <span style={{fontSize: "10px"}}>15 Oct 2019</span>
                                                                </div>
                                                                <div class="d-flex justify-content-between">
                                                                    <span style={{fontSize: "10px"}}>interest rate</span>
                                                                    <span style={{fontSize: "10px"}}>0.4%</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row">
                                                <div class="col-sm-12" style={{fontWeight: "bold"}}>
                                                    Currency breakdown
                                                </div>
                                                 <div class="col-md-10">
                                                    <div class="card my-3">
                                                        <img src={image} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12" style={{fontWeight: "bold"}}>
                                                    Recent transaction
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{margin: "0px"}}>
                                                                <span class="h5">Currency Pot Transfer</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{margin: "0px"}}>
                                                                <span class="h5">Amazon LLC Merchant Services</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <h5 class="card-title d-flex justify-content-between" style={{margin: "0px"}}>
                                                                <span class="h5">BP Oil NEALAND Limited</span>
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true" />
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        );
    }
    componentDidMount () {
        let body = document.querySelector("body");
        let main = document.querySelector("#main");
        body.classList.add("overflow-hidden");
        main.classList.add("full-height");
    }
    componentWillUnmount () {
        let body = document.querySelector("body");
        let main = document.querySelector("#main");
        body.classList.remove("overflow-hidden");
        main.classList.remove("full-height");
    }
}

export default withRouter(Dashboard);