import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

const LayoutRevenue: FC<IProps> = ({ children }) => {
    return (
        <>
            <nav>
                <Link href="/complex-dashboard/loss">Loss of revenue</Link>
                <Link href="/complex-dashboard/profit">Profit of revenue</Link>
            </nav>
            <div>{children}</div>
        </>
    );
};

export default LayoutRevenue;
