import React from "react";

export default function Box({ children }, componentProps) {
    return (
        <React.Fragment>
            <div {...componentProps}>
                {children ? children : ''}
            </div>
        </React.Fragment>
    )
}