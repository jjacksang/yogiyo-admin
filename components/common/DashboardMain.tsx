import { OwnerInfo } from "@/app/dashboard/DashboardMyInfo";
import React from "react";

type Props = {};

const DashboardMain = (props: Props) => {
    return (
        <div className="flex-1 bg-[#F7F7F7]">
            <OwnerInfo />
            {/* 여기에 컨텐츠가 들어갑니다. */}
        </div>
    );
};

export default DashboardMain;
