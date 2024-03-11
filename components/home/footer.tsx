import React, { useState } from "react";

type Props = {};

export const Footer = (props: Props) => {

    // 상세 정보 보기 상태 관리
    const [showDetails, setShowDetails] = useState(false);

    // 상세 정보 토글 함수
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <footer className="px-[22px] py-6 border border-t">
            <div className="flex flex-col justify-between items-center gap-0 md:flex-row-reverse">
                <a href="">
                    <button className="flex items-center jusitfy-center relative w-auto max-w-[480px] h-[40px] rounded-lg px-[14px] border">
                        <span className="text-sm font-normal mx-0.5 text-font-black">
                            서비스 소개 다운로드
                        </span>
                    </button>
                </a>
                <div className="flex flex-wrap">
                    <a className="text-custom-gray text-sm font-normal">서비스 이용약관</a>
                    <div className="text-custom-gray border-r border-custom-gray-border mx-4 h-3.5"></div>
                    <a className="text-custom-gray text-sm font-normal">사이트 이용약관</a>
                    <div className="text-custom-gray border-r border-custom-gray-border mx-4 h-3.5"></div>
                    <a className="text-custom-gray text-sm font-bold">개인정보 처리방침</a>
                    <div className="text-custom-gray border-r border-custom-gray-border mx-4 h-3.5"></div>
                    <a className="text-custom-gray text-sm font-normal">전자금융거래 이용약관</a>
                    <div className="text-custom-gray border-r border-custom-gray-border mx-4 h-3.5"></div>
                    <a className="text-custom-gray text-sm font-normal">광고 상품 이용약관</a>
                </div>
            </div>

            <div className="mt-3">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-custom-gray">주식회사 위대한 상상</span>
                    <a onClick={toggleDetails} className="flex items-center justify-center relative w-auto max-w-[480px] h-7 rounded px-1.5">
                        <span className="text-xs font-normal text-custom-gray mx-0.5">
                            자세히 보기
                        </span>
                        <div className="flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.4142L16.7071 10.7071C17.0976 10.3166 17.7308 10.3166 18.1213 10.7071C18.5118 11.0976 18.5118 11.7308 18.1213 12.1213L12.7071 17.5355C12.3166 17.926 11.6834 17.926 11.2929 17.5355L5.87868 12.1213C5.48816 11.7308 5.48816 11.0976 5.87868 10.7071C6.2692 10.3166 6.90237 10.3166 7.29289 10.7071L12 15.4142Z" fill="#000000"/>
                          </svg>
                        </div>
                    </a>    
                </div>
                    {showDetails && (
                      <div className="pt-0 px-4 pb-6">
                          <div className="flex flex-wrap items-center">
                          <div className="inline-flex flex-row items-baseline max-w-full text-sm leading-[19px] font-normal mb-[10px]"
                            style={{ 
                            fontSize: '14px', 
                            lineHeight: '19px', 
                            fontWeight: 'normal',
                            marginBottom: '10px'
                            }}
                           >
                            <span 
                              className="flex-none text-[rgba(0,0,0,0.4)] text-xs leading-[18px] font-normal"
                              style={{ fontSize: '13px' }}
                            >
                              대표이사
                            </span>
                              <span 
                                className="flex-0 flex-shrink min-w-0 text-[rgba(0,0,0,0.6)] text-sm leading-[18px] font-normal ml-2"
                                style={{ wordBreak: 'break-all', overflowWrap: 'break-word' }}
                              >
                                전준희
                              </span>
                              {/* 선 경계부분 */ }
                              <div 
                                className="border-l border-[rgba(0,0,0,0.1)] h-[14px] mx-[10px] mb-[10px]"
                                style={{ borderColor: 'rgba(0, 0, 0, 0.1)', height: '14px', margin: '0px 10px 10px' }}
                              >
                              </div>
                              <div className="inline-flex flex-row items-baseline max-w-full mb-2.5"
                                style={{
                                  fontSize: '14px',
                                  lineHeight: '19px',
                                  fontWeight: 'normal',
                                  marginBottom: '10px'
                                }}
                              >
                              {/* 첫 번째 자식 요소 */}
                                <span className="flex-none text-[rgba(0,0,0,0.4)]"
                                  style={{
                                    fontSize: '13px',
                                    lineHeight: '18px',
                                    fontWeight: 'normal',
                                  }}
                                >
                                  사업자 등록 번호
                                </span>

                            {/* 두 번째 자식 요소 */}
                            <span className="ml-2 flex-none text-[rgba(0,0,0,0.6)] break-all"
                              style={{
                              fontSize: '13px',
                              lineHeight: '18px',
                              fontWeight: 'normal',
                              }}
                            >
                              211-88-68802
                            </span>
                            {/* 링크 */}
                            <button className="relative flex items-center justify-center w-auto max-w-[480px] h-[28px] rounded-[6px] px-[8px] bg-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)] cursor-pointer"
                              style={{
                              appearance: 'none',
                              overflow: 'visible',
                              textTransform: 'none',
                              }}
                            >
                            <a href="#" className="ml-2 text-inherit bg-transparent"
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                              링크 텍스트
                            </a>
                            </button>
                            <div className="mb-2 border-l border-gray-200" style={{ height: '14px', margin: '0px 10px 10px' }}></div>
                              <div className="inline-flex flex-row items-baseline mb-2.5" style={{ maxWidth: '100%', fontSize: '14px', lineHeight: '19px', fontWeight: 'normal', alignItems: 'baseline', marginBottom: '10px' }}>
                                <span className="flex-none text-gray-600 text-sm leading-4.5" style={{ color: 'rgba(0, 0, 0, 0.4)', fontSize: '13px', lineHeight: '18px', fontWeight: 'normal' }}>
                                  통신판매업신고
                                </span>
                                <span className="ml-2 flex-auto text-gray-700 break-words" style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '13px', lineHeight: '18px', fontWeight: 'normal' }}>
                                  제 2018-서울서초-2635
                                </span>
                              </div>

                            </div>
                            </div>
                          </div>    
                        </div>
                    )}
            </div>
        </footer>
    );
};

export default Footer;
