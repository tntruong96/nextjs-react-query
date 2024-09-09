import { Modal, ModalProps } from "antd";
import React, { FC, PropsWithChildren } from "react";

type TProps = PropsWithChildren & {
    modalProps: ModalProps;
};

const ModalComponent: FC<TProps> = ({ children, modalProps }) => {
    return <Modal {...modalProps}>{children}</Modal>;
};

export default ModalComponent;
