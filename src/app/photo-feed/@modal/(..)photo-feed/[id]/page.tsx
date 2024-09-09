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
                    // console.log(path);
                    // router.;
                    setShowModal(false);
                },
                afterClose() {
                    // window.location.reload();
                    router.back();
                    // router.prefetch(path);
                    // router.push(path);
                    // console.log(path);
                },
            }}
        >
            <Image
                height={500}
                width={500}
                src={data?.urls.regular}
                alt={data?.alt_description}
            />
        </ModalComponent>
    );
};

export default DetailModalPage;
