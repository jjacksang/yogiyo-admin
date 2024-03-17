import { OwnerInfo } from "@/app/dashboard/DashboardMyInfo";
import React from "react";

type Props = {};

const DashboardMain= (props: Props) => {
  return (
    <div className="relative overflow-auto bg-[#F7F7F7]" style={{ flex: '1 1 auto', overscrollBehavior: 'none' }}>
      <div className="relative">
        <div className="flex flex-col mx-auto p-10 max-w-[936px] lg:p-[40px]">
        <p className="text-xl font-bold mb-4" style={{ lineHeight: '27px', color: 'rgba(0, 0, 0, 0.8)' }}>
          내 정보
        </p>
        {/*버튼 부분*/}
        <div className="w-full flex cursor-pointer mb-4 bg-white p-8" style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px',
          borderRadius: '16px'
        }}>
          <div className="w-12 h-12 rounded-md bg-gray-100 flex justify-center items-center" style={{ borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}></div>
            <div className="ml-4"> 
              <div className="flex items-center mb-1">
                <div className="flex">
                  <span className="text-lg font-bold" style={{ lineHeight: '24px', color: 'rgba(0, 0, 0, 0.8)' }}>
                    회원 정보
                  </span>
                </div>
              </div> 
              <p className="text-sm font-normal text-gray-600" style={{ lineHeight: '19px', wordBreak: 'keep-all', color: 'rgba(0, 0, 0, 0.6)' }}>
                아이디, 이름, 비밀번호, 휴대폰번호, 이메일을 확인/변경 할 수 있습니다
              </p>
          </div>
        </div>

        {/* 사장님 승인 알림 버튼 부분 */}
        <div className="w-full flex cursor-pointer mb-4 bg-white p-8" style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px',
          borderRadius: '16px'
        }}>
          <div className="w-12 h-12 rounded-md bg-gray-100 flex justify-center items-center" style={{ borderRadius: '8px', backgroundColor: 'rgba(0, 0, 0, 0.05)' }}></div>
            <div className="ml-4"> 
              <div className="flex items-center mb-1">
                <div className="flex">
                  <span className="text-lg font-bold" style={{ lineHeight: '24px', color: 'rgba(0, 0, 0, 0.8)' }}>
                    사장님 승인 알림
                  </span>
                </div>
              </div> 
              <p className="text-sm font-normal text-gray-600" style={{ lineHeight: '19px', wordBreak: 'keep-all', color: 'rgba(0, 0, 0, 0.6)' }}>
                사장님의 승인이 필요한 요청을 확인하고 처리할 수 있습니다 
              </p>
          </div>
        </div>

        {/* 문구 부분 */}
        <div className="mt-2"> 
          <div className="flex items-center"> 
            <p className="text-sm font-normal" style={{ lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)' }}>
              가게 직원 정보는 운영정보에서 추가해주세요
            </p>
            <a href="#" className="underline text-sm font-bold ml-1" style={{ lineHeight: '19px', color: 'rgb(12, 127, 228)' }}
            >직원정보 추가하기
            </a>
            <div className="flex mt-0 ml-auto"> 
              <div className="text-sm font-normal cursor-pointer" style={{ lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)' }}>
                회원탈퇴 
              </div>
              <div className="border-l border-gray-200" style={{ borderColor: 'rgba(0, 0, 0, 0.1)', height: '16px', margin: '0 12px' }}></div>
              <div className="text-sm font-normal cursor-pointer" style={{ lineHeight: '19px', color: 'rgba(0, 0, 0, 0.8)' }}>
                로그아웃
              </div>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default DashboardMain;
