"use client";

import React, { ReactNode, useState } from "react";

interface IProps {
    users: ReactNode;
    notifications: ReactNode;
    revenue: ReactNode;
    children: ReactNode;
    login: ReactNode;
}

const Layout = ({ users, notifications, revenue, children, login }: IProps) => {
    const [isAuthen, setIsAuthen] = useState(true);
    const handleAuthenticate = () => {
        setIsAuthen(prev => !prev);
    };

    return (
        <div>
            <button type="button" onClick={handleAuthenticate}>
                {isAuthen ? "Log out" : "Log in"}
            </button>
            {isAuthen ? (
                <>
                    <div>{children}</div>
                    <div className="flex">
                        <div className="flex flex-col">
                            <div>{users}</div>
                            <div>{revenue}</div>
                        </div>
                        <div className="flex flex-1">{notifications}</div>
                    </div>
                </>
            ) : (
                <div>{login}</div>
            )}
        </div>
    );
};

export default Layout;
