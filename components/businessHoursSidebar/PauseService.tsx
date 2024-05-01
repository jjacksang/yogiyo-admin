'use client';
import React, { useEffect, useState } from 'react';
import DashboardModal from '../common/DashboardModal';
import ShopList from '@/app/my/shopList';



interface Props {
  onClose: () => void; 
}

const PauseService = ({ onClose }: Props) => {

  {/* 반응형 대응 */}
  const screenWidth = window.innerWidth;

  let maxWidthStyle;
  if (screenWidth >= 1024) {
    maxWidthStyle = 'calc(100% - 80px)';
  } else if (screenWidth >= 768) {
    maxWidthStyle = 'calc(100% - 64px)';
  } else {
    maxWidthStyle = '936px';
  }


  return (
    <div className="relative flex flex-col min-h-screen overflow-auto z-10 bg-[#F7F7F7]" style={{ flex: '1 1 auto', overscrollBehavior: 'none', zIndex: 1 }}>
      {/* 네비게이션 바 부분 */}
      <div className="flex items-center w-full px-4 lg:px-6 h-16 bg-white shadow-md" style={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px'
      }}>
        {/* 네비게이션 카테고리 넣는 곳 */}
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className="w-full"> 
        <div style={{ maxWidth: maxWidthStyle }} className="flex flex-auto flex-col mx-auto">
          <div className="flex-auto min-w-0" style={{ maxWidth: '936px' }}>
            <div className="flex flex-col mt-8 rounded-lg bg-white" style={{ border: '1px solid rgba(0, 0, 0, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px'}}>
              
              {/* 윗부분 */}
                <div className="pt-8 px-6 pb-6" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                  <div className="flex items-center">
                    <div className="flex items-center flex-auto" style={{minHeight: '2.5rem',fontSize: '1.375rem', lineHeight: '1.875rem', color: 'rgba(0, 0, 0, 0.8)'}}>
                      일시중지
                    </div>
                    
                    <div className="ml-2 flex">
                      월별 내역 다운로드 
                    </div>
                  </div>
                </div>

              {/* 중간 부분 */}
              <div className="mt-6 mx-6 mb-8">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                  <ShopList/>


                  </div>

                </div>
              </div>



              {/* 아랫 부분 */}
              <div className="pt-8 px-6 pb-6" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center">
                  <div className="flex items-center flex-auto" style={{minHeight: '2.5rem',fontSize: '1.375rem', lineHeight: '1.875rem', color: 'rgba(0, 0, 0, 0.8)'}}></div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PauseService;
