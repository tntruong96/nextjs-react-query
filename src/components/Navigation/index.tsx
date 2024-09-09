import Link from "next/link";
import React from "react";

const Navigation = () => {
    return (
        <nav className="flex gap-2">
            <Link href="/posts">Posts</Link>
            <Link href="/login">Login</Link>
            <Link href="/products">Product</Link>
            <Link href="/photo-feed">Photo Feed</Link>
            <Link href="/complex-dashboard">Complex Dashboard</Link>
        </nav>
    );
};

export default Navigation;
