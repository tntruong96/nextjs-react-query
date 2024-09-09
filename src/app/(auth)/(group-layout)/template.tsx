"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, PropsWithChildren, useState } from "react";

const navigate = [
    {
        pathname: "/login",
        title: "Login",
    },
    {
        pathname: "/register",
        title: "Register",
    },
    {
        pathname: "/forgot-password",
        title: "Forgot password",
    },
];

const AuthenticateLayout: FC<PropsWithChildren> = ({ children }) => {
    const [input, setInput] = useState("");
    const pathname = usePathname();

    return (
        <>
            <nav className="flex gap-2">
                {navigate.map(item => (
                    <Link
                        className={`${item.pathname.startsWith(pathname) ? "text-orange-500 font-bold" : "text-white"}`}
                        key={item.pathname}
                        href={item.pathname}
                    >
                        {item?.title}
                    </Link>
                ))}
            </nav>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                className="text-black"
            />
            {children}
        </>
    );
};

export default AuthenticateLayout;
