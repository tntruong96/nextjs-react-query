import React, { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
    return (
        <div>
            <h1>PRODUCT</h1>
            {children}
        </div>
    );
}
