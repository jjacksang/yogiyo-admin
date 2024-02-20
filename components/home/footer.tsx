import React from "react";

type Props = {};

export const Footer = (props: Props) => {
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
                    <a className="flex items-center justify-center relative w-auto max-w-[480px] h-7 rounded px-1.5">
                        <span className="text-xs font-normal text-custom-gray mx-0.5">
                            자세히 보기
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
