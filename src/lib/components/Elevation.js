import React, { useState, useEffect } from "react";

export default function Elevation({children, variant, className, id, style}) {
    const [elevationVariantRef, setElevationVariant] = useState("p-elevation-none");
    useEffect(() => {
        switch(variant) {
            case "none": setElevationVariant("p-elevation-none"); break;
            case "sm": setElevationVariant("p-elevation-sm"); break;
            case "md": setElevationVariant("p-elevation-md"); break;
            case "lg": setElevationVariant("p-elevation-lg"); break;
            case "xl": setElevationVariant("p-elevation-xl"); break;
            case "2xl": setElevationVariant("p-elevation-2xl"); break;
            case "3xl": setElevationVariant("p-elevation-3xl"); break;
            case "4xl": setElevationVariant("p-elevation-4xl"); break;

            default: setElevationVariant("p-elevation-none"); break;
        }
    }, [variant]);
    const elevationComponentProperties = {
        "children": children,
        "className": (className) ? `p-elevation-container ${elevationVariantRef} ${className}` : `p-elevation-container ${elevationVariantRef}`,
        "id": (id) ? id : '',
        "style": style
    };
    return (
        <div
            className={elevationComponentProperties.className}
            id={elevationComponentProperties.id}
            style={elevationComponentProperties.style}
        >
            {elevationComponentProperties.children ? elevationComponentProperties.children : <React.Fragment></React.Fragment>}
        </div>
    )
}