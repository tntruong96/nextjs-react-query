import CardComponent from "@/components/Card/card";
import Link from "next/link";
import React from "react";

const Notification = () => {
    return (
        <CardComponent>
            Default Notifications
            <div>
                <Link href="/complex-dashboard/archive">Archive</Link>
            </div>
        </CardComponent>
    );
};

export default Notification;
