'use client'
import React from 'react'

type Props = {}

const PauseService = (props: Props) => {
  return (
    <div className="relative overflow-auto z-10 bg-[#F7F7F7]" style={{ flex: '1 1 auto', overscrollBehavior: 'none', height: '500px' }}>
      <div className="relative z-10">
        <div className="flex flex-col z-10 mx-auto max-w-[936px] lg:p-[40px]">
          {/* 버튼 부분 */}
          <div className="w-full flex mb-4 bg-white p-8" style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px',
            borderRadius: '16px',
            height: '500px',
          }}>
            <div className="ml-4"> 
              <div className="flex items-center mb-1">
                <div className="flex">
                  <span className="text-lg font-bold" style={{ lineHeight: '24px', color: 'rgba(0, 0, 0, 0.8)' }}>
                    일시 정지
                  </span>
                </div>
              </div> 
            </div>
            {/* 실선 */}
            <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)', height: '1px' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PauseService