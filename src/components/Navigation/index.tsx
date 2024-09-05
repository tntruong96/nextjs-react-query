import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <nav className="flex gap-2">
            <Link href="/posts">Posts</Link>
            <Link href="/posts">Users</Link>
        </nav>
    );
};

export default Navigation;
