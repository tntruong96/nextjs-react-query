import React from "react";
import ServerComponentOne from "./_components/server-component-one";
import ClientComponentOne from "./_components/client-component-one";

const InterLeaving = () => {
    return (
        <div>
            InterLeaving
            <div>
                <ClientComponentOne>
                    <ServerComponentOne />
                </ClientComponentOne>
            </div>
        </div>
    );
};

export default InterLeaving;
