import React from 'react'
import Link from '@/node_modules/next/link';

type Props = {}

const DashboardNavbar = (props: Props) => {
  return (
    <nav className="bg-white flex justify-between items-center border-b border-gray-200 lg:min-w-[1024px] px-6 py-3 h-16">
            <div className="flex items-center">
                <div className="lg:hidden w-6 h-6 mr-4">
                    <svg width="100%" height="100%" viewBox="0 0 24 24">
                        <rect y="4" width="24" height="2"></rect>
                        <rect y="11" width="24" height="2"></rect>
                        <rect y="18" width="24" height="2"></rect>
                    </svg>
                </div>
                <Link href="/" className="w-[92px] h-[16px] mr-4">
                    <img src="/images/yogiyologo.png" alt="Yogiyo Logo" />
                </Link>
                <div className="border-l border-gray-300 h-4 -ml-2"></div>
                <span className="text-sm leading-4 text-gray-600 ml-2 mb-0.5">
                  셀프서비스
                </span>
            </div>
        </nav>
    );
};

export default DashboardNavbar