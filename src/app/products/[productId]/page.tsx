import React from "react";

export default function Page() {
    function getRandom(count: number) {
        return Math.floor(Math.random() * count);
    }

    const random = getRandom(2);
    if (random === 1) {
        throw new Error("Error loading products");
    }
    return <div>Product Detail Page</div>;
}
