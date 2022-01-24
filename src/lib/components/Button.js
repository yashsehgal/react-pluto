import React, { useState } from "react";

export default function Button({children, className, id, style, variant, size}, events) {
    const [buttonVariantRef, setButtonVariant] = useState('btn-primary');
    const [buttonSizeRef, setButtonSize] = useState('btn-medium');
    const buttonProperties = {
        'children': children,
        'className': className,
        'id': (id) ? id : ''
    };
    return (
        <React.Fragment>
            <button></button>
        </React.Fragment>
    )
}