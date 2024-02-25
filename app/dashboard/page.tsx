import Link from "next/link";
import React from "react";
import DashboardNavbar from "@/components/common/DashboardNavbar";
import DashboardSidebar from "@/components/common/DashboardSidebar";

type Props = {}

const Page = (props: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <DashboardNavbar />
      <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <DashboardSidebar />
        <div style={{ flex: 1 }}> {/* 메인 컨텐츠 영역 */}
          {/* 여기에 페이지의 주요 내용 */}
        </div>
      </div>
    </div>
  );
};


export default Page

