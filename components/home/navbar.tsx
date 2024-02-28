import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { loginState, nicknameState } from "../../app/recoil/state";

export const Navbar = () => {
    const isLoggedIn = useRecoilValue(loginState);
    const nickname = useRecoilValue(nicknameState);
    return (
        <nav className="bg-white flex justify-between items-center border-b border-gray-200 lg:min-w-[1024px] px-6 py-3 h-16">
            <div className="flex items-center">
                <div className="lg:hidden w-6 h-6 mr-4">
                    <svg width="100%" height="100%" viewBox="0 0 24 24">
                        <rect y="4" width="24" height="2"></rect>
                        <rect y="11" width="24" height="2"></rect>
                        <rect y="18" width="24" height="2"></rect>
                    </svg>
                </div>
                <Link href="/" className="w-[92px] h-[16px]">
                    <img src="/images/yogiyologo.png" alt="Yogiyo Logo" />
                </Link>
            </div>
            {isLoggedIn ? (
                <div className="hidden lg:flex items-center gap-2 py-0 px-2">
                    <p>{nickname}</p>
                    <button>로그아웃</button>
                </div>
            ) : (
                <div>
                    <div className="hidden lg:flex items-center gap-2 py-0 px-2">
                        <Link href="/login/emailJoin" className="text-xs leading-4 text-gray-600">
                            회원가입
                        </Link>
                        <div className="border-l border-gray-300 h-4"></div> {/* 실선 */}
                        <Link href="/login" className="text-xs leading-4 text-gray-600">
                            로그인
                        </Link>
                    </div>
                    <div className="lg:hidden flex justify-center items-center">
                        <button className="bg-yogiyo-blue w-full relative text-white text-xs leading-4 px-8 h-7 rounded-md font-normal">
                            <span className="text-xs font-normal">사장님 로그인</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};
