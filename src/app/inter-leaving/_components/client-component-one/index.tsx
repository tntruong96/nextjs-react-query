"use client";

import React, { FC, PropsWithChildren } from "react";
import ClientComponentTwo from "../client-component-two";

const ClientComponentOne: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            ClientComponentOne
            <ClientComponentTwo />
            {children}
            {/* <ServerComponentOne /> */}
        </div>
    );
};

export default ClientComponentOne;
