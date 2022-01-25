import React, { useEffect, useState } from "react";

export default function Button({children, className, id, style, variant, size, onClick, onMouseEnter, onMouseLeave}) {
    const [buttonVariantRef, setButtonVariant] = useState('p-btn-primary');
    const [buttonSizeRef, setButtonSize] = useState('p-btn-medium');

    useEffect(() => {
        // operating button-variants
        switch(variant) {
            case "secondary": setButtonVariant("p-btn-secondary"); break;
            default: setButtonVariant("p-btn-primary"); break;
        }
        // operating button-sizes
        switch(size) {
            case "sm": setButtonSize("p-btn-small"); break;
            case "lg": setButtonSize("p-btn-large"); break;
            case "fw": setButtonSize("p-btn-full-width"); break;

            default: setButtonSize("p-btn-medium"); break;
        }
    });

    const buttonComponentProperties = {
        'children': children,
        'className': (className) 
            ? `p-button ${buttonVariantRef} ${buttonSizeRef} ${className}` 
            : `p-button ${buttonVariantRef} ${buttonSizeRef}`,
        'id': (id) ? id : '',
        'style': style,
        'onClick': onClick,
        'onMouseEnter': onMouseEnter,
        'onMouseLeave': onMouseLeave
    };

    return (
        <React.Fragment>
            {buttonComponentProperties.children
                ? (
                    <button
                        className={buttonComponentProperties.className}
                        id={buttonComponentProperties.id}
                        style={buttonComponentProperties.style}
                        onClick={buttonComponentProperties.onClick}
                        onMouseEnter={buttonComponentProperties.onMouseEnter}
                        onMouseLeave={buttonComponentProperties.onMouseLeave}
                    >
                        {buttonComponentProperties.children}
                    </button>
                ) : <React.Fragment></React.Fragment>
            }
        </React.Fragment>
    )
}