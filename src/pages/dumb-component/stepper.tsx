import * as React from "react";

const Stepper = (props) => {
    let {items, currentIndex, onClick} = props;
    const {Component} = items[currentIndex];
    return (
        <React.Fragment>
            <div class="row journey-header-container helvetica">
                <div class="col-md-12 d-none d-sm-block steps-header-large"> 
                    <ul class="row"> 
                        {items && items.map((item, key, items) => {
                            return (
                                <li title={`Step ${key+1} of ${items.length} ${item.title}`} class={(currentIndex >=key) ? "active journey-header-items" : "journey-header-items"} key={key} onClick={onClick.bind(this, key)}>
                                    <div>
                                        {key +1}
                                    </div>
                                    <div>
                                        {item.title}
                                    </div>
                                </li>
                            )
                        })}
                    </ul> 
                </div>
                <div class="col-xs-12 col-sm-12 d-block d-md-none steps-header-small" tabIndex="0">
                </div>
             </div>
             <div class="row journey-container-content">
                <Component />
             </div>
        </React.Fragment>
    )
};

export default Stepper;