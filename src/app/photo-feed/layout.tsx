import React, { FC, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & { modal: ReactNode };

const PhotoFeedLayout: FC<Props> = ({ children, modal }) => {
    return (
        <>
            {modal}
            {children}
        </>
    );
};

export default PhotoFeedLayout;
