"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import DashboardMain from "@/components/common/DashboardMain";
import { shopListState } from "../recoil/state"
import { useSetRecoilState } from "recoil";

const Page = () => {
  

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-row flex-1">
        <DashboardSidebar />
        <div className="flex-1 bg-[#F7F7F7]"> {/* 메인 컨텐츠 영역 */}

          <DashboardMain/>
        </div>
      </div>
    </div>
  );
};


export default Page

