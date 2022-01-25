import React from "react";

export default function Box({ children, className, style, id, onClick }) {
    const boxComponentProperties = {
        "style": style,
        "className": (className) ? className : '',
        "id": (id) ? id : '',
        "onClick": onClick
    };

    return (
        <React.Fragment>
            <div
                style={boxComponentProperties.style}
                className={boxComponentProperties.className}
                id={boxComponentProperties.id}
                onClick={boxComponentProperties.onClick}
            >
                {children ? children : ''}
            </div>
        </React.Fragment>
    )
}