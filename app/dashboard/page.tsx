"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import DashboardMain from "@/components/common/DashboardMain";
import { shopListState } from "../recoil/state"
import { useSetRecoilState } from "recoil";
import { registerShop } from "../services/shopAPI";
import Footer from "@/components/home/footer";

const Page = () => {
  
  registerShop();

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-row flex-1">
        <DashboardSidebar />
        <div className="flex flex-col flex-1 bg-[#F7F7F7] relative overflow-auto z-10 overscroll-none"> {/* 메인 컨텐츠 영역 */}
          <DashboardMain/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};


export default Page

