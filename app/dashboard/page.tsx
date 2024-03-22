"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import Footer from "@/components/home/footer";
import DashboardModal from "@/components/common/DashboardModal";
import { shoplistState } from "../recoil/state"
import { useSetRecoilState } from "recoil";
import { registerShop } from "../services/shopAPI";
import DashboardMypageMain from "@/components/common/DashboardMypageMain";
import OrderHistory from "@/components/common/OrderHistory";

const Page = () => {

  //ShopList() 
  

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

export default Page;
