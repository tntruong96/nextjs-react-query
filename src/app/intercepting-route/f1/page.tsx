import Link from "next/link";
import React from "react";

const F1Page = () => {
    return (
        <>
            <div>F1 Page</div>
            <Link href="/intercepting-route/f1/f2">F2</Link>
        </>
    );
};

export default F1Page;
