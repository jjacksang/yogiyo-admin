'use client'
import React, { useState, useEffect } from 'react';
import { shopListState } from '../../app/recoil/state';
import { useSetRecoilState } from 'recoil'
import { fetchShopList, registerShop } from '../../app/services/shopAPI'

const DashboardSidebar = () => {
  const setShopList = useSetRecoilState(shopListState);

  // 가게 목록 조회
  const fetchShopListHandler = async () => {
    try {
      // `NEXT_PUBLIC_APP_KEY` 환경 변수를 인증 헤더로 사용
      const authorization = `Bearer ${process.env.NEXT_PUBLIC_APP_KEY}`;
      const shops = await fetchShopList(authorization);
      setShopList(shops); // Recoil 상태 업데이트
    } catch (error) {
      console.error("가게 목록을 가져오는 중 오류가 발생했습니다:", error);
    }
  };

  // 가게 등록과 목록 조회를 처리하는 함수
  const handleRegisterAndFetchList = async () => {
    try {
      // 데이터 예시 
      const iconFile = new File(["icon"], "icon.png", { type: "image/png" });
      const bannerFile = new File(["banner"], "banner.png", { type: "image/png" });
      const shopData = {
        name: "새 가게",
        callNumber: "010-0000-0000",
        address: "서울특별시",
        latitude: 37.5665,
        longitude: 126.9780,
        categories: ["카테고리1", "카테고리2"]
      };
      const authorization = `Bearer ${process.env.NEXT_PUBLIC_APP_KEY}`;

      await registerShop({ authorization, iconFile, bannerFile, shopData }); // 수정된 API 호출
      await fetchShopListHandler(); // 성공 후 가게 목록 조회
    } catch (error) {
      console.error("가게 등록 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchShopListHandler(); // 컴포넌트 마운트 시 가게 목록 조회
  }, []);




    return (
      <div style={{ width: '260px', height: '100%', background: '#ffffff' }}> {/* 여기에 배경색 등 스타일 추가 가능 */}
        <div className='flex justify-center py-4 h-[106px] border-b border-gray-200'>
          <div className="inline-flex items-center justify-start w-[236px] h-[74px] p-[19px_8px_19px_12px] bg-white rounded-[8px] border border-[rgba(0,0,0,0.6)] cursor-pointer relative flex-row font-bold">
          <button onClick={handleRegisterAndFetchList}>아직 가게가 없습니다</button>
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