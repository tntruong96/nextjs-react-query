import React from "react";

import * as fs from "fs";

const ServerComponentOne = () => {
    fs.readFileSync("src/components/Card/card.tsx", "utf-8");
    return <div>ServerComponentOne</div>;
};

export default ServerComponentOne;
