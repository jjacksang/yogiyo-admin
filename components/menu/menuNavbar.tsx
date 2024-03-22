"use client";
import MenuSet from "./menuSet";

export const MenuNav = () => {
    return (
        <div className="flex bg-white border divide-y-0">
            <div className="flex text-xl font-bold text-font-black gap-6 px-4 py-2 ">
                <button>메뉴설정</button>
                <button>옵션설정</button>
                <button>대표메뉴</button>
            </div>
        </div>
    );
};
