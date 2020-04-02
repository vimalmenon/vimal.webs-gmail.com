import * as React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";


class FooterOne extends React.Component {
    render () {
        const {pathname} = this.props.location;
        return (
            <footer id="footer" class="helvetica">
                <div class="footer-bottom col-sm-12">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                            </div>
                            <div class="col-md-6 col-12">
                                <div class="text-right">
                                    &copy; Copyright. The Hongkong and Shanghai Banking Corporation Limited
                                </div>
                                <div class="text-right my-1">
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

export default withRouter(FooterOne);