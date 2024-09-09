import Link from "next/link";
import React from "react";

const F4Page = () => {
    return (
        <div>
            F4 Page <Link href="/intercepting-route/f3">F3</Link>
            <Link href="/intercepting-route/f4/f6">F6</Link>
        </div>
    );
};

export default F4Page;
