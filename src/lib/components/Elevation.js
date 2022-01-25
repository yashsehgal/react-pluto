import { useState, useEffect } from "react";

export default function Elevation({children, variant, className, id, style}) {
    const [elevationVariantRef, setElevationVariant] = useState("p-elevation-none");
    const elevationComponentProperties = {
        "children": children,
        "className": (className) ? `elevation-container ${elevationVariantRef} ${className}` : `elevation-container ${elevationVariantRef}`
    };
    return (
        <div>

        </div>
    )
}