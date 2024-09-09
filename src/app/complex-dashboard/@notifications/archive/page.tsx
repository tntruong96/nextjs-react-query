import CardComponent from "@/components/Card/card";
import Link from "next/link";
import React from "react";

const ArchiveNotification = () => {
    return (
        <CardComponent>
            Archive Notification
            <div>
                <Link href="/complex-dashboard">Default Notification</Link>
            </div>
        </CardComponent>
    );
};

export default ArchiveNotification;
