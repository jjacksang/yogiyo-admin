"use client";
import React, { ReactNode, useState } from "react";
import { useRecoilState } from "recoil";
import { content } from "@/app/recoil/state";

type MenuGroupProps = {
    children?: ReactNode;
};

const MenuGroup = ({ children }: MenuGroupProps) => {
    const [showOption, setShowOption] = useState<boolean>(false);
    const [selectMenu, setSelectMenu] = useRecoilState(content);

    const OpenCloseBtn = (): void => {
        setShowOption(!showOption);
    };

    const handleMenuClick = (menuState: "menuSet" | "menuSoldout") => {
        setSelectMenu(menuState);
    };
    console.log(selectMenu);

    return (
        <>
            <a style={{ lineHeight: '16px', color: 'rgba(0, 0, 0, 0.4)' }} className="pl-3 text-xs font-bold flex flex-row items-center h-10 decoration-none">
                <svg width="20" height="20" fill="none" style={{ fill: 'none' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                메뉴관리
                <button onClick={OpenCloseBtn}>ㅇ</button>
            </a>
            {showOption ? (
                <ul>
                    <li className="text-base pt-2 pl-6" onClick={() => handleMenuClick("menuSet")}>
                        메뉴 관리
                    </li>
                    <li className="text-base pt-2 pl-6" onClick={() => handleMenuClick("menuSoldout")}>
                        메뉴 품절
                    </li>
                </ul>
            ) : (
                <div></div>
            )}
        </>
    );
};

export default MenuGroup;
