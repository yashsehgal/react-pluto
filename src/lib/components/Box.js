import React from "react";

export default function Box({ children, className, style, id, onClick, onMouseEnter, onMouseLeave }) {
    const boxComponentProperties = {
        "style": style,
        "className": (className) ? `p-box-container ${className}` : 'p-box-container',
        "id": (id) ? id : '',
        "onClick": onClick,
        "children": children,
        "onMouseEnter": onMouseEnter,
        "onMouseLeave": onMouseLeave
    };

    return (
        <React.Fragment>
            <div
                style={boxComponentProperties.style}
                className={boxComponentProperties.className}
                id={boxComponentProperties.id}
                onClick={boxComponentProperties.onClick}
                onMouseEnter={boxComponentProperties.onMouseEnter}
                onMouseLeave={boxComponentProperties.onMouseLeave}
            >
                {boxComponentProperties.children ? boxComponentProperties.children : <React.Fragment></React.Fragment>}
            </div>
        </React.Fragment>
    )
}