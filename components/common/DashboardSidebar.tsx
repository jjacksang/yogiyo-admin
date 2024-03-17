'use client'
import React, { useState, useEffect } from 'react';
import { shoplistState } from '../../app/recoil/state';
import { useSetRecoilState } from 'recoil'
import { fetchShopList, registerShop } from '../../app/services/shopAPI'
import DashboardModal from './DashboardModal';
import Link from '@/node_modules/next/link';

const DashboardSidebar = () => {
  const setShopList = useSetRecoilState(shoplistState);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      await registerShop({ iconFile, bannerFile, shopData }); // 수정된 API 호출
      await fetchShopListHandler(); // 성공 후 가게 목록 조회
    } catch (error) {
      console.error("가게 등록 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    fetchShopListHandler(); // 컴포넌트 마운트 시 가게 목록 조회
  }, []);

  // 모달 열고 닫는 함수
  const toggleModal = () => setIsModalOpen(!isModalOpen);


    return (
      <div style={{ width: '260px', height: '100%', background: '#ffffff' }}> {/* 여기에 배경색 등 스타일 추가 가능 */}
        <div className='flex justify-center py-4 h-[106px] border-b border-gray-200'>
          <div className="inline-flex items-center justify-start w-[236px] h-[74px] p-[19px_8px_19px_12px] bg-white rounded-[8px] border border-[rgba(0,0,0,0.6)] cursor-pointer relative flex-row font-bold">
          <button onClick={toggleModal}>아직 가게가 없습니다</button>
          </div>
        </div>
        {isModalOpen && <DashboardModal closeModal={toggleModal} />}
        
        {/* 버튼 3개 부분 */}
        <div style={{ lineHeight: '16px', gap: '4px' }} className="w-full my-4 py-0 px-3 text-xs font-bold flex flex-row justify-between"
        >
          <Link href="/OrderHistory" passHref>
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>주문내역</p>
          </button>
          </Link>
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>통계</p>
          </button>
          <button className="flex flex-col justify-center items-center flex-1 h-[76px] w-[76px] text-center gap-[9.4px] border border-gray-200 rounded bg-white text-gray-800">
            <p>사장님장부</p>
          </button>
        </div>
        {/* 셀프 서비스홈 부분 */}
        <a style={{ lineHeight: '16px', color: 'rgba(0, 0, 0, 0.4)' }}
          className="pl-3 text-xs font-bold flex flex-row items-center h-10 decoration-none"
        >
          <svg width="20" height="20" fill="none" style={{ fill: 'none' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <mask id="myMask" x="3" y="2" width="18" height="20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 14.1213 3.70705 C 12.9497 2.53547 11.0503 2.53548 9.87868 3.70705 L 3.87868 9.70705 C 3.31607 10.2697 3 11.0327 3 11.8284 V 18.4999 C 3 20.1568 4.34315 21.4999 6 21.4999 H 18 C 19.6569 21.4999 21 20.1568 21 18.4999 V 11.8284 C 21 11.0327 20.6839 10.2697 20.1213 9.70705 L 14.1213 3.70705 Z M 11.2929 5.12126 C 11.6834 4.73074 12.3166 4.73074 12.7071 5.12126 L 18.7071 11.1213 C 18.8946 11.3088 19 11.5632 19 11.8284 V 18.4999 C 19 19.0522 18.5523 19.4999 18 19.4999 H 15.25 V 15.589 C 15.25 13.7698 13.8194 12.2499 12 12.2499 C 10.1806 12.2499 8.75 13.7698 8.75 15.589 V 19.4999 H 6 C 5.44772 19.4999 5 19.0522 5 18.4999 V 11.8284 C 5 11.5632 5.10536 11.3088 5.29289 11.1213 L 11.2929 5.12126 Z M 10.25 19.4999 H 13.75 V 15.589 C 13.75 14.5483 12.942 13.7499 12 13.7499 C 11.058 13.7499 10.25 14.5483 10.25 15.589 V 19.4999 Z"
                fill="rgb(255, 255, 255)"
              ></path>
            </mask>
          </svg>
          셀프서비스 홈
        </a>
        {/* 실선 부분 */}
        <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }} className="my-3 mx-4"></div>
        {/* 승인 알림 부터 시작 */}
        <a style={{ lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)', fontSize: '14px' }}
          className="flex flex-row items-center h-10 pl-6 font-normal no-underline"
        >승인알림</a>
        <a style={{ fontSize: '14px', lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)' }}
          className="flex flex-row items-center h-10 pl-6 font-normal no-underline"
        >
          요기요 공지사항
        </a>
        <a style={{ fontSize: '14px', lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)' }}
          className="flex flex-row items-center h-10 pl-6 font-normal no-underline"
        >
          PC 주문접수 계정관리
        </a>
        {/* 단골질문 버튼 부분 */}
        <div style={{ fontSize: '14px', lineHeight: '19px', color: 'rgba(0, 0, 0, 0.6)', padding: '12px 18px 32px' }}
          className="font-bold"
        >
          <div className="flex items-center mb-5 min-h-10">
            <a style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)' }} className="flex items-center justify-center rounded h-12 w-full">
              단골질문
            </a>
          </div>
        </div>
      </div>
    );
  };

export default DashboardSidebar