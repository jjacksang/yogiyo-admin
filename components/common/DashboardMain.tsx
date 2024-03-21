import { OwnerInfo } from "@/app/dashboard/DashboardMyInfo";
import React from "react";

type DashboardMainProps = {
    children?: React.ReactNode;
};

const DashboardMain = ({ children }: DashboardMainProps) => {
    return (
        <div className="flex-1 bg-[#F7F7F7]">
            <OwnerInfo />
            {/* 여기에 컨텐츠가 들어갑니다. */}
            {children}
        </div>
    );
};

export default DashboardMain;
