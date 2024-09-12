"use client";

import ModalComponent from "@/components/Modal";
import { useGetDetailPhoto } from "@/hooks/Query/usePhoto";
import { Image } from "antd";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";

type Props = unknown;

const DetailModalPage: FC<Props> = () => {
    const { id } = useParams();
    const { data, setId } = useGetDetailPhoto();
    const [showModal, setShowModal] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setId(id as string);
    }, []);

    return (
        <ModalComponent
            modalProps={{
                open: showModal,
                footer: null,
                onCancel: () => {
                    setShowModal(false);
                },
                afterClose() {
                    router.back();
                },
            }}
        >
            <Image
                className="bg-cover"
                height="100%"
                width="100%"
                src={data?.urls.regular}
                alt={data?.alt_description}
            />
        </ModalComponent>
    );
};

export default DetailModalPage;
