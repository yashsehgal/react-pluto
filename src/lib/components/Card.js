import React, { useState, useEffect } from "react";

export default function Card({ 
    children, 
    className, 
    id, 
    onClick, 
    onMouseEnter, 
    onMouseLeave, 
    hasBorders,
    hasBorderRadius,
    style,
}) {
    const [cardBorderRef, setCardBorder] = useState("p-card-border");
    const [cardBorderRadiusRef, setCardBorderRadius] = useState("p-card-border-radius");

    useEffect(() => {
        (hasBorders) ? setCardBorder("p-card-border") : setCardBorder("p-card-border-none");
        (hasBorderRadius) ? setCardBorderRadius("p-card-border-radius") : setCardBorderRadius("p-card-border-radius-none");
    }, [hasBorderRadius, hasBorders]);

    const cardComponentProperties = {
        "className": (className) 
            ? `p-card ${cardBorderRef} ${cardBorderRadiusRef} ${className}` 
            : `p-card ${cardBorderRef} ${cardBorderRadiusRef}`,
        "id": (id) ? id : '',
        "style": style,
        "onClick": onClick,
        "onMouseEnter": onMouseEnter,
        "onMouseLeave": onMouseLeave,
        "children": children
    };

    return (
        <React.Fragment>
            <div
                className={cardComponentProperties.className}
                id={cardComponentProperties.id}
                style={cardComponentProperties.style}
                onClick={cardComponentProperties.onClick}
                onMouseEnter={cardComponentProperties.onMouseEnter}
                onMouseLeave={cardComponentProperties.onMouseEnter}
            >
                {cardComponentProperties.children ? cardComponentProperties.children : <React.Fragment></React.Fragment>}
            </div>
        </React.Fragment>
    )
}