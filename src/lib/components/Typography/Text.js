import React, { useEffect, useState } from "react";

export default function Text({
    className,
    id,
    style,
    variant,
    type,
    children
}, componentProps) {
    const [textVariantRef, setTextVariant] = useState("p-typo-text-md");
    const [textTypeRef, setTextType] = useState("text");
    useEffect(() => {
        switch(variant) {
            case "text-sm": setTextVariant("p-typo-text-sm"); break;
            case "text-md": setTextVariant("p-typo-text-md"); break;
            case "text-lg": setTextVariant("p-typo-text-lg"); break;

            case "body-sm": setTextVariant("p-typo-body-sm"); break;
            case "body-md": setTextVariant("p-typo-body-md"); break;
            case "body-lg": setTextVariant("p-typo-body-lg"); break;

            default: setTextVariant("p-typo-text-md"); break;
        }
        switch(type) {
            case "text": setTextType("text"); break;
            case "body": setTextType("body"); break;

            default: setTextType("text"); break;
        }
    });

    const textComponentProperties = {
        "className": (className) 
            ? `${textTypeRef} ${textVariantRef} ${className}`
            : `${textTypeRef} ${textVariantRef}`,
        "id": (id) ? id : '',
        "style": style,
        "children": children
    };

    return (
        <React.Fragment>
            <p
                className={textComponentProperties.className}
                style={textComponentProperties.style}
                id={textComponentProperties.id}
                {...componentProps}
            >
                {textComponentProperties.children ? textComponentProperties.children : <React.Fragment></React.Fragment>}
            </p>
        </React.Fragment>
    )
}