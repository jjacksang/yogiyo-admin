"use client";
import React, { useEffect } from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import DashboardMain from "@/components/common/DashboardMain";
import { OwnerInfo } from "@/app/dashboard/DashboardMyInfo";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { content } from "../recoil/state";
import MenuSet from "@/components/menu/menuSet";
import MenuSoldout from "@/components/menu/menuSoldout";

const Page = () => {
    const setContent = useRecoilValue(content);
    const setRecoilContent = useSetRecoilState(content);
    console.log("대시보드영역");
    // ShopList();

    useEffect(() => {
        setRecoilContent("ownerInfo");
    }, []);
    return (
        <div className="flex flex-col min-h-screen">
            <DashboardNavbar />
            <div className="flex flex-row flex-1">
                <DashboardSidebar />
                <div className="flex-1 bg-[#F7F7F7]">
                    {/* 메인 컨텐츠 영역 */}
                    <DashboardMain>
                        {setContent === "ownerInfo" && <OwnerInfo />}
                        {setContent === "menuSet" && <MenuSet />}
                        {setContent === "menuSoldout" && <MenuSoldout />}
                    </DashboardMain>
                </div>
            </div>
        </div>
    );
};

export default Page;
