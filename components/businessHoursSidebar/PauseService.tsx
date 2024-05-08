'use client';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { shoplistState, shopIdAtom, tempCloseShopRequestState  } from "../../app/recoil/state";
import { TempCloseShopRequest, tempCloseShop } from '@/app/services/shopAPI';

interface Props {
  onClose: () => void; 
}

const PauseService = ({ onClose }: Props) => {

  const store = useRecoilValue(shoplistState);
  const selectedShopId = useRecoilValue(shopIdAtom);
  const [tempCloseRequest, setTempCloseRequest] = useRecoilState(tempCloseShopRequestState);
  const selectedShop = store?.find(shop => shop.id === selectedShopId);


  // 시간 초기상태 관리
  const [activeTime, setActiveTime] = useState('');

  const timeOptions = ['30분', '1시간', '2시간', '오늘 하루', '직접 설정'];

  const handleTimeSelect = (time: string) => {
    setActiveTime(time);

    let closeUntil: string | null = null;
    let today: boolean | null = null;

    const now = new Date();

    switch (time) {
      case '30분':
        closeUntil = new Date(now.getTime() + 30 * 60000).toISOString();
        today = null;
        break;
      case '1시간':
        closeUntil = new Date(now.getTime() + 60 * 60000).toISOString();
        today = null;
        break;
      case '2시간':
        closeUntil = new Date(now.getTime() + 120 * 60000).toISOString();
        today = null;
        break;
      case '오늘 하루':
        // 설정된 시간에 맞게 오늘 자정까지 일시중지
        const midnight = new Date(now.setHours(23, 59, 59, 999)).toISOString();
        closeUntil = midnight;
        today = true;
        break;
      default:
        // '직접 설정' 또는 다른 옵션 선택 시 null 처리
        closeUntil = null;
        today = null;
        break;
    }

    // 업데이트된 상태 설정
    setTempCloseRequest({ closeUntil, today });
  };


  // 서버로 일시 중지 요청 보내는 핸들러
  const handleTempClose = async () => {
    if (selectedShopId && tempCloseRequest && tempCloseRequest.closeUntil) {
      try {
        await tempCloseShop(selectedShopId, tempCloseRequest);
        alert('가게 일시중지가 성공적으로 업데이트되었습니다.');
        onClose(); // 성공적으로 완료되면 모달을 닫거나 적절한 액션 수행
      } catch (error) {
        console.error('가게 일시중지 오류:', error);
        alert('가게 일시중지 중 오류가 발생했습니다.');
      }
    } else {
      alert('일시중지 정보를 완전히 입력해주세요.');
    }
  };

   // 반응형 대응 
   const [maxWidthStyle, setMaxWidthStyle] = useState('936px');
  
   useEffect(() => {
     const screenWidth = window.innerWidth;
     if (screenWidth >= 1024) {
       setMaxWidthStyle('calc(100% - 80px)');
     } else if (screenWidth >= 768) {
       setMaxWidthStyle('calc(100% - 64px)');
     } else {
       setMaxWidthStyle('936px');
     }
   }, []);


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
                    <div style={{ flex: 1 }}>
                      <h1 className="text-lg font-bold">{selectedShop ? selectedShop.name : 'No Shop Selected'}</h1>
                      <div style={{ height: '1px', background: 'rgba(0, 0, 0, 0.1)', margin: '20px 0' }}></div>
                        <p style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: '1rem', marginTop:'20px', marginBottom: '12px' }}>
                          중지 시간
                        </p>

                        {/* 버튼 속성 */}
                        <div className="flex gap-2 flex-wrap ">
                          {timeOptions.map(time => (
                            <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            style={{
                              width: '100px',
                              border: '1px solid rgb(229, 231, 235)', // Updated border color
                              borderRadius: '6px',
                              padding: '6px 12px',
                              background: '#ffffff',
                              color: activeTime === time ? '#3B82F6' : 'rgba(0, 0, 0, 0.6)',
                              fontWeight: activeTime === time ? 'bold' : 'normal',
                            }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        {/* 추가된 네모난 박스 */}
                        <div style={{
                          width: '530px',
                          height: '120px', // 높이 설정
                          backgroundColor: '#efefef', 
                          borderRadius: '6px', 
                          marginTop: '20px',
                        }}>
                          <div className="ml-6 pt-5 space-y-1 text-gray-600">
                          <span className=" text-gray-500">설정 범위</span>
                              <div className="flex items-center space-x-2 pt-5">
                                <span className="text-sm text-gray-400">시작</span>
                                <span className="text-gray-500">지금부터</span>
                                <span>~</span>
                                <span className="text-sm text-gray-400">종료</span>
                                
                                {/* 드롭박스 2개  */}
                                <div className="flex items-center space-x-2">
                                  <div className="relative">
                                    <select className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4">
                                      <option>오후 10시</option>
                                      <option>오후 11시</option>
                                      <option>다음날 밤 12시</option>
                                      <option>다음날 오전 1시</option>
                                      <option>다음날 오전 2시</option>
                                      <option>다음날 오전 3시</option>
                                      <option>다음날 오전 4시</option>
                                      <option>다음날 오전 5시</option>
                                      <option>다음날 오전 6시</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="relative">
                                  <select className="border border-gray-300 text-gray-700 bg-white rounded-md py-2 px-4">
                                    <option>00분</option>
                                    <option>10분</option>
                                    <option>20분</option>
                                    <option>30분</option>
                                    <option>40분</option>
                                    <option>50분</option>
                                  </select>
                                </div>
                              </div>
                          </div>   
                        </div>
                    </div>
                  </div>
                </div>
              </div>



              {/* 아랫 부분 */}
              <div className="pt-8 px-6 pb-6 flex justify-center items-center" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center">
                  <div className="flex items-center flex-auto" style={{minHeight: '2.5rem',fontSize: '1.375rem', lineHeight: '1.875rem', color: 'rgba(0, 0, 0, 0.8)'}}></div>
                  <button onClick={handleTempClose} className=" bg-blue-500 text-white px-20 py-3 font-bold rounded-md">
                    일시중지
                  </button>
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
