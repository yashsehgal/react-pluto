import React, { useEffect, useState } from "react";

export default function Heading({
    className,
    id,
    style,
    variant,
    children
}, componentProps) {
    const [headingVariantRef, setHeadingVariant] = useState("p-typo-heading");
    useEffect(() => {
        switch(variant) {
            case "default": setHeadingVariant("p-typo-heading"); break;
            case "xl": setHeadingVariant("p-typo-heading-xl"); break;
            case "2xl": setHeadingVariant("p-typo-heading-2xl"); break;
            case "3xl": setHeadingVariant("p-typo-heading-3xl"); break;
            case "4xl": setHeadingVariant("p-typo-heading-4xl"); break;
            
            default: setHeadingVariant("p-typo-heading"); break;
        }
    });

    const headingComponentProperties = {
        "className": (className) 
            ? `heading ${headingVariantRef} ${className}` 
            : `heading ${headingVariantRef}`,
        "id": (id) ? id : '',
        "style": style,
        "children": children
    };

    return (
        <React.Fragment>
            <p 
                className={headingComponentProperties.className}
                id={headingComponentProperties.id}
                style={headingComponentProperties.style}
                {...componentProps}
            >
                {headingComponentProperties.children ? headingComponentProperties.children : ''}
            </p>
        </React.Fragment>
    )
}