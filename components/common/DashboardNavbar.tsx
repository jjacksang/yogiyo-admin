import React from 'react'
import Link from '@/node_modules/next/link';

type Props = {}

const DashboardNavbar = (props: Props) => {
  return (
    <nav className="flex items-center justify-between w-full bg-white border-b border-gray-200 px-3" style={{ height: '56px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
    <div className="flex items-center">
      {/* 햄버거 버튼, lg 이상에서는 숨김 처리 */}
      <div className="lg:hidden w-6 h-6 mr-4">
        <svg width="100%" height="100%" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2"></rect>
          <rect y="11" width="24" height="2"></rect>
          <rect y="18" width="24" height="2"></rect>
        </svg>
      </div>
      {/* 이미지 로고, lg 이상에서만 표시 */}
      <Link href="/" className="hidden lg:inline-block w-[92px] h-[16px] mr-4">
        <img src="/images/yogiyologo.png" alt="Yogiyo Logo" />
      </Link>
      <div className="border-l border-gray-300 h-4 -ml-2 lg:visible invisible"></div>
      {/* '셀프서비스' 문구, lg 이상에서만 표시 */}
      <span className="hidden lg:inline-block text-base leading-6 ml-2 mb-0.5 lg:font-normal" style={{ color: 'rgb(51, 51, 51)' }}>
        셀프서비스
      </span>
    </div>
    {/* '셀프서비스홈' 텍스트, lg 이하에서만 표시 */}
    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
    <span className="text-base leading-5 font-bold text-black text-opacity-80">
        셀프서비스홈
      </span>
    </div>
  </nav>
    );
};

export default DashboardNavbar