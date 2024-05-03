"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DashboardModal from "@/components/common/DashboardModal";
import Footer from "@/components/home/footer";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";
import OrderHistory from "@/components/common/OrderHistory";
import DashboardMypageMain from "@/components/common/DashboardMypageMain";
import { ManageBusinessHoursLink } from "@/components/businessHoursSidebar/ManageBusinessHoursLink";
import PauseService from "@/components/businessHoursSidebar/PauseService";
import HolidaySchedule from "@/components/businessHoursSidebar/HolidaySchedule";
import { ManageBusinessHours } from "@/components/businessHoursSidebar/ManageBusinessHours";
import MenuSet from "@/components/menu/MenuSet";
import MenuSoldout from "@/components/menu/MenuSoldout";
import { content } from "../recoil/state";
import { useRecoilValue, useSetRecoilState } from "recoil";


const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("main"); // 초기 메뉴를 "main"으로 설정
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    
    const setContent = useRecoilValue(content);
    const setRecoilContent = useSetRecoilState(content);

    useEffect(() => {
      setRecoilContent(selectedMenu);
    }, [selectedMenu, setRecoilContent]);


    return (
        <div className="flex flex-col min-h-screen">
          <DashboardNavbar />
          <div className="flex flex-row flex-1">
          <DashboardSidebar toggleModal={toggleModal} setSelectedMenu={setSelectedMenu}/>
            <div className="flex flex-col flex-1 bg-[#F7F7F7] relative overflow-auto overscroll-none"> {/* 메인 컨텐츠 영역 */}
              {/* 컨텐츠 영역 */}
              {setContent === "main" && <DashboardMypageMain />}
              {setContent === "manageBusinessHours" && <ManageBusinessHours/>}
              {setContent === "pauseService" && <PauseService onClose={() => console.log("메인클릭")} />}
              {setContent === "holidaySchedule" && <HolidaySchedule />}
              {setContent === "menuSet" && (<MenuSet onClose={() => console.log("메인클릭")} />)}
              {setContent === "menuSoldout" && <MenuSoldout />}
              <Footer/>
            </div>
          </div>
        </div>
      );
    };


export default Page;

