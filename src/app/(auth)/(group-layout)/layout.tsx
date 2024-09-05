import React, { FC, PropsWithChildren } from "react";

const AuthenticateLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <h2>Authenticate Layout</h2>
            {children}
        </>
    );
};

export default AuthenticateLayout;
