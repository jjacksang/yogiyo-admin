'use client'
import React, { useState, useEffect } from 'react';
import { shoplistState } from '../../app/recoil/state';
import { useSetRecoilState } from 'recoil'
import { ShopList } from '@/app/services/shopAPI';

const DashboardSidebar = () => {
  const setShopList = useSetRecoilState(shoplistState)

  const fetchShopList = async () => {
    try {
      const fetchedShopList = await ShopList();
      setShopList(fetchedShopList); // 상태 업데이트
    } catch (error) {
      console.error("가게 목록을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    fetchShopList();
  }, []);



    return (
      <div style={{ width: '260px', height: '100%', background: '#ffffff' }}> {/* 여기에 배경색 등 스타일 추가 가능 */}
        <div className='flex justify-center py-4 h-[106px] border-b border-gray-200'>
          <div className="inline-flex items-center justify-start w-[236px] h-[74px] p-[19px_8px_19px_12px] bg-white rounded-[8px] border border-[rgba(0,0,0,0.6)] cursor-pointer relative flex-row font-bold">
          <button onClick={fetchShopList}>아직 가게가 없습니다</button>
          </div>
        </div>
        <div className="text-xs leading-4 font-bold flex flex-row justify-between gap-1 w-full my-4 px-3 py-0">
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>주문내역</p>
          </button>
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>통계</p>
          </button>
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>사장님장부</p>
          </button>
        </div>
      </div>
    );
  };

export default DashboardSidebar