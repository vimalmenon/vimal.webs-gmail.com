import * as React from "react";

const ApplicationLabel = (props) => {
    let {text} = props;
    return (
        <span class="text-center application-label">{text}</span>
    )
};

export default ApplicationLabel;