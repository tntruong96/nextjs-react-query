import React, { FC, PropsWithChildren } from "react";

const CardComponent: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            className="flex justify-center items-center p-[100px] m-[100px]"
            style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                border: "1px solid #FFF",
            }}
        >
            {children}
        </div>
    );
};

export default CardComponent;
