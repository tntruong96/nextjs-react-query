import Link from "next/link";
import React from "react";

const InterceptingRoutePage = () => {
    return (
        <div className="flex gap-4">
            <Link href="/intercepting-route/f1">F1</Link>
            <Link href="/intercepting-route/f2">F2</Link>
            <Link href="/intercepting-route/f3">F3</Link>
            <Link href="/intercepting-route/f4">F4</Link>
        </div>
    );
};

export default InterceptingRoutePage;
