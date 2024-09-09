"use client";

import React from "react";

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            {error.message}{" "}
            <button className="bg-neutral-300" type="button" onClick={reset}>
                Reset
            </button>
        </div>
    );
}
