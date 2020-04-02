import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";


class Footer extends React.Component {
    render () {
        const {pathname} = this.props.location;
        return (
            <footer id="footer">
                <div class="footer-main col-sm-12">
                    <div class="container">
                        <ul class="footer-large row">
                            <li class="footer-large-item col-lg-3">
                                <div class="footer-large-title">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <h3 class="footer-section-title">Contact HSBC</h3>
                                </div>
                                <a href="#">
                                    Write, call or send a message&nbsp;
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="footer-large-item col-lg-3">
                                <div class="footer-large-title">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <h3 class="footer-section-title">Find a branch</h3>
                                </div>
                                <a href="#">
                                    And your nearest Express Banking location&nbsp;
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="footer-large-item col-lg-3">
                                <div class="footer-large-title">
                                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    <h3 class="footer-section-title"> Help and Support</h3>
                                </div>
                                <a href="#">
                                    See FAQs, forms and fees &amp; charges&nbsp;
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="footer-large-item col-lg-3">
                                <div class="footer-large-title">
                                    <i class="fa fa-globe" aria-hidden="true"></i>
                                    <h3 class="footer-section-title">About HSBC</h3>
                                </div>
                                <a href="#">
                                    Careers, media, investor and  corporate information&nbsp;
                                    <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom col-sm-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="text-left link">
                                    <a href="#">Privacy and Security</a>
                                    <a href="#">Terms of Use</a>
                                    <a href="#">Online Security</a>
                                    <a href="#">Regulatory Disclosures</a>
                                    <a href="#">More</a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="text-right">
                                    &copy; Copyright. The Hongkong and Shanghai Banking Corporation Limited
                                </div>
                                <div class="text-right">
                                    2002-2019. All rights reserved 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);