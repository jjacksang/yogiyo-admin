import React from 'react'

type Props = {}

const DashboardSidebar = (props: Props) => {
    return (
      <div style={{ width: '260px', height: '100%', background: '#ffffff' }}> {/* 여기에 배경색 등 스타일 추가 가능 */}
        <div className='flex justify-center py-4 h-[106px] border-b border-gray-200'>
          <div className="inline-flex items-center justify-start w-[236px] h-[74px] p-[19px_8px_19px_12px] bg-white rounded-[8px] border border-[rgba(0,0,0,0.6)] cursor-pointer relative flex-row font-bold">
            아직 가게가 없습니다
          </div>
        </div>
      </div>
    );
  };

export default DashboardSidebar